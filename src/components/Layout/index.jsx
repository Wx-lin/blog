import Logo from '@/assets/images/logo.svg';
import SearchModal from '@/components/SearchModal.jsx';
import { CurrentContext, MENUS } from '@/config/index.jsx';
import { fetchArticle, getPathMenuName } from '@/utils/index.js';
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
import React, { Suspense, lazy, useContext, useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

const { Header, Content, Sider } = Layout;
const Home = lazy(() => import('@/view/Home.jsx'));
const About = lazy(() => import('@/view/About.jsx'));
const Demo = lazy(() => import('@/view/Demo/index.jsx'));
const JavaScript = lazy(() => import('@/view/JavaScript.jsx'));
const Css = lazy(() => import('@/view/Css.jsx'));
const Html = lazy(() => import('@/view/Html.jsx'));
const Article = lazy(() => import('@/view/Article/index.jsx'));
const Node = lazy(() => import('@/view/Node.jsx'))

const App = () => {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const { setTheme } = useContext(CurrentContext);

  const [collapsed, setCollapsed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [List, setList] = useState([]);

  useEffect(() => {
    fetchData();
  }, [setList]);

  const fetchData = async () => {
    const text = await fetchArticle('/store/data.json');
    const data = JSON.parse(text);
    Object.entries(data).forEach(([k, v]) => {
      v.forEach((v2) => (v2.category = k));
    });
    setList(data);
  };

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
            <Menu
              items={MENUS}
              mode="inline"
              className="h-1/1"
              defaultSelectedKeys={getPathMenuName()}
              onClick={handleMenuClick}
            />
            <div className="cursor-pointer absolute -right-10px top-200px text-xl" onClick={handleCollapsedChange}>
              {collapsed ? <CaretRightOutlined /> : <CaretLeftOutlined />}
            </div>
          </Sider>
          <Content
            style={{
              padding: '0 20px',
              height:'100vh',
              overflowY:'auto'
            }}>
            <Suspense>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="html" element={<Html data={List['html']} />} />
                <Route path="javaScript" element={<JavaScript data={List['js']} />} />
                <Route path="css" element={<Css data={List['css']} />} />
                <Route path="node" element={<Node data={List['node']} />} />
                <Route path="about" element={<About />} />
                <Route path="demo" element={<Demo />} />
                <Route path="article" element={<Article />} />
              </Routes>
            </Suspense>
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};
export default App;
