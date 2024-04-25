/*
 * @Author: 王薪林
 * @Date: 2024-04-12 21:15:08
 * @LastEditTime: 2024-04-25 12:02:04
 * @LastEditors: 王薪林 10655211+wang-xinlinlin@user.noreply.gitee.com
 * @Description:配置文件
 * @FilePath: /blog/src/config/index.jsx
 */
import CateGoryList from '@/view/Demo/components/CateGoryList.jsx';
import {
  AntDesignOutlined,
  HomeOutlined,
  Html5Outlined,
  JavaScriptOutlined,
  UserOutlined
} from '@ant-design/icons';
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
  // {
  //   key: 'vue',
  //   label: 'Vue',
  //   icon: <XOutlined />,
  //   path: 'vue',
  // },
  // {
  //   key: 'react',
  //   label: 'React',
  //   icon: <SketchOutlined />,
  //   path: 'react',
  // },
  {
    key: 'about',
    label: 'About',
    icon: <UserOutlined />,
    path: 'about',
  },
  {
    key: 'demo',
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
