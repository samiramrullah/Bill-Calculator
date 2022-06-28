import React from "react";
import "antd/dist/antd.css";

// import {
//   FileOutlined,
//   PieChartOutlined,
//   UserOutlined,
//   DesktopOutlined,
//   TeamOutlined
// } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useState } from "react";
import UiCard from '../../Components/Cards/Card'
const { Header, Content, Footer, Sider } = Layout;



const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: "100vh"
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
         
        >
          <Menu.Item>Bill Calculation</Menu.Item>
          <Menu.Item>Calculate Bill</Menu.Item>
          </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0
          }}
        />
        <Content
          style={{
            margin: "0 16px"
          }}
        >
          {/* <Breadcrumb
            style={{
              margin: "16px 0"
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360
            }}
          >
           <UiCard/>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center"
          }}
        >
          copyright ©2018 Created by Samir Alam
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Home;
