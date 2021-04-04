import React from 'react';
import { Layout, Menu, Select } from 'antd';
import intl from 'react-intl-universal';

const { Header } = Layout;
const AppHeader = (props) => {
    return (
        <Header className="app-header">
        <div className="row">
          <div className="col-md-8 col-sm-6">
          <img src="/images/logo.JPG" alt="CareAndCureLogo" width="150" height="125" />
          <span className="ml-4 mt-4 font-weight-bold text-first text-size">Care And Cure</span>
          </div>
          <div className="col-md-4 col-sm-6"><Select className="w-100" value={props.language} onChange={props.changeLanguage}>
            {props.languages.map((lang)=><Select.Option key={lang.key}>{lang.value}</Select.Option>)}
          </Select>
          </div>
        </div>
  <Menu
    mode="horizontal"
    defaultSelectedKeys={['2']}
  >
    <Menu.Item key="1">{intl.get("MENU_HOME")}</Menu.Item>
    <Menu.Item key="2">{intl.get("MENU_ABOUT_US")}</Menu.Item>
    <Menu.Item key="3">{intl.get("MENU_SERVICES")}</Menu.Item>
    <Menu.Item key="4">{intl.get("MENU_CONTACT_US")}</Menu.Item>
  </Menu>
</Header>
    );
};

export default AppHeader;