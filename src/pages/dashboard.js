import React from 'react';
import { Link } from 'umi';
import styles from './dashboard.module.css';
import { Row, Col } from 'antd';
import CombineStrength from '../components/CombineStrength/CombineStrength';

const dashboardPage = () => {
  return (
    <div className={styles.dashboard}>
      <h1>DashBoard</h1>
      <br />
      <Link to="/">Modore koi</Link>
      <br />
      <br />
      <br />
      <br />
      <CombineStrength/>
      <br />

    </div>
  );
};

export default dashboardPage;
