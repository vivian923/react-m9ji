import http from "utils/request"

export const SortListApi =(coll="0-0-0-0-0_0",word)=>http.get({
    url:'/ajax/web/api/products/search/v1',
    data:{
        coll:coll,
        keyword:word,
        productId:'',
        page:1,
        inStock:0,
        searchType:1,
        isPID:1,
        from:''
    }
})