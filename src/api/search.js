import http from "utils/request"

export const historyApi =()=>http.get({
    url:'/ajax//web/api/search/hotAndHistorySearch/v1',
    data:{
        history:'',
        searchType:1
    }
})

export const searchApi=(keyword)=>http.get({
    url:"/ajax/web/api/search/recommendSearch/v1",
    data:{
        keyword,
        searchType:1,
        count:10
    }
})