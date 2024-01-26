import { create } from "zustand";

type State = {
  dni: number | string | null;
  phone: number | string | null;
  privacy_policy: number | boolean;
  trade_policy: number | boolean;
};

type Actions = {
  loggin: (state: State) => void;
};

export const useAuth = create<State & Actions>((set) => ({
  // data
  dni: null,
  phone: null,
  privacy_policy: false,
  trade_policy: false,
  // actions
  loggin: (state) => {
    set(() => ({ ...state }));
  },
}));
