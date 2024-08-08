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
export const createUserAction = async (prevState: any, formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log(prevState);
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const user = { firstName, lastName, id: Date.now().toString() };

  try {
    // throw new Error("there was an error...");
    await saveUser(user);
    revalidatePath("/actions");
    return "Created user successfully...";
  } catch (error) {
    console.log(error);
    return "Failed to created user...";
  }
};

// Delete user
export const deleteUserAction = async (id: string, formData: FormData) => {
  const name = formData.get("name") as string;
  console.log(name);
  const users = await fetchData();
  // console.log(users);
  const newUsers = users.filter((user) => user.id !== id);
  await updateUsers(newUsers);
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
