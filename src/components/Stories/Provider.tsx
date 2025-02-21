import { create } from 'zustand';
import createStoreContext from '@/components/createStoreContext';

interface StoriesState {
    isPlaying: boolean;
    total: number;
    currentStory: number;
    duration: number;
    setCurrentStory: (currentStory: number) => void;
    togglePlay: () => void;
    setDuration: (duration: number) => void;
}

const createStoriesStore = (initialState?: Partial<StoriesState>) =>
    create<StoriesState>((set) => ({
        // state
        isPlaying: false,
        total: 0,
        currentStory: 0,
        duration: 2000,
        ...initialState,

        // mutations
        setCurrentStory: (currentStory) => set({ currentStory }),
        setDuration: (duration) => set({ duration }),
        togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
    }));

const [StoriesStoreProvider, useStories] = createStoreContext(createStoriesStore);

export default StoriesStoreProvider;

export { useStories };
