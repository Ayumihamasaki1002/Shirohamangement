import { createReducer } from '@reduxjs/toolkit'
import {add} from './numAction'

export const couter = createReducer(0,{
    [add]: (state:number,action: { val: number })=> state + action.val
})




// const defaultState = {
//     add
// }

// const reducer = (state=defaultState,action:{type:string,val:number})=>{
//     const newState = JSON.parse(JSON.stringify(state))
//     switch(action.type){
//         case add:
//             handleNum.actions.add(newState,action)
//             break
//         default:
//             break    
//     }




//     return newState
// }


// export default reducer