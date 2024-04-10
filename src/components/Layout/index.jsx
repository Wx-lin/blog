import React, { useState } from "react";
import { useContext } from "react";
import { CurrentContext, MENUS } from "@/config";
import { Layout, Menu, theme, Space, Switch, Button } from "antd";
import {
  MoonOutlined,
  SunOutlined,
  GithubOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";
import Logo from "@/assets/images/logo.svg";
const { Header, Content, Footer, Sider } = Layout;

const App = () => {
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
  return (
    <Layout>
      <Header
        className="flex justify-between"
        style={{
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
          padding: "0 25px",
        }}
      >
        <Space size={10}>
          <img className="w-40px h-40px" src={Logo} />
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
              mode="inline"
              defaultSelectedKeys={["1"]}
              className="h-1/1"
              items={MENUS}
            />
            <div
              className="cursor-pointer absolute right-0 top-1/3 text-xl"
              onClick={handleCollapsedChange}
            >
              {collapsed ? <CaretRightOutlined /> : <CaretLeftOutlined />}
            </div>
          </Sider>
          <Content
            style={{
              padding: "0 20px",
              minHeight: 590,
            }}
          ></Content>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default App;
