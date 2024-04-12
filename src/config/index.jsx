import {
  HomeOutlined,
  Html5Outlined,
  JavaScriptOutlined,
  SketchOutlined,
  UserOutlined,
  XOutlined,
  AntDesignOutlined,
} from '@ant-design/icons';
import { createContext } from 'react';
import CateGoryList from '@/view/Demo/components/CateGoryList.jsx';

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
  {
    key: '7',
    label: 'AntDemo',
    icon: <AntDesignOutlined />,
    path: 'demo',
  },
];

export const DemoTabList = [
  {
    key: '1',
    label: 'Tab 1',
    children: <CateGoryList />,
  },
  {
    key: '2',
    label: 'Tab 2',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Tab 3',
    children: 'Content of Tab Pane 3',
  },
];
