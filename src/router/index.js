import {ImgUrl,Pwd,Recommend,Search,Spelldeals,Recycle,Home,Classify,Message,Cart,Mine,Login,Register,Detail,LimitTime,TopLine,Sort} from "../pages"

export const TabBarRoute=[
    {
        path:"/home",
        component:Home,
        text:"首页",
        meta:{
            flag:true,
            requiredAuth:false
        },
        icon:"\ue613",
        children:[
            {
                path:"/home/recommend",
                component:Recommend,
                text:"推荐",
                meta:{
                    flag:true,
                    requiredAuth:false
                }
            },
            {
                path:"/home/limitTime",
                component:LimitTime,
                text:"限时购",
                meta:{
                    flag:true,
                    requiredAuth:false
                }
            },
            {
                path:"/home/spelldeals",
                component:Spelldeals,
                text:"拼团购",
                meta:{
                    flag:true,
                    requiredAuth:false
                }
            },
            {
                path:"/home/recycle",
                component:Recycle,
                text:"回收",
                meta:{
                    flag:true,
                    requiredAuth:false
                }
            },
            {
                path:"/home/topLine",
                component:TopLine,
                meta:{
                    flag:true,
                    requiredAuth:false
                }
            }

        ]
    },
    {
        path:"/classify",
        component:Classify,
        text:"分类",
        meta:{
            flag:true,
            requiredAuth:false
        },
        icon:"\ue610"
    },
    {
        path:"/message",
        component:Message,
        text:"消息",
        meta:{
            flag:true,
            requiredAuth:false
        },
        icon:"\ue60a"
    },
    {
        path:"/cart",
        component:Cart,
        text:"购物车",
        meta:{
            flag:false,
            requiredAuth:false
        },
        icon:"\ue60c",
        bubble:true
    },
    {
        path:"/mine",
        component:Mine,
        text:"我的",
        meta:{
            flag:false,
            requiredAuth:true
        },
        icon:"\ue616"
    }
]

export const NoTabBarRoute=[
    {
        path:"/login",
        component:Login,
        meta:{
            flag:false,
            requiredAuth:false
        }
    },
    {
        path:"/register",
        component:Register,
        meta:{
            flag:false,
            requiredAuth:false
        }
    },
    
    {
        path:"/search",
        component:Search,
        text:"搜索",
        meta:{
            flag:false,
            requiredAuth:false
        }
    },

    {
        path:"/detail/:ppid",
        component:Detail,
        meta:{
            flag:false,
            requiredAuth:false
        },
    },

    {
        path:"/sort",
        component:Sort,
        meta:{
            flag:false,
            requiredAuth:false
        },
    },
    {
        path:"/pwd",
        component:Pwd,
        meta:{
            flag:false,
            requiredAuth:false
        },
    },
    {
        path:"/imgUrl",
        component:ImgUrl,
        meta:{
            flag:false,
            requiredAuth:false
        },
    }
    
]

export const configRoute =TabBarRoute.concat(NoTabBarRoute);