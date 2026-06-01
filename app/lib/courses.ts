import { supabase } from "@/app/lib/supabase"

export async function getCourses() {
  const { data, error } = await supabase
    .from("courses_with_active_coupons")
    .select("*")
    .order("rating", { ascending: false });

  if (error) {
    console.error("Supabase Error:", error);
    return [];
  }
  console.log(data)

  return data || [];
}