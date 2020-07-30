import React from 'react';
import Link from 'umi/link';
import styles from './dashboard.module.css';

const dashboardPage = () => {
  return (
    <div className={styles.dashboard}>
      <h1>DashBoard</h1>
      <Link to="/">Modore koi</Link>
    </div>
  );
};

export default dashboardPage;
