"use client";

import { useActionState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  contactFormSchema,
  type ContactFormData,
} from "@/lib/validations/contact";
import { submitContactForm } from "@/lib/actions/contact";
import FadeIn from "@/components/animation/FadeIn";

export default function ContactForm() {
  const t = useTranslations("booking");
  const formRef = useRef<HTMLFormElement>(null);

  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    null
  );

  const {
    register,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      preferredContact: "email",
      subject: "general",
    },
  });

  useEffect(() => {
    if (state?.success) {
      reset();
    }
  }, [state, reset]);

  const subjects = [
    "general",
    "appointment",
    "followup",
    "insurance",
    "other",
  ] as const;

  const contactMethods = ["email", "phone", "whatsapp"] as const;

  const inputClasses =
    "w-full bg-background-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-foreground-subtle/50 focus:border-gold focus:ring-1 focus:ring-gold/30 focus:outline-none transition-colors duration-200";

  const labelClasses = "block text-sm font-medium text-foreground mb-2";

  const errorClasses = "text-red-400 text-xs mt-1";

  return (
    <FadeIn direction="left">
      <div className="bg-background-card border border-border rounded-2xl p-8 md:p-10">
        {/* Success Message */}
        <AnimatePresence mode="wait">
          {state?.success && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-6 flex items-start gap-3 p-4 rounded-lg bg-emerald/10 border border-emerald/20"
            >
              <CheckCircle className="w-5 h-5 text-emerald mt-0.5 shrink-0" />
              <p className="text-emerald text-sm">{t("form.success")}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Error Message */}
        <AnimatePresence mode="wait">
          {state?.success === false && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-6 flex items-start gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/20"
            >
              <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
              <p className="text-red-400 text-sm">{t("form.error")}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <form ref={formRef} action={formAction} className="space-y-6">
          {/* Name & Email row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className={labelClasses}>
                {t("form.name")} <span className="text-gold">*</span>
              </label>
              <input
                id="name"
                type="text"
                placeholder={t("form.namePlaceholder")}
                className={cn(
                  inputClasses,
                  (errors.name || state?.errors?.name) && "border-red-400"
                )}
                {...register("name")}
              />
              {(errors.name || state?.errors?.name) && (
                <p className={errorClasses}>
                  {errors.name?.message || state?.errors?.name?.[0]}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className={labelClasses}>
                {t("form.email")} <span className="text-gold">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder={t("form.emailPlaceholder")}
                className={cn(
                  inputClasses,
                  (errors.email || state?.errors?.email) && "border-red-400"
                )}
                {...register("email")}
              />
              {(errors.email || state?.errors?.email) && (
                <p className={errorClasses}>
                  {errors.email?.message || state?.errors?.email?.[0]}
                </p>
              )}
            </div>
          </div>

          {/* Phone & Subject row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Phone */}
            <div>
              <label htmlFor="phone" className={labelClasses}>
                {t("form.phone")}
              </label>
              <input
                id="phone"
                type="tel"
                placeholder={t("form.phonePlaceholder")}
                className={cn(
                  inputClasses,
                  (errors.phone || state?.errors?.phone) && "border-red-400"
                )}
                {...register("phone")}
              />
              {(errors.phone || state?.errors?.phone) && (
                <p className={errorClasses}>
                  {errors.phone?.message || state?.errors?.phone?.[0]}
                </p>
              )}
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className={labelClasses}>
                {t("form.subject")} <span className="text-gold">*</span>
              </label>
              <select
                id="subject"
                className={cn(
                  inputClasses,
                  "cursor-pointer appearance-none",
                  (errors.subject || state?.errors?.subject) && "border-red-400"
                )}
                {...register("subject")}
              >
                {subjects.map((key) => (
                  <option key={key} value={key}>
                    {t(`form.subjects.${key}`)}
                  </option>
                ))}
              </select>
              {(errors.subject || state?.errors?.subject) && (
                <p className={errorClasses}>
                  {errors.subject?.message || state?.errors?.subject?.[0]}
                </p>
              )}
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className={labelClasses}>
              {t("form.message")} <span className="text-gold">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder={t("form.messagePlaceholder")}
              className={cn(
                inputClasses,
                "resize-none",
                (errors.message || state?.errors?.message) && "border-red-400"
              )}
              {...register("message")}
            />
            {(errors.message || state?.errors?.message) && (
              <p className={errorClasses}>
                {errors.message?.message || state?.errors?.message?.[0]}
              </p>
            )}
          </div>

          {/* Preferred Contact Method */}
          <div>
            <p className={labelClasses}>{t("form.preferredContact")}</p>
            <div className="flex flex-wrap gap-4">
              {contactMethods.map((method) => (
                <label
                  key={method}
                  className="flex items-center gap-2 cursor-pointer group"
                >
                  <input
                    type="radio"
                    value={method}
                    className="w-4 h-4 text-gold border-border bg-background-input focus:ring-gold/30 accent-[var(--color-gold)]"
                    {...register("preferredContact")}
                  />
                  <span className="text-sm text-foreground-muted group-hover:text-foreground transition-colors">
                    {t(`form.contactMethods.${method}`)}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isPending}
            className={cn(
              "w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 text-lg font-medium rounded-[var(--radius-button)] transition-all duration-300",
              "bg-gold text-background shadow-lg shadow-gold/20",
              "hover:bg-gold-light hover:shadow-gold/30 hover:-translate-y-0.5",
              "focus:outline-none focus:ring-2 focus:ring-gold/50 focus:ring-offset-2 focus:ring-offset-background",
              "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            )}
          >
            {isPending ? (
              <>
                <motion.div
                  className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                {t("form.sending")}
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                {t("form.submit")}
              </>
            )}
          </button>
        </form>
      </div>
    </FadeIn>
  );
}
