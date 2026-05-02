import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export async function getMarkdownContent(filePath: string) {
  const fullPath = path.join(process.cwd(), filePath);

  const file = fs.readFileSync(fullPath, "utf-8");

  // Extract metadata + content
  const { data, content } = matter(file);

  // Convert markdown → HTML
  const processedContent = await remark()
    .use(html)
    .process(content);

  const contentHtml = processedContent.toString();

  return {
    meta: data,
    contentHtml,
  };
}