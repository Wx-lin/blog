/*
 * @Author: 王薪林
 * @Date: 2024-04-12 21:15:08
 * @LastEditTime: 2024-04-22 13:14:25
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
  SketchOutlined,
  UserOutlined,
  XOutlined,
} from '@ant-design/icons';
import { createContext } from 'react';
import { Typography } from 'antd';

const { Link } = Typography;

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

export const ArticleColumns = [
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
    render: (text) => <Link>{text}</Link>,
  },
  {
    title: '分类',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: '创建时间',
    dataIndex: 'ctime',
    key: 'ctime',
  },
  {
    title: '更新时间',
    dataIndex: 'mtime',
    key: 'mtime',
  },
  {
    title: '字数',
    dataIndex: 'size',
    key: 'size',
  },
];
