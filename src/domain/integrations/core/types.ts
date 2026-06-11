/** The single injection boundary. Defaults to global fetch + process.env. */
export interface IntegrationDeps {
    fetch: typeof globalThis.fetch;
    env: Record<string, string | undefined>;
}

/** A ready-to-call data fetcher. Calling with no args uses real deps. */
export type Endpoint<TData> = (deps?: Partial<IntegrationDeps>) => Promise<TData>;

export interface EndpointConfig<TRaw, TData> {
    /** Provider-specific: build & execute the upstream request (auth lives here). */
    request: (deps: IntegrationDeps) => Promise<Response>;
    /** Provider-specific: raw upstream JSON -> DTO. */
    transform: (raw: TRaw) => TData;
    /** Returned on 204, status >= 400, or thrown error (network/parse). */
    fallback: TData;
}
