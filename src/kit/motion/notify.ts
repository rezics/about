// The notify form with script: posts JSON, shows the answer in the status line, keeps the
// address on failure. Without script the form posts normally (src/kit/components/NotifyForm.astro).
import { onPage } from '../../engine';

type Messages = Record<string, string>;

function wire(form: HTMLFormElement) {
  const messages = JSON.parse(form.dataset.messages || '{}') as Messages;
  const status = form.querySelector<HTMLElement>('[role="status"]');
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const input = form.querySelector<HTMLInputElement>('input[name="email"]');
  const say = (text: string, state: 'busy' | 'done' | 'error') => {
    if (!status) return;
    status.textContent = text;
    status.dataset.state = state;
  };
  const submit = async (e: SubmitEvent) => {
    e.preventDefault();
    if (input && !input.checkValidity()) {
      say(messages.invalid_email ?? '', 'error');
      input.setAttribute('aria-invalid', 'true');
      input.focus();
      return;
    }
    input?.removeAttribute('aria-invalid');
    button?.setAttribute('disabled', '');
    say(messages.sending ?? '', 'busy');
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { 'content-type': 'application/json', accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (response.ok) {
        say(messages.done ?? '', 'done');
        form.reset();
      } else {
        const body = (await response.json().catch(() => ({}))) as { code?: string };
        say(messages[body.code ?? 'unavailable'] ?? messages.unavailable ?? '', 'error');
        if (body.code === 'invalid_email') input?.setAttribute('aria-invalid', 'true');
      }
    } catch {
      say(messages.unavailable ?? '', 'error');
    } finally {
      button?.removeAttribute('disabled');
    }
  };
  form.addEventListener('submit', submit);
  return () => form.removeEventListener('submit', submit);
}

export function startNotify() {
  onPage(() => {
    const offs = [...document.querySelectorAll<HTMLFormElement>('form[data-notify]')].map(wire);
    // Every "開放時通知我" link lands on the form: move focus to the address field too.
    const focusForm = (e: Event) => {
      const link = (e.target as HTMLElement | null)?.closest?.('[data-notify-link]');
      if (!link) return;
      const field = document.getElementById('notify-email');
      if (field) window.setTimeout(() => field.focus({ preventScroll: true }), 50);
    };
    document.addEventListener('click', focusForm);
    return () => {
      offs.forEach((f) => f());
      document.removeEventListener('click', focusForm);
    };
  });
}
