import {handleNews} from "../../actions/actionType"
import {handleActions} from "redux-actions"

const defaultState={
    newsList:[]
}

export default handleActions({
    [handleNews]:(state,action)=>{
        let newsState=JSON.parse(JSON.stringify(state));
        newsState.newsList=[...newsState.newsList,...action.payload.data];
        return newsState;
    }
},defaultState)

