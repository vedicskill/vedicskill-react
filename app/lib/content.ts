import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getYaml } from "./yaml";

export function getTutorialStructure() {
    return getYaml("content/tutorials/tutorials.yaml") as any;
}

export function getLessons(course: string) {
  const dirPath = path.join(
    process.cwd(),
    `content/tutorials/${course}`
  );

  const files = fs.readdirSync(dirPath);

  const lessons = files.map((file) => {
    const filePath = path.join(dirPath, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const { data } = matter(fileContent);

    return {
      slug: file.replace(".md", ""),
      title: data.title,
      order: data.order || 0,
    };
  });

  // Sort by order
  return lessons.sort((a, b) => a.order - b.order);
}