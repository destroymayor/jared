import Photos from './Photos';

import ROUTES from '@/constants/routes';

const { PHOTOS } = ROUTES;
const { title, description } = PHOTOS;

export const metadata = {
    title,
    description,
};

export default function Page() {
    return <Photos />;
}
