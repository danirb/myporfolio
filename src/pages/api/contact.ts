import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const prerender = false;

import { contactFormSchema as ContactFormSchema } from '@/features/contact/type';
import { ui, type LanguageCode } from '@/i18n/ui';
import type {
  ContactFormTranslations,
  ContactFormApiResponse,
} from '@/features/contact/type';

const subjectLabels: Record<string, string> = {
  job: 'Oferta de trabajo',
  collaboration: 'Colaboración',
  consulting: 'Consultoría',
  other: 'Otro',
};

export const POST: APIRoute = async ({ request }) => {
  let lang: LanguageCode = 'en';
  let currentTranslations: ContactFormTranslations = ui[lang]
    .contactPage as ContactFormTranslations;

  let formDataForValidation;
  try {
    const requestBody = await request.json();
    const requestLang = requestBody.lang as LanguageCode | undefined;
    if (requestLang && ui[requestLang]) {
      lang = requestLang;
      currentTranslations = ui[lang].contactPage as ContactFormTranslations;
    }
    const { lang: _lang, ...restOfBody } = requestBody;
    formDataForValidation = restOfBody;
  } catch {
    return new Response(
      JSON.stringify({
        status: 'error',
        message: currentTranslations.toastErrorUnexpected,
        error: 'Invalid JSON input',
      } as ContactFormApiResponse),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const validationResult = ContactFormSchema.safeParse(formDataForValidation);

  if (!validationResult.success) {
    return new Response(
      JSON.stringify({
        status: 'error',
        message: currentTranslations.toastErrorValidationFailed,
        errors: validationResult.error.flatten().fieldErrors,
      } as ContactFormApiResponse),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const { firstName, email, subject, message } = validationResult.data;

  const smtpHost = import.meta.env.SMTP_HOST;
  const smtpPort = Number(import.meta.env.SMTP_PORT ?? 587);
  const smtpUser = import.meta.env.SMTP_USER;
  const smtpPass = import.meta.env.SMTP_PASS;
  const toEmail = import.meta.env.CONTACT_EMAIL ?? 'danielredondoblanco@gmail.com';

  if (!smtpHost || !smtpUser || !smtpPass) {
    console.error('SMTP env vars not configured');
    return new Response(
      JSON.stringify({
        status: 'error',
        message: currentTranslations.toastErrorUnexpected,
        error: 'Email service not configured',
      } as ContactFormApiResponse),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: { user: smtpUser, pass: smtpPass },
  });

  const subjectLabel = subject ? (subjectLabels[subject] ?? subject) : 'Sin asunto';

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${smtpUser}>`,
      to: toEmail,
      replyTo: email,
      subject: `[Portfolio] ${subjectLabel} — ${firstName}`,
      text: `Nombre: ${firstName}\nEmail: ${email}\nAsunto: ${subjectLabel}\n\n${message}`,
      html: `
        <p><strong>Nombre:</strong> ${firstName}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Asunto:</strong> ${subjectLabel}</p>
        <hr/>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });
  } catch (err) {
    console.error('SMTP send error:', err);
    return new Response(
      JSON.stringify({
        status: 'error',
        message: currentTranslations.toastErrorFailedToSend,
        error: String(err),
      } as ContactFormApiResponse),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  return new Response(
    JSON.stringify({
      status: 'success',
      message: currentTranslations.toastSuccessMessageSent,
    } as ContactFormApiResponse),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
};
