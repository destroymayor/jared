import { StateCreator } from 'zustand';

export type UISlice = {
    isCommandOpen: boolean;
    setCommandOpen: (open: boolean) => void;
};

export const createUISlice: StateCreator<UISlice> = (set) => ({
    isCommandOpen: false,
    setCommandOpen: (open) => set({ isCommandOpen: open }),
});
