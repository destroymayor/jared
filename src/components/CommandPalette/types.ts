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
    searchTerm: string;
    selectedIndex: number;
    options: Array<OptionProps>;
    animationControls: AnimationControls;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
    resetCommandPaletteStatus: () => void;
}
