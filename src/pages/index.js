import React from 'react';
import router from 'umi/router';
import { Button } from 'antd';
import styles from './index.module.css';

export default function() {
  const push = () => {
    console.log('HelloWorld');
    router.push('/dashboard');
  };
  const test = () => {
    console.log('testing');
    router.push('/testinggrounds');
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
      <Button onClick={test} className={styles.Button}>
        No press me
      </Button>
    </div>
  );
}
