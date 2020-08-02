import React from 'react';
import { history } from 'umi';
import { Button } from 'antd';
import styles from './index.module.css';

export default function() {
  const push = () => {
    console.log('HelloWorld');
    history.push('/dashboard');
  };
  const test = () => {
    console.log('testing');
    history.push('/testinggrounds');
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
