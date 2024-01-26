import axiosClient from '@/axiosClient';

export type Plan = {
  name: string;
  price: number;
  description: string[];
  age: number
}

type ListPlan = {
  list: Plan[];
}

export async function getPlans() {
  const { data, status } = await axiosClient.get<ListPlan>("/plans.json");

  return { data, status };
}
