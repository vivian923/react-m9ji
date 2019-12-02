import {handleDel,handleSum,handleReduce,handleGoodsList,handleSpell,handleBrand,handleHistory,handleSearch,handleChecked,handleCheckedItem,handleCartRecommend,handleAdd} from "./actionType"
import {createAction} from "redux-actions"
import {recommendApi,floors,spell,brandApi} from "api/recommend"
import {historyApi,searchApi} from "api/search"
import {cartRecommendApi} from "api/cart"
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

export const historyAction=()=>{
    let historyAction=createAction(handleHistory,(data)=>({
        data
    }))

    return async(dispatch)=>{
        let data=await historyApi();
        dispatch(historyAction(data.data.hotSearch))
    }
}

export const searchAction=(keyword)=>{
    let searchAction=createAction(handleSearch,(data)=>({
        data
    }))
    return async(dispatch)=>{
        let data=await searchApi(keyword)
        dispatch(searchAction(data.data))
    }
}

export const checkedAction=createAction(handleChecked)

export const checkedItemAction=(index)=>{
  let checkedItem=createAction(handleCheckedItem,(index)=>({
        index
    }))
    return (dispatch)=>{
        dispatch(checkedItem(index))
    }
}

export const cartRecommendAction=()=>{
    let cartRecommendAction=createAction(handleCartRecommend,(data)=>({
        data
    }))

    return async(dispatch)=>{
        let data=await cartRecommendApi()
        dispatch(cartRecommendAction(data.data.recommend.list))
    }
}

export const addAction=(index)=>{
    let addAction=createAction(handleAdd,(index)=>({
        index
    }))
    return (dispatch)=>{
        dispatch(addAction(index))
    }
}

export const reduceAction=(index)=>{
    let reduceAction=createAction(handleReduce,(index)=>({
        index
    }))
    return (dispatch)=>{
        dispatch(reduceAction(index))
    }
}
export const sumAction=()=>{
    let sumAction=createAction(handleSum)
    return (dispatch)=>{
        dispatch(sumAction())
    }
}

export const delAction=createAction(handleDel,(index)=>({
    index
}))
