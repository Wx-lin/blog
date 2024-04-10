import React, { lazy, useState, useContext, Suspense } from "react";
import { CurrentContext, MENUS } from "@/config/index.jsx";
import { Layout, Menu, theme, Space, Switch, Button } from "antd";
import { Routes, Route, useNavigate } from "react-router-dom";
import { find } from "lodash";
import {
  MoonOutlined,
  SunOutlined,
  GithubOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";
import Logo from "@/assets/images/logo.svg";

const { Header, Content, Sider } = Layout;
const Home = lazy(() => import("@/view/Home.jsx"));
const About = lazy(() => import("@/view/About.jsx"));

const App = () => {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const { setTheme } = useContext(CurrentContext);

  const [collapsed, setCollapsed] = useState(false);

  const handleThemeChange = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  const handleMenuClick = ({ key }) => {
    const { path } = find(MENUS, { key });
    navigate(path);
  };

  return (
    <Layout>
      <Header
        className="flex justify-between"
        style={{
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
          padding: "0 25px",
          borderBottom:'1px solid #e5e7eb'
        }}
      >
        <Space size={10}>
          <img className="w-40px h-40px cursor-pointer" src={Logo} />
          <span style={{ color: "#087ea4", fontSize: "14px" }}>个人博客</span>
        </Space>
        <Space size={10}>
          <Switch
            checkedChildren={<MoonOutlined />}
            unCheckedChildren={<SunOutlined />}
            onChange={handleThemeChange}
          />
          <Button
            size="large"
            target="_blank"
            href="https://github.com/Wx-lin/blog"
            icon={<GithubOutlined />}
          />
          <span>月亮撞木星</span>
        </Space>
      </Header>
      <Content>
        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Sider collapsed={collapsed} trigger={null} width={200}>
            <Menu
              items={MENUS}
              mode="inline"
              defaultSelectedKeys={["1"]}
              className="h-1/1"
              onClick={handleMenuClick}
            />
            <div
              className="cursor-pointer absolute -right-10px top-1/3 text-xl"
              onClick={handleCollapsedChange}
            >
              {collapsed ? <CaretRightOutlined /> : <CaretLeftOutlined />}
            </div>
          </Sider>
          <Content
            style={{
              padding: "0 20px",
              minHeight:'650px'
            }}
          >
            <Suspense>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
              </Routes>
            </Suspense>
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};
export default App;
