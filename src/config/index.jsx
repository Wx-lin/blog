import { createContext } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined, HomeOutlined } from '@ant-design/icons';

export const CurrentContext = createContext(null);

export const MENUS = [
  {
    key: '0',
    label: 'Home',
    icon: <HomeOutlined />,
    path: '/',
  },
  {
    key: '1',
    label: 'HTML',
    icon: <LaptopOutlined />,
    path: 'html',
  },
  {
    key: '2',
    label: 'CSS',
    icon: <NotificationOutlined />,
    path: 'css',
  },
  {
    key: '3',
    label: 'JavaScript',
    icon: <UserOutlined />,
    path: 'javaScript',
  },
  {
    key: '4',
    label: 'Vue',
    icon: <UserOutlined />,
    path: 'vue',
  },
  {
    key: '5',
    label: 'React',
    icon: <UserOutlined />,
    path: 'react',
  },
  {
    key: '6',
    label: 'About',
    icon: <UserOutlined />,
    path: 'about',
  },
];
