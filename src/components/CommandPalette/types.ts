import { AnimationControls } from 'framer-motion';

export type OptionChildrenProps = {
    title: string;
    icon: React.ReactNode;
    click: () => void;
};

export type OptionProps = {
    title?: string;
    children: OptionChildrenProps[];
};

export interface CommandPaletteContextProps {
    isOpen: boolean;
    isLoading: boolean;
    searchTerm: string;
    selectedIndex: number;
    filterOptions: OptionProps[];
    breadcrumbs: string[];
    animationControls: AnimationControls;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
    setBreadcrumbs: React.Dispatch<React.SetStateAction<string[]>>;
    resetCommandPaletteStatus: () => void;
}
