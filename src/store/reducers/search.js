import {handleActions} from "redux-actions"
import {handleHistory,handleSearch} from "../../actions/actionType"
const defaultState={
    hot:[],
    searchList:[],
    isShow:false
}

export default handleActions({
    [handleHistory]:(state,action)=>{
        let hotState=JSON.parse(JSON.stringify(state))
        hotState.hot=action.payload.data;
        return hotState
    },
    [handleSearch]:(state,action)=>{
        let searchState=JSON.parse(JSON.stringify(state));
        searchState.isShow=action.payload.data.length===0?false:true
        searchState.searchList=action.payload.data;
        return searchState;
    }

},defaultState)