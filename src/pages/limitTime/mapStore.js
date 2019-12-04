import {limitTimeAsyncAction} from "actions/actionCreater"

export const mapStateToProps=(state)=>({
    robList:state.rob.robList
})

export const mapDispatchToProps=(dispatch)=>({
    handleAsyncLimitTime(){
        dispatch(limitTimeAsyncAction())
    }
})