import React from 'react';
import { Layout } from 'antd';
import styles from './footer.module.css';

const FooterComponent = () => {
  const { Footer } = Layout;
  return (
    <Footer className={styles.footer}>
      Professional Design {new Date().getFullYear()} Created by Professional Choo
    </Footer>
  );
};

export default FooterComponent;
