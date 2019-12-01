import {handleActions} from "redux-actions"
import {handleSpell} from "../../actions/actionType"
const defaultState={
    spellList:[]
}

export default handleActions({
    [handleSpell]:(state,action)=>{
        let spellState=JSON.parse(JSON.stringify(state));
        spellState.spellList=action.payload.data;
        return spellState;
    }
},defaultState)
