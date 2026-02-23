"use client";

import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  label: string;
  className?: string;
}

export default function WhatsAppButton({
  phoneNumber = "15551234567",
  label,
  className,
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2.5 px-8 py-4 text-lg font-medium rounded-[var(--radius-button)] transition-all duration-300",
        "bg-[#25D366] text-white shadow-lg shadow-[#25D366]/20",
        "hover:bg-[#20BD5A] hover:shadow-[#25D366]/30 hover:-translate-y-0.5",
        className
      )}
    >
      <motion.span
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="inline-flex"
      >
        <MessageCircle className="w-5 h-5" />
      </motion.span>
      {label}
    </a>
  );
}
