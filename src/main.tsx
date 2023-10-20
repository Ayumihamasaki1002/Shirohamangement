import React from 'react'
import ReactDOM from 'react-dom/client'
// 样式初始化 reset-css 初始化所有样式
import 'reset-css'
// UI框架的样式
// import 'antd/dist/antd.css'
// 全局的样式
import '@/assets/styles/global.scss'
import App from './App'

import {BrowserRouter}  from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>

  </React.StrictMode>,
)
