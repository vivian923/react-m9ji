import {sumAction} from "../../actions/actionCreater"
export const mapStateToProps=(state)=>({
    allnum:state.cart.allnum
})
export const mapDispatchToProps=(dispatch)=>({
    handleSum(){
        dispatch(sumAction())
    }
})