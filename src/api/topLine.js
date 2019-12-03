import http from "utils/request"

export const topLineApi=(page)=>http.get({
    url:"/ajax/web/api/floors/v1",
    data:{
        label:'891839620925239297',
        page:page,
        random:0,
        from:''
    }
})