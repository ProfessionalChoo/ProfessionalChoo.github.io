//import react from 'react';
import styles from './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';

function BasicLayout(props) {
  const { Header, Content, Footer } = Layout;
  return (
    <Layout className="layout">
      <HeaderComponent />
      <Content style={{ padding: '0 50px' }}>
        <h1>{props.children}</h1>
      </Content>
      <FooterComponent />
    </Layout>
  );
}

export default BasicLayout;
