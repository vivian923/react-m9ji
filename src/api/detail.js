import http from "utils/request"

export const detailApi =(ppid)=>http.get({
    url:"/ajax/web/api/sc/products/getDetailStatic/v3",
    data:{
        ppid
    }
})