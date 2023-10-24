import {createAction} from '@reduxjs/toolkit'

// export default {
//     state:{
//         num:20
//     },
//     actions:{
//         add(newState:{num:number},action:{type:string,val:number}){
//             newState.num += action.val  
//         }
//     },

    
    
//     add:'add'

// }

export const add = createAction<{num:number},string>('add')