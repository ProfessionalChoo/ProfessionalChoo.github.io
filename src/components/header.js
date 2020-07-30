import React from 'react';
import router from 'umi/router';
import Link from 'umi/link';
import PropTypes from 'prop-types';
import { connect } from 'dva';

import { Layout, Menu } from 'antd';
import styles from './header.module.css';

const HeaderComponent = () => {
  const { Header } = Layout;

  return (
    <Header className={styles.header}>
      <div className={styles.title}>
        Professional
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
