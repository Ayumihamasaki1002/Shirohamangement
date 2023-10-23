import handleNum from './numAction'
interface handleNum {
    SYSETEM_INFO:boolean, //系统消息公告类
    [add: string]: boolean, // 字段扩展声明
}
const defaultState = {
    ...handleNum.state
}

const reducer = (state=defaultState,action:{type:string,val:number})=>{
    const newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case handleNum.add:
            handleNum.actions.add(newState,action)
            break
        default:
            break    
    }




    return newState
}


export default reducer