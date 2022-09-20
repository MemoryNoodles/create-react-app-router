import React, { useState } from 'react';

import { Outlet, Link, useRoutes, useNavigate } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';


export const Home = () => {
  return "home"
}
export const About = () => {
  return "About"
}
let routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
];
const menu = [
  {
    key: '1',
    icon: <UserOutlined />,
    label: 'home',
    router: "/home"
  },
  {
    key: '2',
    icon: <VideoCameraOutlined />,
    label: 'about',
    router: "/about"
  },

]


const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate()
  let element = useRoutes(routes);

  return (
    <Layout style={{ height: "100%" }}>
      <Sider trigger={null} collapsible collapsed={collapsed} >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          onClick={(item) => {
            let route = menu.find(o => o.key == item.key)?.router;
            navigate(route)
          }}
          items={menu}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {element}
        </Content>
      </Layout>
    </Layout>
  );
};




export default App;