export default [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: '首页',
    path: '/home',
    icon: 'HomeOutlined',
    component: './Home',
  },
  {
    name: '权限演示',
    path: '/access',
    component: './Access',
  },
  {
    name: ' CRUD 示例',
    path: '/table',
    component: './Table',
  },
  // {
  //   name: 'react-micro-app',
  //   path: '/sub-app-2',
  //   component: './load',
  //   icon: 'SmileOutlined',
  // },
  // {
  //   name: 'react-router-micro-app',
  //   path: '/sub-app-3',
  //   microApp: 'sub-app-3',
  //   icon: 'SmileOutlined',
  //   routes: [
  //     {
  //       name: '嵌套路由1',
  //       path: '/sub-app-3/one',
  //     },
  //     {
  //       name: '嵌套路由2',
  //       path: '/sub-app-3/three',
  //     },
  //     {
  //       path: '/sub-app-3',
  //       redirect: '/sub-app-3/one',
  //     },
  //   ],
  // },
  // {
  //   name: 'umi3-micro-app',
  //   path: '/sub-app-1',
  //   layout: true,
  //   microApp: 'sub-app-1',
  //   icon: 'SmileOutlined',
  //   routes: [
  //     {
  //       name: '应用间通信',
  //       path: '/sub-app-1/one',
  //     },
  //     {
  //       name: '应用间嵌套',
  //       path: '/sub-app-1/two',
  //     },
  //     {
  //       name: '应用间通信',
  //       path: '/sub-app-1/sub-app-3',
  //       routes: [
  //         {
  //           name: '嵌套路由1',
  //           path: '/sub-app-1/sub-app-3/one',
  //         },
  //         {
  //           name: '嵌套路由2',
  //           path: '/sub-app-1/sub-app-3/three',
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    name: '主题',
    path: '/theme',
    component: './Theme',
    icon: 'SmileOutlined',
  },
  {
    path: '/404',
    component: './Exception404',
  },
];
