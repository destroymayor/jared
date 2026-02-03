import ROUTES from '@/domain/constants/routes';
import { PhotosBound } from './photos.view-controller';

const { PHOTOS } = ROUTES;
const { title, description } = PHOTOS;

export const metadata = {
    title,
    description,
};

export default function Page() {
    return <PhotosBound />;
}
