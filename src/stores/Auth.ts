import { create } from "zustand";

type State = {
  dni: number | string| null;
  phone: number | string | null;
};

type Actions = {
  loggin: (state:State) => void;
};

export const useAuth = create<State & Actions>((set) => ({
  // data
  dni: null,
  phone: null,
  // actions
  loggin: (state) => {
    set(() => ({ ...state }));
  },
}));
