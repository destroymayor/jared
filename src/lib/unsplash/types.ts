export type UnsplashPhotoType = {
    id: string;
    blur_hash: string;
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
        };
    };
    views: {
        total: number;
        historical: {
            change: number;
        };
    };
};
