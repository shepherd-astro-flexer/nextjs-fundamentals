"use server";

import { writeFile, readFile } from "fs/promises";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type User = {
  id: string;
  firstName: string;
  lastName: string;
};
// Create new user
export const createUserAction = async (formData: FormData) => {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const user = { firstName, lastName, id: Date.now().toString() };
  await saveUser(user);
  revalidatePath("/actions");
};

// Delete user
export const deleteUserAction = async (formData: FormData) => {
  const id = formData.get("id");
  const users = await fetchData();
  console.log(users);
  users.filter((user) => user.id !== id);
  await updateUsers(users);
  revalidatePath("/actions");
};

export const fetchData = async (): Promise<User[]> => {
  const result = await readFile("users.json", { encoding: "utf8" });
  const users = result ? JSON.parse(result) : [];
  return users;
};

const saveUser = async (user: User) => {
  const users = await fetchData();
  users.push(user);
  await writeFile("users.json", JSON.stringify(users));
};

const updateUsers = async (users: User[]) => {
  await writeFile("users.json", JSON.stringify(users));
};
