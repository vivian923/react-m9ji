import http from "utils/request";

export const loginNode=(username,password)=>http.post({
    url:"/users/login",
    data:{
            username:username,
            password:password
        }
})

export const registerNode=(username,password)=>http.post({
    url:"/users/register",
    data:{
        username:username,
        password:password
    }
})