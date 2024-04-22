import Logo from '@/assets/images/logo.svg';
import SearchModal from '@/components/SearchModal.jsx';
import { CurrentContext, MENUS } from '@/config/index.jsx';
import {
  CaretLeftOutlined,
  CaretRightOutlined,
  GithubOutlined,
  MoonOutlined,
  SearchOutlined,
  SunOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, Space, Switch, theme } from 'antd';
import { find } from 'lodash';
import React, { Suspense, lazy, useContext, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

const { Header, Content, Sider } = Layout;
const Home = lazy(() => import('@/view/Home.jsx'));
const About = lazy(() => import('@/view/About.jsx'));
const Demo = lazy(() => import('@/view/Demo/index.jsx'));
const JavaScript = lazy(() => import('@/view/JavaScript.jsx'));
const Css = lazy(() => import('@/view/Css.jsx'));

const App = () => {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const { setTheme } = useContext(CurrentContext);

  const [collapsed, setCollapsed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleThemeChange = (checked) => {
    setTheme(checked ? 'dark' : 'light');
  };

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  const handleMenuClick = ({ key }) => {
    const { path } = find(MENUS, { key });
    navigate(path);
  };

  const handleOpenSearchModal = () => {
    setIsModalOpen(true);
  };

  return (
    <Layout>
      <Header
        className="flex justify-between"
        style={{
          background: colorBgContainer,
          padding: '0 25px',
          marginBottom: 10,
          borderBottom: '1px solid rgba(60, 60, 60, .29)',
        }}>
        <Space size={10}>
          <img className="w-40px h-40px cursor-pointer" src={Logo} />
          <span style={{ color: '#087ea4', fontSize: '14px' }}>个人博客</span>
          <div>
            <Button className="w-200px h-40px ml-55px" onClick={handleOpenSearchModal}>
              <Space className="flex justify-between">
                <Space>
                  <SearchOutlined />
                  <span>搜索</span>
                </Space>

                <Space>
                  <span>⌘</span>
                  <span>k</span>
                </Space>
              </Space>
            </Button>
            <SearchModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
          </div>
        </Space>
        <Space size={10}>
          <Switch checkedChildren={<MoonOutlined />} unCheckedChildren={<SunOutlined />} onChange={handleThemeChange} />
          <Button size="large" target="_blank" href="https://github.com/Wx-lin/blog" icon={<GithubOutlined />} />
          <span>月亮撞木星</span>
        </Space>
      </Header>
      <Content>
        <Layout
          style={{
            padding: '24px 0',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}>
          <Sider collapsed={collapsed} trigger={null} width={200}>
            <Menu items={MENUS} mode="inline" defaultSelectedKeys={['1']} className="h-1/1" onClick={handleMenuClick} />
            <div className="cursor-pointer absolute -right-10px top-1/3 text-xl" onClick={handleCollapsedChange}>
              {collapsed ? <CaretRightOutlined /> : <CaretLeftOutlined />}
            </div>
          </Sider>
          <Content
            style={{
              padding: '0 20px',
              minHeight: '650px',
            }}>
            <Suspense>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="javaScript" element={<JavaScript />} />
                <Route path="css" element={<Css />} />
                <Route path="about" element={<About />} />
                <Route path="demo" element={<Demo />}></Route>
              </Routes>
            </Suspense>
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};
export default App;
