import {brandAction} from "../../actions/actionCreater"
export const mapStateToProps=(state)=>({
    brandList:state.brand.brandList
})

export const mapDispatchToProps=(dispatch)=>({
    handleBrand(){
        dispatch(brandAction())
    }
})