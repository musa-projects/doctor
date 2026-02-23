"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { BlogPostMeta } from "@/types/blog";

interface BlogCardProps {
  post: BlogPostMeta;
  index?: number;
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  const t = useTranslations("blog.blog");

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
    >
      <Link href={`/blog/${post.slug}`}>
        <article className="card-luxury group overflow-hidden h-full flex flex-col">
          {/* Image */}
          <div className="relative h-52 overflow-hidden">
            {post.image ? (
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-background-elevated to-gold-dark/10" />
            )}
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background-card via-background-card/20 to-transparent" />
            {/* Tags */}
            <div className="absolute bottom-3 left-4 right-4 flex flex-wrap gap-2">
              {post.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-gold border border-gold/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-1">
            {/* Meta */}
            <div className="flex items-center gap-4 text-foreground-subtle text-sm mb-3">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {post.readingTime} {t("minRead")}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold font-serif mb-3 text-foreground group-hover:text-gold transition-colors duration-300 line-clamp-2">
              {post.title}
            </h3>

            {/* Description */}
            <p className="text-foreground-muted text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
              {post.description}
            </p>

            {/* Read more */}
            <div className="flex items-center gap-2 text-gold text-sm font-medium group-hover:gap-3 transition-all duration-300">
              {t("readMore")}
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
