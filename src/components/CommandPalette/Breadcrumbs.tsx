import { useCommandPalette } from './context';

import ROUTES from '@/constants/routes';

export default function Breadcrumbs() {
    const {
        breadcrumbs,
        animationControls,
        setBreadcrumbs,
        setSearchTerm,
        setSelectedIndex,
    } = useCommandPalette();

    const handleSelect = () => {
        setBreadcrumbs(breadcrumbs.slice(1));
        setSearchTerm('');
        setSelectedIndex(0);

        animationControls.start({ scale: [1, 0.97, 1] });
    };

    const data = [ROUTES.HOME.title, ...breadcrumbs];

    return (
        <div className="flex items-center gap-2">
            {data.map((item) => (
                <button
                    key={item}
                    className="rounded bg-zinc-200 p-1 text-xs text-zinc-600 transition duration-200 ease-in-out hover:bg-zinc-300 hover:text-zinc-800 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-zinc-50"
                    onClick={handleSelect}
                >
                    {item}
                </button>
            ))}
        </div>
    );
}
