import {handleActions} from "redux-actions"
import {handleGoodsList} from "actions/actionType"
const defaultState={
    goodsList:[],
    floors:[]
}

export default handleActions({
    [handleGoodsList]:(state,action)=>{
        let goodsState = JSON.parse(JSON.stringify(state));
        goodsState.goodsList=action.payload.data;
        goodsState.floors=action.payload.data2.slice(0,5)
        return goodsState;
    }
},defaultState)