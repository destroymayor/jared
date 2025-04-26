export type UnsplashPhotoType = {
    id: string;
    blur_hash: string;
    created_at: string;
    alt_description: string;
    urls: {
        raw: string;
        regular: string;
    };
    links: {
        html: string;
        download: string;
    };
};

export type UnsplashStatisticsType = {
    downloads: {
        total: number;
        historical: {
            change: number;
            average: number;
            resolution: string;
            quantity: number;
            values: Array<{
                date: string;
                value: number;
            }>;
        };
    };
    views: {
        total: number;
        historical: {
            change: number;
            average: number;
            resolution: string;
            quantity: number;
            values: Array<{
                date: string;
                value: number;
            }>;
        };
    };
};
