import { create } from "zustand";

export type Who = "me" | "other";

type State = {
  who?: Who;

  plan: string;
  price: string;
};

type Actions = {
  chooseWho: (who: Who) => void;
  choosePlan: (state: State) => void;
};

export const useResumen = create<State & Actions>((set) => ({
  // data
  plan: "",
  price: "",
  // actions
  chooseWho: (who) => {
    set(() => ({ who }));
  },
  choosePlan: ({ plan, price }: State) => {
    set(() => ({ plan, price }));
  },
}));
