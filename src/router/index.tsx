/* eslint-disable react-refresh/only-export-components */
import React,{lazy} from "react";


// Navigate 重定向组件
import { Navigate } from "react-router-dom";

const About = lazy(() => import("../views/About"))
const Home = lazy(() => import("../views/Home"))
const Page1 = lazy(() => import("../views/Page1"))
const Page2 = lazy(() => import("../views/Page2"))
const withLoadingComponent=(comp:JSX.Element)=>(
    <React.Suspense fallback={<div>loading...</div>}>
    {comp}
    </React.Suspense>
)
const routes = [
  {
    path: "/", //重定向到home
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: withLoadingComponent(<Home/>),
    children:[
        {
            path:"page1",
            element:withLoadingComponent(<Page1/>)
        },
        {
            path:"page2",
            element:withLoadingComponent(<Page2/>)
        }
    ]

  },
  {
    path: "/about",
    element: 
    withLoadingComponent(<About/>)
  },
  // { path: "*", element: <Navigate to="/" /> },
];
export default routes;
