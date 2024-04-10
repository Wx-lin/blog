import React from "react";
import { useContext } from "react";
import { CurrentContext, MENUS } from "@/config";
import { Layout, Menu, theme, Space, Switch } from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import Logo from "@/assets/images/logo.svg";
const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { setTheme } = useContext(CurrentContext);

  const handleThemeChange = (checked) => {
    setTheme(checked ? "dark" : "light");
  };
  return (
    <Layout>
      <Header
        className="flex justify-between"
        style={{
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <Space>
          <img
            style={{
              width: "40px",
              heigth: "40px",
            }}
            src={Logo}
          />
          <span style={{ color: "#fff" }}>Blog</span>
        </Space>
        <div>
          <Switch
            checkedChildren={<MoonOutlined />}
            unCheckedChildren={<SunOutlined />}
            onChange={handleThemeChange}
          />
          <img src="" alt="" />
        </div>
      </Header>
      <Content>
        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Sider
            trigger={null}
            style={{
              background: colorBgContainer,
            }}
            width={200}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{
                height: "100%",
              }}
              items={MENUS}
            />
          </Sider>
          <Content
            style={{
              padding: "0 20px",
              minHeight: 280,
            }}
          >
            Content
          </Content>
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
