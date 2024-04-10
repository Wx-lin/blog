import {
  HomeOutlined,
  Html5Outlined,
  JavaScriptOutlined,
  SketchOutlined,
  UserOutlined,
  XOutlined,
} from '@ant-design/icons';
import { createContext } from 'react';

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
    icon: <Html5Outlined />,
    path: 'html',
  },
  {
    key: '2',
    label: 'CSS',
    icon: <Html5Outlined />,
    path: 'css',
  },
  {
    key: '3',
    label: 'JavaScript',
    icon: <JavaScriptOutlined />,
    path: 'javaScript',
  },
  {
    key: '4',
    label: 'Vue',
    icon: <XOutlined />,
    path: 'vue',
  },
  {
    key: '5',
    label: 'React',
    icon: <SketchOutlined />,
    path: 'react',
  },
  {
    key: '6',
    label: 'About',
    icon: <UserOutlined />,
    path: 'about',
  },
];
