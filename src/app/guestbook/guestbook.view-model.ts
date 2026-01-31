export function useGuestbookViewModel() {
    const giscusConfig = {
        repo: 'destroymayor/guestbook' as const,
        repoId: 'R_kgDOHwPSeA',
        category: 'General',
        categoryId: 'DIC_kwDOHwPSeM4CQkUo',
        mapping: 'title',
    };

    return { giscusConfig };
}
