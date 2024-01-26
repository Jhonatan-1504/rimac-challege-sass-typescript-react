import { CalculateAge } from "@/helpers/calculate-age";
import { type User, getUser } from "@/services/User";
import { create } from "zustand";

type State = {
  loading: boolean;
  user: User;
  age: number;
};

type Actions = {
  toGetUser: () => void;
};

export const useUser = create<State & Actions>((set) => ({
  // data
  user: {
    birthDay: "",
    lastName: "",
    name: "",
  },
  age: 18,
  loading: false,
  // actions
  toGetUser: async () => {
    const { data } = await getUser();

    const age = CalculateAge(data.birthDay);

    set(() => ({ user: data, age }));
  },
}));
