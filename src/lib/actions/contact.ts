"use server";

import { contactFormSchema } from "../validations/contact";

export async function submitContactForm(
  prevState: unknown,
  formData: FormData
) {
  const raw = Object.fromEntries(formData.entries());
  const parsed = contactFormSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      success: false as const,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  // Simulate sending (in production: send email via Resend/SendGrid)
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { success: true as const, errors: null };
}
