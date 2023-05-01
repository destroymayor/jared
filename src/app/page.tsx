import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex min-h-[400px] flex-col gap-3 pt-10">
      <h1 className="text-4xl font-extrabold">Jared</h1>
      <h2 className="text-zinc-700 dark:text-zinc-400">Front-End Developer</h2>

      <hr className="w-28 border border-zinc-300 dark:border-zinc-700" />

      <p className="pt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
        I&#39;m <b>Jared Chen</b>, a Front-end Developer working with <b>React</b> and{' '}
        <b>Next.js</b> who enjoys building great quality and great user experience products.
      </p>

      <p className="flex items-end pt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
        Currently working at{' '}
        <Link
          href="https://www.pinkoi.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-end gap-2 pl-2"
        >
          <svg height={28} width={28} viewBox="0 0 36 36">
            <path
              d="M27.6 36H8.4A8.4 8.4 0 0 1 0 27.6V8.4A8.4 8.4 0 0 1 8.4 0h19.2A8.4 8.4 0 0 1 36 8.4v19.2a8.4 8.4 0 0 1-8.4 8.4"
              fill="#003354"
            />
            <path
              d="M19.448 6.827c-4.542-.032-8.258 3.802-8.258 8.344v7.852c0 2.127-1.322 3.928-3.15 4.55a.42.42 0 0 0-.069.762l2.32 1.34c.394.227.884.192 1.248-.08a8.187 8.187 0 0 0 3.295-6.572V15.13c0-2.505 1.98-4.62 4.485-4.657a4.555 4.555 0 0 1 4.625 4.625c-.037 2.505-2.152 4.485-4.657 4.485H17.27a.563.563 0 0 0-.563.562v2.52c0 .31.252.562.563.562h1.975c4.542 0 8.375-3.716 8.344-8.258a8.2 8.2 0 0 0-8.14-8.141"
              fill="#ee847d"
            />
          </svg>
          <span className="font-bold text-zinc-800 dark:text-zinc-50">Pinkoi</span>
        </Link>
        .
      </p>
    </div>
  );
}
