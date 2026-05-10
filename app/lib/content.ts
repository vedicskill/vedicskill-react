import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getYaml } from "./yaml";

export function getTutorialStructure() {
    return getYaml("content/tutorials/tutorials.yaml") as any;
}

export function getLessons(course: string) {
  const dirPath = path.join(process.cwd(), `content/tutorials/${course}`);

  function walk(dir: string, base = ""): any[] {
    const entries = fs.readdirSync(dir);
    let res: any[] = [];
    for (const entry of entries) {
      const filePath = path.join(dir, entry);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        res = res.concat(walk(filePath, path.join(base, entry)));
        continue;
      }
      if (entry === "_category_.json") continue;
      // Only include markdown (.md) files; ignore MDX files after conversion
      if (!entry.endsWith(".md")) continue;
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);
      const slug = path.join(base, entry.replace(/\.md$/, "")).replace(/\\/g, "/");
      res.push({
        slug,
        title: data.title || slug,
        order: data.sidebar_position ?? data.order ?? 0,
      });
    }
    return res;
  }

  const lessons = walk(dirPath);
  return lessons.sort((a, b) => a.order - b.order);
}