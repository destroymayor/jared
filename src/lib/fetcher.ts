export default async function fetcher<T = unknown>(
    url: RequestInfo,
    init?: RequestInit
): Promise<T> {
    const res = await fetch(url, init);
    return res.json();
}
