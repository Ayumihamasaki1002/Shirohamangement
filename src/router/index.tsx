/* eslint-disable react-refresh/only-export-components */
import React, { lazy } from "react";

// Navigate 重定向组件
import { Navigate } from "react-router-dom";



// 主页路由
const Home = lazy(() => import("../views/Home"));
// 登录路由
const Login = lazy(() => import("../views/Login"));


// 主页所有分类页面 
const Page1 = lazy(() => import("../views/pages/Page1"));
const Page2 = lazy(() => import("../views/pages/Page2"));
const Page3 = lazy(() => import("../views/pages/Page3"));
const Page4 = lazy(() => import("../views/pages/Page4"));
const Page5 = lazy(() => import("../views/pages/Page5"));
const Page6 = lazy(() => import("../views/pages/Page6"));
const Page7 = lazy(() => import("../views/pages/Page7"));
const Page8 = lazy(() => import("../views/pages/Page8"));






const withLoadingComponent = (comp: JSX.Element) => (
  <React.Suspense fallback={<div>loading...</div>}>{comp}</React.Suspense>
);
const routes = [
  {
    path: "/", 
    element: <Navigate to="/login" />,
  },
  {
    
    path: "/home",
    element: withLoadingComponent(<Home />),
    children: [
      {
        path: "page1",
        element: withLoadingComponent(<Page1 />),
      },
      {
        path: "page2",
        element: withLoadingComponent(<Page2 />),
      },
      {
        path:"page3",
        element: withLoadingComponent(<Page3 />),
      },
      {
        path:"page4",
        element: withLoadingComponent(<Page4 />),
      },
      {
        path:"page5",
        element: withLoadingComponent(<Page5 />),
      },
      {
        path:"page6",
        element: withLoadingComponent(<Page6 />),
      },
      {
        path:"page7",
        element: withLoadingComponent(<Page7 />),
      },
      {
        path:"page8",
        element: withLoadingComponent(<Page8 />),
      }
    ],
  },
  {
    path: "/login",
    element: withLoadingComponent(<Login />),
  },
  { path: "*", element: <Navigate to="/" /> },
];
export default routes;
