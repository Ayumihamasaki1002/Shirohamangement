import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Layout, theme } from "antd";
const { Content } = Layout;


export default function Page1() {
  
  const {token: { colorBgContainer },} = theme.useToken();
  const {num} = useSelector((state:number) => ({
    num: state
  }))
  const dispatch = useDispatch()
  const changNum = ()=>{

    dispatch({
       type: 'add',
       val:20
    })
  }
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
        <button onClick={changNum}>加一</button>
      </div>
    </Content>
  );
}
