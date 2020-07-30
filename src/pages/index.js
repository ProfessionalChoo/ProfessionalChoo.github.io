import React from 'react';
import Link from 'umi/link';
import router from 'umi/router';
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import styles from './index.module.css';

export default function() {
  const { Header, Content, Footer } = Layout;

  const push = () => {
    console.log('HelloWorld');
    router.push('/dashboard');
  };
  return (
    <div className={styles.Index}>
      <h1>Hello World</h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Button onClick={push} className={styles.Button}>
        press me
      </Button>
    </div>
  );
}
