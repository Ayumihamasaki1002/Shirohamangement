import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Breadcrumb, Layout, theme } from "antd";

import MainMenu from "@/views/MainMenu";
const { Header, Footer, Sider } = Layout;

const View: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <MainMenu></MainMenu>
      </Sider>
        
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Breadcrumb style={{ margin: "30px 0px 0 25px" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        {/* //路由渲染处 */}
        <Outlet></Outlet>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default View;
