import { type Plan, getPlans } from "@/services/Plant";
import { create } from "zustand";

type State = {
  loading: boolean;
  data: Plan[];
};

type Actions = {
  toGetPlans: () => void;
};

export const usePlan = create<State & Actions>((set) => ({
  // data
  data: [],
  loading: false,
  // actions
  toGetPlans: async () => {
    const { data, status } = await getPlans();

    if (status !== 200) {
      data.list = [];
    }

    set(() => ({ data: data.list }));
  },
}));
