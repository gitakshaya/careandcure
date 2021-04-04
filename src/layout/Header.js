import React from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;
const AppHeader = (props) => {
    return (
        <Header className="app-header">
        <div className="rounded">
          <img src="/images/logo.JPG" alt="CareAndCureLogo" width="75" height="75" />
          <span class=" ml-2 mt-4 font-weight-bold text-info text-size">Care And Cure</span>
        </div>
  <Menu
    mode="horizontal"
    defaultSelectedKeys={['2']}
  >
    <Menu.Item key="1">Home</Menu.Item>
    <Menu.Item key="2">About Us</Menu.Item>
    <Menu.Item key="3">Services</Menu.Item>
    <Menu.Item key="4">Doctors</Menu.Item>
    <Menu.Item key="5">Contact Us</Menu.Item>
  </Menu>
</Header>
    );
};

export default AppHeader;