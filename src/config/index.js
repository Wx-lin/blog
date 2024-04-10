import { createContext, createElement } from "react";
import {
    LaptopOutlined,
    NotificationOutlined,
    UserOutlined,
} from "@ant-design/icons";

export const CurrentContext = createContext(null);

export const MENUS = [
    {
        key: '1',
        label: 'HTML',
        icon: createElement(LaptopOutlined)
    },
    {
        key: '2',
        label: 'CSS',
        icon: createElement(NotificationOutlined)
    },
    {
        key: '3',
        label: 'JavaScript',
        icon: createElement(UserOutlined)
    },
    {
        key: '4',
        label: 'Vue',
        icon: createElement(UserOutlined)
    }, {
        key: '5',
        label: 'React',
        icon: createElement(UserOutlined)
    }
    , {
        key: '6',
        label: 'About',
        icon: createElement(UserOutlined)
    }
]