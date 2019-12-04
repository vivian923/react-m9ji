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

export const changePwd=(username,oPwd,nPwd)=>http.post({
    url:"/users/changePwd",
    data:{
            username,
            oPwd,
            nPwd
    }
})

export const changeImg=(id,photoLogo)=>http.post({
    url:"/users/photo",
    data:{
        id,
        photoLogo   
    }
})