import React, { useState } from 'react';
import { Layout, Menu, Select } from 'antd';
import intl from 'react-intl-universal';
import { Link } from "react-router-dom";

const { Header } = Layout;
const AppHeader = (props) => {
  const [key, setKey] = useState({key:'1'})
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
    key={key}
    onClick={(key)=>setKey(key)}
  >
    <Link className={key==='1'?'ant-menu-active-item':`ant-menu-item`} to="/home">{intl.get("MENU_HOME")}</Link>
   <Link className={key==='2'?'ant-menu-active-item':`ant-menu-item`} to="/about-us">{intl.get("MENU_ABOUT_US")}</Link>
    <Link className={key==='3'?'ant-menu-active-item':`ant-menu-item`} to="/services">{intl.get("MENU_SERVICES")}</Link>
    <Link className={key==='4'?'ant-menu-active-item':`ant-menu-item`} to="/contact-us">{intl.get("MENU_CONTACT_US")}</Link>
  </Menu>
  
</Header>
    );
};

export default AppHeader;