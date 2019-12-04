import {checkedAction,checkedItemAction,cartRecommendAction,addAction,reduceAction,delAction} from "../../actions/actionCreater"
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
       
    },
    handleChangeItem(index){
        dispatch(checkedItemAction(index))
    },
    handleCartRecommend(){
        dispatch(cartRecommendAction())
    },
    handleAdd(index){
        dispatch(addAction(index))
    },
    handleReduce(index){
        dispatch(reduceAction(index))
    },
    handleDel(index){
        dispatch(delAction(index))
    }
})