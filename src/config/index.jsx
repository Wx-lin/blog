import CateGoryList from '@/view/Demo/components/CateGoryList.jsx';
import Tag from '@/view/Demo/components/Tag/index.jsx';

import { HomeOutlined, Html5Outlined, JavaScriptOutlined, UserOutlined } from '@ant-design/icons';
import { createContext } from 'react';

export const CurrentContext = createContext(null);

export const MENUS = [
  {
    key: 'index',
    label: 'Home',
    icon: <HomeOutlined />,
    path: '/',
  },
  {
    key: 'html',
    label: 'html',
    icon: <Html5Outlined />,
    path: 'html',
  },
  {
    key: 'css',
    label: 'css',
    icon: <Html5Outlined />,
    path: 'css',
  },
  {
    key: 'node',
    label: 'node',
    icon: <Html5Outlined />,
    path: 'node',
  },
  {
    key: 'javaScript',
    label: 'JavaScript',
    icon: <JavaScriptOutlined />,
    path: 'javaScript',
  },
  {
    key: 'about',
    label: 'About',
    icon: <UserOutlined />,
    path: 'about',
  },
  // {
  //   key: 'demo',
  //   label: 'AntDemo',
  //   icon: <AntDesignOutlined />,
  //   path: 'demo',
  // },
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
    children: <Tag />,
  },
  {
    key: '3',
    label: 'Tab 3',
    children: 'Content of Tab Pane 3',
  },
];
