import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDir = path.join(process.cwd(), "content/blog");

export function getAllPosts(): any[] {
  const files = fs.readdirSync(blogDir);

  const posts = files.map((file) => {
    const filePath = path.join(blogDir, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const { data } = matter(fileContent);

    return {
      slug: file.replace(".md", ""),
      ...data,
    };
  });

  // Sort by date (latest first)
  return posts.sort(
    (a: any, b: any) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}