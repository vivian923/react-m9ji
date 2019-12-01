import {goodsAction} from "../../actions/actionCreater"
export const mapStateToProps =(state)=>({
    goodsList:state.recommend.goodsList,
    floors:state.recommend.floors
})
export const mapDispatchToProps=(dispatch)=>({
    handleFind(){
        dispatch(goodsAction())
    }
})