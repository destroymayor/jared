import { create } from 'zustand';
import { createUISlice, type UISlice } from './slices/ui.slice';

type AppStore = UISlice;

export const useAppStore = create<AppStore>()((...a) => ({
    ...createUISlice(...a),
}));
