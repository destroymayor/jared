import ROUTES from '@/constants/routes';
import contactData from '@/constants/contact';

import { COMMAND_TYPE } from './enums';

export const navigationOption = {
    title: 'Navigation',
    type: COMMAND_TYPE.NAVIGATION,
    children: Object.values(ROUTES).map((item) => ({
        icon: item.icon,
        title: item.title,
        value: item.pathname,
    })),
};

export const contactOption = {
    title: 'Contact',
    type: COMMAND_TYPE.EXTERNAL,
    children: contactData.map((item) => ({
        icon: item.icon,
        title: item.label,
        value: item.link,
    })),
};
