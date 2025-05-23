export default async function fetcher<JSON = unknown>(
    url: RequestInfo,
    init?: RequestInit
): Promise<JSON> {
    const res = await fetch(url, init);
    return res.json();
}
