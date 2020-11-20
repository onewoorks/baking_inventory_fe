import React from 'react';
import { Layout } from 'antd';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import routes from './routes'

import LayoutSider from './pages/layout/Sider.jsx'
import LayoutHeader from './pages/layout/Header.jsx'
import LayoutFooter from './pages/layout/Footer.jsx'

const { Content } = Layout;

const App = () => (
  <Router>
    <Layout style={{ height: '100vh' }}>
      <LayoutSider />
      <Layout>
        <LayoutHeader />
        <Content className="layout-content">
        <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </Content>
        <LayoutFooter />
      </Layout>
    </Layout>
  </Router>
);

export default App;
