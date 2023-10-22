import {createStore} from 'redux'
import  reducer  from './reducer'
import { composeWithDevTools } from "redux-devtools-extension";

// 加入调试工具中间件
// 添加完数据显示undefined 10.23
const store =  createStore(reducer,composeWithDevTools())

export default store