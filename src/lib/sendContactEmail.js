import { SITE } from '../data/portfolio.js';


async function sendViaFormSubmit({ name, email, subject, body }) {
  const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(SITE.email)}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      subject: subject || 'Portfolio message',
      message: body,
      _replyto: email,
      _subject: subject || `Portfolio message from ${name}`,
      _template: 'table',
    }),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok || data.success === 'false') {
    throw new Error(data.message || 'Failed to send message');
  }
  return data;
}

/** Sends contact form to portfolio inbox via FormSubmit. */
export async function sendContactEmail({ name, email, subject, body }) {
  return sendViaFormSubmit({ name, email, subject, body });
}
