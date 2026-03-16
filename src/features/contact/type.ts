import { z } from 'zod';

export type ContactFormTranslations = {
  firstNameLabel: string;
  emailLabel: string;
  subjectLabel: string;
  subjectPlaceholder: string;
  subjectOptionJob: string;
  subjectOptionCollaboration: string;
  subjectOptionConsulting: string;
  subjectOptionOther: string;
  messageLabel: string;
  firstNamePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  sendButtonLabel: string;
  toastSuccessMessageSent: string;
  toastErrorFailedToSend: string;
  toastErrorUnexpected: string;
  toastErrorDetails: string;
  toastErrorValidationFailed: string;
};

const stringFieldSchema = (minLength = 2, maxLength = 50) =>
  z
    .string()
    .nonempty() // Handles 'required' aspect
    .min(minLength) // Min length
    .max(maxLength); // Max length

export const contactFormSchema = z.object({
  firstName: stringFieldSchema(),
  email: z.string().nonempty().email(),
  subject: z.string().optional(),
  message: stringFieldSchema(10, 500),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export type ContactFormApiResponse =
  | {
      status: 'success';
      message: string;
      data?: unknown; // Resend data on success
    }
  | {
      status: 'error';
      message: string;
      // For Zod validation errors
      errors?: Record<string, Array<string> | undefined>;
      // For other errors (Resend, unexpected)
      error?: string;
    };
