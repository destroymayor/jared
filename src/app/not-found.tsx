export const metadata = {
    title: 'Page not found',
};

export default function NotFound() {
    return (
        <div className="flex h-[600px] flex-col items-center justify-center">
            <h1 className="bg-linear-to-r from-sky-600 via-sky-500 to-sky-500 bg-clip-text text-7xl font-extrabold text-transparent dark:from-sky-700 dark:via-sky-600 dark:to-sky-500">
                404
            </h1>
            <p className="pt-10 text-lg">This page cannot be found.</p>
        </div>
    );
}
