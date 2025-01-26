'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import useHasMounted from '@/hooks/use-has-mounted.hook';

export default function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const hasMounted = useHasMounted();

    const isDarkTheme =
        hasMounted && (resolvedTheme === 'dark' || resolvedTheme === 'system');

    const toggleTheme = () => setTheme(resolvedTheme === 'light' ? 'dark' : 'light');

    if (!hasMounted) {
        return (
            <Skeleton className="h-10 w-10 rounded-xl bg-zinc-300 text-transparent dark:bg-zinc-800" />
        );
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            className="rounded-lg ring-zinc-400 transition duration-200 ease-in-out hover:ring-2 focus:outline-hidden dark:hover:bg-black dark:hover:ring-zinc-600"
            aria-label={`Activate ${isDarkTheme ? 'light' : 'dark'} mode`}
            onClick={toggleTheme}
        >
            <span className="h-6 w-6">{isDarkTheme ? <Sun /> : <Moon />}</span>
        </Button>
    );
}
