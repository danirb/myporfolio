import type { APIRoute } from 'astro';

export const prerender = false;

import { contactFormSchema as ContactFormSchema } from '@/features/contact/type';
import { ui, type LanguageCode } from '@/i18n/ui';
import type {
  ContactFormTranslations,
  ContactFormApiResponse,
} from '@/features/contact/type';

export const POST: APIRoute = async ({ request }) => {
  let lang: LanguageCode = 'en'; // Default language
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
    // Separate formData for Zod validation (without lang property)
    const { lang: _lang, ...restOfBody } = requestBody;
    formDataForValidation = restOfBody;
  } catch (error) {
    const errorResponse: ContactFormApiResponse = {
      status: 'error',
      message: currentTranslations.toastErrorUnexpected,
      error: 'Invalid JSON input',
    };
    return new Response(JSON.stringify(errorResponse), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
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

  const { firstName, lastName, email, subject, message } = validationResult.data;

  console.log('Contact form submission received:');
  console.log('Language:', lang);
  console.log('From:', `${firstName} ${lastName} <${email}>`);
  if (subject) console.log('Subject:', subject);
  console.log('Message:', message);

  // Simulate a successful submission (integrate Resend or another email service here)
  return new Response(
    JSON.stringify({
      status: 'success',
      message: currentTranslations.toastSuccessMessageSent,
    } as ContactFormApiResponse),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
};
