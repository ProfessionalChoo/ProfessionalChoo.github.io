// ref: https://umijs.org/config/
export default {
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' },
        { path: '/dashboard', component: '../pages/dashboard' },
        { path: '/testinggrounds', component: '../pages/test' },
      ],
    },
  ],
  dva: {},
  antd: {},
};
