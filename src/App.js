import React from 'react';
import { Layout } from 'antd';
import './App.css';
import { Switch, Route} from 'react-router-dom'
import LayoutSider from './pages/layout/Sider.jsx'
import LayoutHeader from './pages/layout/Header.jsx'
import LayoutFooter from './pages/layout/Footer.jsx'
import routes from './routes'

const { Header, Footer, Content } = Layout;
const App = () => (
  <Layout style={{height:'100vh'}}>
      <LayoutSider />
      <Layout>
        <LayoutHeader />
        <Content style={{padding:16}}>
        
          <Switch>
            {routes.map((route,index)=>(
              <Route 
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </Switch>
          
        </Content>
        <LayoutFooter />
      </Layout>
    </Layout>
);

export default App;
