import React from "react";
import { Layout, theme } from "antd";

export default function index() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { Content } = Layout;
  return (
    <Content style={{ margin: "16px 16px 0" }}>
      <div
        style={{
          padding: 24,
          minHeight: 360,
          background: colorBgContainer,
        }}
      >
        Bill is a cat.
      </div>
    </Content>
  );
}