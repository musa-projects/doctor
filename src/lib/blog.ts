import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPost, BlogPostMeta } from "@/types/blog";

const contentDirectory = path.join(process.cwd(), "src/content/blog");

export function getPostSlugs(): string[] {
  const enDirectory = path.join(contentDirectory, "en");
  if (!fs.existsSync(enDirectory)) return [];

  return fs
    .readdirSync(enDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getAllPosts(locale: string): BlogPostMeta[] {
  const localeDirectory = path.join(contentDirectory, locale);
  if (!fs.existsSync(localeDirectory)) return [];

  const files = fs
    .readdirSync(localeDirectory)
    .filter((file) => file.endsWith(".mdx"));

  const posts: BlogPostMeta[] = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const filePath = path.join(localeDirectory, file);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      author: data.author,
      image: data.image,
      tags: data.tags || [],
      readingTime: data.readingTime || 5,
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(
  locale: string,
  slug: string
): BlogPost | null {
  const filePath = path.join(contentDirectory, locale, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    author: data.author,
    image: data.image,
    tags: data.tags || [],
    readingTime: data.readingTime || 5,
    content,
  };
}
