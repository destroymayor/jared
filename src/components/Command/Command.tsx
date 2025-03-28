'use client';

import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';

import {
    CommandDialog,
    CommandInput,
    CommandList,
    CommandEmpty,
    CommandGroup,
    CommandItem,
} from '@/components/ui/command';

import { COMMAND_TYPE } from './enums';
import { navigationOption, contactOption, themeOption } from './constants';

function Command(props: { open: boolean, onChange: (open: boolean) => void }) {
    const { open, onChange } = props;
    const router = useRouter();
    const { setTheme } = useTheme();

    const handleItemSelect = (params: { type: COMMAND_TYPE; value: string }) => {
        onChange(false);

        switch (params.type) {
            case COMMAND_TYPE.NAVIGATION:
                router.push(params.value);
                break;
            case COMMAND_TYPE.EXTERNAL:
                window.open(params.value, '_blank');
                break;
            case COMMAND_TYPE.THEME:
                setTheme(params.value);
                break;
        }
    };

    const options = [navigationOption, contactOption, themeOption];

    return (
        <CommandDialog open={open} onOpenChange={onChange}>
            <CommandInput placeholder="Search or jump to..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                {options.map((option) => (
                    <CommandGroup key={option.title} heading={option.title}>
                        {option.children.map((child) => (
                            <CommandItem
                                key={child.title}
                                className="flex items-center gap-2 dark:text-zinc-300"
                                onSelect={() =>
                                    handleItemSelect({
                                        type: option.type,
                                        value: child.value,
                                    })
                                }
                            >
                                <span className="text-zinc-600 dark:text-zinc-400">
                                    {child.icon}
                                </span>
                                <span>{child.title}</span>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                ))}
            </CommandList>
        </CommandDialog>
    );
}

export default Command;
