import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(7).max(20).optional().or(z.literal("")),
  subject: z.enum(["general", "appointment", "followup", "insurance", "other"]),
  message: z.string().min(10).max(2000),
  preferredContact: z.enum(["email", "phone", "whatsapp"]),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
