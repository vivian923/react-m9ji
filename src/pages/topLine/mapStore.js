import {newsAction} from "../../actions/actionCreater"
export const mapStateToProps =(state)=>({
    newsList:state.topLine.newsList
})

export const mapDispatchToProps=(dispatch)=>({
    handleNews(page){
        dispatch(newsAction(page))
    }
})