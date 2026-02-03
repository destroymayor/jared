import ROUTES from '@/domain/constants/routes';
import contactData from '@/domain/constants/contact';

import { Sun, Moon, Monitor } from 'lucide-react';
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

export const themeOption = {
    title: 'Theme',
    type: COMMAND_TYPE.THEME,
    children: [
        {
            icon: <Moon size={20} />,
            title: `Change Theme to Dark`,
            value: 'dark',
        },
        {
            icon: <Sun size={20} />,
            title: `Change Theme to Light`,
            value: 'light',
        },
        {
            icon: <Monitor size={20} />,
            title: `Change Theme to System`,
            value: 'system',
        },
    ],
};
