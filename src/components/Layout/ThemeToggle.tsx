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
            <Skeleton className="size-6 rounded-xl bg-zinc-300 text-transparent dark:bg-zinc-800" />
        );
    }

    return (
        <Button
            variant='link'
            size="icon"
            className="rounded-lg focus:outline-hidden cursor-pointer"
            aria-label={`Activate ${isDarkTheme ? 'light' : 'dark'} mode`}
            onClick={toggleTheme}
        >
            {isDarkTheme ? <Sun className="size-6" /> : <Moon className="size-6" />}
        </Button>
    );
}
