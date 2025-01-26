'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';

import { Command as CommandIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
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

function Command() {
    const router = useRouter();
    const { setTheme } = useTheme();
    const [open, setOpen] = useState(false);

    const handleItemSelect = (params: { type: COMMAND_TYPE; value: string }) => {
        setOpen(false);

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
        <>
            <Button
                size="icon"
                variant="ghost"
                onClick={() => setOpen(true)}
                className="flex h-10 w-10 items-center justify-center rounded-lg ring-zinc-400 transition duration-200 ease-in-out hover:ring-2 focus:outline-hidden dark:hover:ring-zinc-600 dark:hover:bg-black"
                aria-label="Command palette"
            >
                <CommandIcon />
            </Button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Search or jump to..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    {options.map((option) => (
                        <CommandGroup key={option.title} heading={option.title}>
                            {option.children.map((child) => (
                                <CommandItem
                                    key={child.title}
                                    className="flex items-start gap-2 dark:text-zinc-300"
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
        </>
    );
}

export default Command;
