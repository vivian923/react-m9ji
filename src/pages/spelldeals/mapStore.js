import {spellAction} from "../../actions/actionCreater"
export const mapStateToProps=(state)=>({
    spellList:state.spelldeals.spellList
})

export const mapDispatchToProps=(dispatch)=>({
    handleSpell(){
        dispatch(spellAction())
    }
})