import { classifyAsyncAction } from "actions/actionCreater";

export const mapStateToProps =(state)=>({
    classifyList:state.classify.classifyList
})

export const mapDispatchToProps =(dispatch)=>({
    handleAsyncClassify(){
        dispatch(classifyAsyncAction())
    }
})