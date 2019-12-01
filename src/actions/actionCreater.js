import {handleGoodsList,handleSpell,handleBrand} from "./actionType"
import {createAction} from "redux-actions"
import {recommendApi,floors,spell,brandApi} from "api/recommend"

export const goodsAction = ()=>{
    let goodsAction = createAction(handleGoodsList,(data,data2)=>({
        data:data,
        data2:data2
    }))

    return  async (dispatch)=>{
        let data =await recommendApi()
        let data2=await floors()
        let newdata2=data2.data.optimize
        let newdata=data.data.container.floor[25].content.concat(data.data.container.floor[26].content)
        dispatch(goodsAction(newdata,newdata2))
    }
}

export const spellAction=()=>{
    let spellAction = createAction(handleSpell,(data)=>({
        data
    }))
    return async (dispatch)=>{
        let data=await spell();
        let newdata=data.data.container.floor[1].content
        dispatch(spellAction(newdata))
    }
}

export const brandAction=()=>{
    let brandAction=createAction(handleBrand,(data)=>({
        data
    }))
    return async(dispatch)=>{
        let data =await brandApi()
        dispatch(brandAction(data.data.container.floor[10].content))
    }
}