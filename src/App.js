import React from 'react';
import { Layout } from 'antd';
import './App.css';

import LayoutSider from './pages/layout/Sider.jsx'
import LayoutHeader from './pages/layout/Header.jsx'
import LayoutFooter from './pages/layout/Footer.jsx'

const { Header, Footer, Content } = Layout;
const App = () => (
  <Layout style={{height:'100vh'}}>
      <LayoutSider />
      <Layout>
        <LayoutHeader />
        <Content>Content</Content>
        <LayoutFooter />
      </Layout>
    </Layout>
);

export default App;
