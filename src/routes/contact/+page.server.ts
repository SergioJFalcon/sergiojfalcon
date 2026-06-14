import type { PageServerLoad, Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { superValidate, message } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import { contactSchema } from '$lib/schemas/contact';

const TO_ADDRESS = 'sergiojfalcon@gmail.com';
const FROM_ADDRESS = 'contact@sergiojfalcon.com';

// Minimal structural type for the Cloudflare Email Sending binding. The real runtime binding
// (Cloudflare.Env["EMAIL"]) is compatible; we type it locally so we don't depend on the
// generated ambient Env, which doesn't merge cleanly under svelte-check.
type EmailAddress = { email: string; name: string };
interface EmailBinding {
  send(message: {
    from: string | EmailAddress;
    to: string | EmailAddress | (string | EmailAddress)[];
    subject: string;
    replyTo?: string | EmailAddress;
    html?: string;
    text?: string;
  }): Promise<unknown>;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export const load: PageServerLoad = async () => {
  return { form: await superValidate(zod4(contactSchema)) };
};

export const actions: Actions = {
  default: async ({ request, platform }) => {
    const form = await superValidate(request, zod4(contactSchema));
    if (!form.valid) return fail(400, { form });

    if (form.data.company) {
      return message(form, "Thanks! Your message has been sent. I'll get back to you soon.");
    }

    const email = (platform?.env as { EMAIL?: EmailBinding } | undefined)?.EMAIL;
    if (!email) {
      return message(form, 'Email service is not configured yet. Please try again later.', {
        status: 503
      });
    }

    const { name, email: replyEmail, subject, message: body } = form.data;
    const safeBody = escapeHtml(body).replace(/\r?\n/g, '<br />');

    try {
      await email.send({
        to: TO_ADDRESS,
        from: { email: FROM_ADDRESS, name: 'sergiojfalcon.com' },
        replyTo: replyEmail,
        subject: `[contact] ${subject}`,
        text: `From: ${name} <${replyEmail}>\nSubject: ${subject}\n\n${body}`,
        html: `<p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(replyEmail)}&gt;</p>
<p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
<hr />
<p>${safeBody}</p>`
      });
    } catch (err) {
      console.error('contact email send failed:', err);
      return message(
        form,
        'Something went wrong sending your message. Please try again in a moment.',
        { status: 500 }
      );
    }

    return message(form, "Thanks! Your message has been sent. I'll get back to you soon.");
  }
};