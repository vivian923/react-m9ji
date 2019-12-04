import {handleActions} from "redux-actions"
import {handleSortList} from "actions/actionType"

const defaultState={
    SortList:[]
}

export default handleActions({
    [handleSortList]:(state,action)=>{
        let SortListState = JSON.parse(JSON.stringify(state))
        SortListState.SortList=action.payload.data
        return SortListState
    }
},defaultState)