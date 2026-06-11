import ROUTES from '@/domain/constants/routes';
import { PhotosViewController } from './photos.view-controller';

const { PHOTOS } = ROUTES;
const { title, description } = PHOTOS;

export const metadata = {
    title,
    description,
};

export default function Page() {
    return <PhotosViewController />;
}
