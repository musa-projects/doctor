"use client";

import StaggerContainer from "@/components/animation/StaggerContainer";
import BlogCard from "./BlogCard";
import type { BlogPostMeta } from "@/types/blog";

interface BlogGridProps {
  posts: BlogPostMeta[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <StaggerContainer
          staggerDelay={0.15}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {posts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
