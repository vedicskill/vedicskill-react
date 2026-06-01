import { supabase } from "@/app/lib/supabase";
import type { CourseRecord } from "@/app/types";

export async function getCourses(): Promise<CourseRecord[]> {
  const { data, error } = await supabase
    .from("courses_with_active_coupons")
    .select("*")
    .order("rating", { ascending: false });

  if (error) {
    console.error("Supabase Error:", error);
    return [];
  }

  return (data as CourseRecord[]) || [];
}