import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name is too long'),
  email: z.email('Enter a valid email address'),
  subject: z.string().trim().min(1, 'Subject is required').max(150, 'Subject is too long'),
  message: z
    .string()
    .trim()
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message is too long'),
  // Honeypot: hidden from real users; if a bot fills it, we silently drop the submission.
  company: z.string().optional()
});

export type ContactSchema = typeof contactSchema;
