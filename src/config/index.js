import { createContext, createElement } from "react";
import {
    LaptopOutlined,
    NotificationOutlined,
    UserOutlined,
} from "@ant-design/icons";

export const CurrentContext = createContext(null);

export const MENUS = [
    {
        key: "1",
        label: "HTML",
        icon: createElement(LaptopOutlined),
        path: 'html'
    },
    {
        key: "2",
        label: "CSS",
        icon: createElement(NotificationOutlined),
        path: 'css'
    },
    {
        key: "3",
        label: "JavaScript",
        icon: createElement(UserOutlined),
        path: 'javaScript'
    },
    {
        key: "4",
        label: "Vue",
        icon: createElement(UserOutlined),
        path: 'vue'
    },
    {
        key: "5",
        label: "React",
        icon: createElement(UserOutlined),
        path: 'react'
    },
    {
        key: "6",
        label: "About",
        icon: createElement(UserOutlined),
        path: "about",
    },
];
