import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export async function getMarkdownContent(filePath: string) {
  const fullPath = path.join(process.cwd(), filePath);

  const file = fs.readFileSync(fullPath, "utf-8");

  const { data, content } = matter(file);

  let cleanContent = content.replace(/^import .*$/gm, "");

  cleanContent = cleanContent.replace(/\{\/\*[\s\S]*?\*\/\}/g, "");

  cleanContent = cleanContent.replace(/<Image[^>]*\/?>/g, "");

  cleanContent = cleanContent.replace(/require\([^\)]*\)/g, "");

  cleanContent = cleanContent.replace(/<!--[\s\S]*?-->/g, "");

  let contentHtml = "";

  try {
    const processedContent = await remark().use(html).process(cleanContent);

    contentHtml = processedContent.toString();
  } catch (err) {
    contentHtml = `<pre>${cleanContent}</pre>`;
  }

  return {
    meta: data,
    contentHtml,
  };
}

export async function getLessonMetadata(course: string, lesson: string) {
  const filePath = `content/tutorials/${course}/${lesson}.md`;

  const { meta } = await getMarkdownContent(filePath);

  return meta;
}
