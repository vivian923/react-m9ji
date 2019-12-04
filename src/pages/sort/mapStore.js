import {SortAction} from "actions/actionCreater"

export const mapStateToProps=(state)=>({
    SortList:state.sort.SortList
})

export const mapDispatchToProps=(dispatch)=>({
    handleActionSortList(cal,inputVal){
        dispatch(SortAction(cal,inputVal))
    }
})