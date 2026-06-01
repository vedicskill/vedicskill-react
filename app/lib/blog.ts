import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPost } from "@/app/types";

const blogDir = path.join(process.cwd(), "content/blog");

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(blogDir);

  const posts = files.map((file) => {
    const filePath = path.join(blogDir, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const { data } = matter(fileContent);

    return {
      slug: file.replace(".md", ""),
      ...data,
    } as BlogPost;
  });

  // Sort by date (latest first)
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}