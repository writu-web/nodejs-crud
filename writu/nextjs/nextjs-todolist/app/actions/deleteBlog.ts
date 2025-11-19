"use server";
import { revalidatePath } from "next/cache";
import { getBlogs, saveBlogs } from "../lib/blogs/blogs";
import { redirect } from "next/navigation";

export async function deleteBlog(formData: FormData): Promise<void> {
  console.log("Editing blog with formData:", formData);
  const blogId = formData.get("id") as string;
  const blogs = await getBlogs();
  const index = blogs.filter(
    (blog: { id: number }) => blog.id === Number(blogId)
  );
  await saveBlogs(blogs.splice(index, 1));
  revalidatePath("/blog");
  redirect("/blog");
}
