import {checkedAction,checkedItemAction,cartRecommendAction,addAction,reduceAction,sumAction,delAction} from "../../actions/actionCreater"
export const mapStateToProps=(state)=>({
    selectAll:state.cart.selectAll,
    goodsList:state.cart.goodsList,
    recommend:state.cart.recommend,
    allnum:state.cart.allnum,
    allprice:state.cart.allprice
})

export const mapDispatchToProps=(dispatch)=>({
    handleChange(){
        dispatch(checkedAction())
        dispatch(sumAction())
    },
    handleChangeItem(index){
        dispatch(checkedItemAction(index))
        dispatch(sumAction())
    },
    handleCartRecommend(){
        dispatch(cartRecommendAction())
    },
    handleAdd(index){
        dispatch(addAction(index))
        dispatch(sumAction())
    },
    handleReduce(index){
        dispatch(reduceAction(index))
        dispatch(sumAction())
    },
    handleSum(){
        dispatch(sumAction())
    },
    handleDel(index){
        dispatch(delAction(index))
        dispatch(sumAction())
    }
})