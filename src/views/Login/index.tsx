import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Typography, Row, Col } from "antd";
import styles from "./index.module.scss";
const { Title } = Typography;



const App: React.FC = () => {

  // 点击登录处理
  const onFinish = (values: unknown) => {
    console.log("Received values of form: ", values);
  };



  return (
    

      <div>
        <img src="../../../public/img/星球.svg" alt=""  style={{width:'400px',height:'400px',position:'fixed',top:'-150px',right:'-150px'}}/>
      <Row>
        <Col span={5} offset={0}>
          <img src="../../../public/img/办公.svg" alt="" style={{height:'800px'}}/>
        </Col>
        <Col span={12} offset={7}>
        <div id={styles.loginPage}>
        <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        id={styles.loginForm}
      >
        <Title 
          level={1}
          >h1. Ant Design</Title>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
          style={{marginTop: "30px"}}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            style={{ height: "45px"}}
            
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            style={{ height: "45px",marginTop: "10px"}}
      

          />
        </Form.Item>
    
        <Row style={{marginTop:'50px'}}>
          <Col span={9}>
            <Form.Item>
              <Button
                htmlType="submit"
                className="login-form-button"
                style={{width: "98%",height: "40px"}}
              >
                Regist
              </Button>
            </Form.Item>
          </Col>
          <Col span={9} offset={6}>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{width: "98%",height: "40px"}}
            

              >
                Log in
              </Button>
            </Form.Item>
            
          </Col>
        </Row>
      </Form>
      </div>
        </Col> 
      </Row>
      </div>
      
   
  );
};

export default App;
