import {handleActions} from "redux-actions"
import {handlelimitTimeList} from "actions/actionType"
const defaultState={
    robList:[]
}

export default handleActions({
    [handlelimitTimeList]:(state,action)=>{
        let LimitTimeState = JSON.parse(JSON.stringify(state))
        LimitTimeState.robList=action.payload.data.data.rushToday
        return LimitTimeState
    }
},defaultState)