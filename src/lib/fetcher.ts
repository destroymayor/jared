const env = process.env.NODE_ENV;

const isDev = env === 'development';
const host = isDev ? 'http://localhost:3000' : '';

export default async function fetcher<JSON = unknown>(
    input: RequestInfo,
    init?: RequestInit
): Promise<JSON> {
    const url = `${host}${input}`;
    const res = await fetch(url, init);
    return res.json();
}
