import {historyAction,searchAction} from "../../actions/actionCreater"
import {throttle} from "utils/throttle"
export const mapStateToProps=(state)=>({
    hot:state.search.hot,
    searchList:state.search.searchList,
    isShow:state.search.isShow
})

export const mapDispatchToProps=(dispatch)=>({
    handleHistory(){
        dispatch(historyAction())
    },
    handleSearch(e){
        let val=e.target.value;
        dispatch(searchAction(val))
    }
})