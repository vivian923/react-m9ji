import http from "utils/request"

export const recommendApi =()=>http.get({
    url:"/ajax/web/api/floors/v1",
    data:{
        labe:0,
        page:1,
        random:0,
    }
})

export const floors=()=>http.get({
    url:"/ajax/web/api/floors/specialEnjoy/v1"
})

export const spell=()=>http.get({
    url:"/ajax/web/api/floors/v1",
    data:{
        label:'1118433473604915201',
        page:1,
        random:1575188323609
    }
})

export const brandApi=()=>http.get({
    url:"/ajax//web/api/floors/v1",
    data:{
        label:'891839589119832066',
        page:1,
        random:0
    }
})