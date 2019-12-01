import {handleActions} from "redux-actions"
import {handleBrand} from "../../actions/actionType"
const defaultState={
    brandList:[]
}

export default handleActions({
    [handleBrand]:(state,action)=>{
        let brandState=JSON.parse(JSON.stringify(state));
        brandState.brandList=action.payload.data
        return brandState
    }
},defaultState)

