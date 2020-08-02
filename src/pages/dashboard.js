import React from 'react';
import { Link } from 'umi';
import styles from './dashboard.module.css';
import { Row, Col } from 'antd';

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
      <br />
      <Row>
        <Col span={10}>
          {' '}
          <p>sidjfbnvgfiWFBNVGDIewnfviuwbnd</p>
        </Col>
        <Col span={5}>
          {' '}
          <p>sidjfbnvgfiWFBNVGDIewnfviuwbndvgoENUWR</p>
        </Col>
      </Row>
    </div>
  );
};

export default dashboardPage;
