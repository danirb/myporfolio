import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  type ContactFormValues,
  type ContactFormTranslations,
  contactFormSchema,
  type ContactFormApiResponse,
} from '../type';
import { setGlobalZodErrorMap } from '@/i18n/zodErrorMap';
import type { LanguageCode } from '@/i18n/ui';
import { Loader2, Send } from 'lucide-react';
import { toast } from 'sonner';

interface ContactFormProps {
  lang: LanguageCode;
  formTranslations: ContactFormTranslations;
  onSubmitSuccess?: () => void; // Optional callback for successful submission
}

export function ContactForm({
  lang,
  formTranslations,
  onSubmitSuccess,
}: ContactFormProps) {
  useEffect(() => {
    setGlobalZodErrorMap(lang);
  }, [lang]);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: '',
      email: '',
      subject: '',
      message: '',
    },
    mode: 'onBlur',
  });

  async function onSubmit(values: ContactFormValues) {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...values, lang }),
      });

      const result: ContactFormApiResponse = await response.json();

      if (result.status === 'success') {
        console.log('Form submitted successfully:', result);
        toast.success(
          result.message || formTranslations.toastSuccessMessageSent
        );
        form.reset();
        if (onSubmitSuccess) {
          onSubmitSuccess();
        }
      } else if (result.status === 'error') {
        console.error('Form submission error:', result);
        let errorMessage =
          result.message || formTranslations.toastErrorFailedToSend;
        if (result.errors) {
          const errorMessages = Object.values(result.errors).flat().join('\n');
          errorMessage += `\n\n${formTranslations.toastErrorDetails}\n${errorMessages}`;
        }
        toast.error(errorMessage);
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
      toast.error(formTranslations.toastErrorUnexpected);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{formTranslations.firstNameLabel}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={formTranslations.firstNamePlaceholder}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{formTranslations.emailLabel}</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder={formTranslations.emailPlaceholder}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{formTranslations.subjectLabel}</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue
                      placeholder={formTranslations.subjectPlaceholder}
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="job">
                    {formTranslations.subjectOptionJob}
                  </SelectItem>
                  <SelectItem value="collaboration">
                    {formTranslations.subjectOptionCollaboration}
                  </SelectItem>
                  <SelectItem value="consulting">
                    {formTranslations.subjectOptionConsulting}
                  </SelectItem>
                  <SelectItem value="other">
                    {formTranslations.subjectOptionOther}
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{formTranslations.messageLabel}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={formTranslations.messagePlaceholder}
                  rows={5}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full"
          size="lg"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? (
            <Loader2 className="mr-2 size-4 animate-spin" />
          ) : (
            <>
              <Send className="mr-2 size-4" />
              {formTranslations.sendButtonLabel}
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
