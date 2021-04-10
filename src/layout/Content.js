import React from "react";
import { Layout } from "antd";

import Home from "../component/Home";
import AboutUs from "../component/AboutUs";
import { Switch, Route } from "react-router-dom";

const { Content } = Layout;

const AppContent = (props) => {
  const routes = [
    {
      path:"/home",
      component:<Home {...props}/>
    },
    {
      path:"/about-us",
      component:<AboutUs {...props}/>
    },
    {
      path:"/contact-us",
      component:<Home {...props}/>
    }
  ]
  return (
    <Content className="container-fluid bg-light">
     <Switch>
          {routes.map((route)=><Route path={route.path}>
            {route.component}
          </Route>)}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Content>
  );
};

export default AppContent;
