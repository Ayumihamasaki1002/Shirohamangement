import {createStore,applyMiddleware} from 'redux'
import  reducer  from './num/numReducer'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// 加入调试工具中间件
// 添加完数据显示undefined 10.23
const store =  createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))

export default store