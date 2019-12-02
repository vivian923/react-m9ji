import {handleActions} from "redux-actions";
import { handleClassifyList } from "actions/actionType";

const defaultState={
    classifyList:[]
}

export default handleActions({
    [handleClassifyList]:(state,action)=>{
        let classifyListState = JSON.parse(JSON.stringify(state))
        classifyListState.classifyList=action.payload.data.data
        return classifyListState
    }
},defaultState)