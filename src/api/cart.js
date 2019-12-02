import http from "utils/request"

export const cartRecommendApi=()=>http.get({
    url:"/ajax/web/api/tmpBasket/list/v2"
})