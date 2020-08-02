import React from 'react';
import { Link } from 'umi';
import logo from '../assets/logo.png';

import { Layout, Menu } from 'antd';
import styles from './header.module.css';

const HeaderComponent = () => {
  const { Header } = Layout;

  return (
    <Header className={styles.header}>
      <div className={styles.title}>
        <Link to="/">
          <img
            src={logo}
            style={{ maxHeight: '200px', margin: '10px 10px', alignContent: 'center' }}
            alt="Shinobu-Chan"
          />
        </Link>
        <Menu theme="dark" mode="horizontal" className={styles.menu}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </div>
    </Header>
  );
};

export default HeaderComponent;
