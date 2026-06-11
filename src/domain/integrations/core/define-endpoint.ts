import type { Endpoint, EndpointConfig, IntegrationDeps } from './types';

const defaultDeps: IntegrationDeps = {
    fetch: (...args) => globalThis.fetch(...args),
    env: process.env,
};

export function defineEndpoint<TRaw, TData>(
    config: EndpointConfig<TRaw, TData>
): Endpoint<TData> {
    return async (overrides?: Partial<IntegrationDeps>): Promise<TData> => {
        const deps = { ...defaultDeps, ...overrides };

        try {
            const response = await config.request(deps);

            if (response.status === 204 || response.status >= 400) {
                return config.fallback;
            }

            return config.transform((await response.json()) as TRaw);
        } catch (error) {
            console.error('[integrations] request failed:', error);
            return config.fallback;
        }
    };
}
