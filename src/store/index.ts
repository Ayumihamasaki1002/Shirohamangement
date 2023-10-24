import {configureStore} from '@reduxjs/toolkit'
import  {couter}  from './num/numReducer'
import thunk from "redux-thunk";

// 加入调试工具中间件
// 添加完数据显示undefined 10.23
// const store =  createStore(couter,composeWithDevTools(applyMiddleware(thunk)))

// export default store

export default  configureStore({
    reducer:couter,
    middleware: [thunk],
    devTools:true
})