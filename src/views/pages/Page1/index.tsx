import React from "react";
import { useSelector } from 'react-redux'
import { Layout, theme } from "antd";
const { Content } = Layout;

export default function Page1() {
  const {token: { colorBgContainer },} = theme.useToken();
  const {num} = useSelector((state) => ({
    num: state.num
  }));
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
        <p>{num}</p>
      </div>
    </Content>
  );
}
