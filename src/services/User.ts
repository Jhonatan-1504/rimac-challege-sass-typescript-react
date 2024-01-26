import axiosClient from "@/axiosClient";

export type User = {
  name: string;
  lastName: string;
  birthDay: string;
};

export async function getUser() {
  const { data, status } = await axiosClient.get<User>("/user.json");

  return { data, status };
}
