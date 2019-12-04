import Loadable from "react-loadable"
import Loading from "../common/loading"

export const Home = Loadable({
    loader:()=>import("./home"),
    loading:Loading
})

export const Classify = Loadable({
    loader:()=>import("./classify"),
    loading:Loading
})

export const Message = Loadable({
    loader:()=>import("./message"),
    loading:Loading
})

export const Cart = Loadable({
    loader:()=>import("./cart"),
    loading:Loading
})

export const Mine = Loadable({
    loader:()=>import("./mine/index"),
    loading:Loading
})

export const Login = Loadable({
    loader:()=>import("./login"),
    loading:Loading
})

export const Register = Loadable({
    loader:()=>import("./register"),
    loading:Loading
})

export const Spelldeals = Loadable({
    loader:()=>import("./spelldeals"),
    loading:Loading
})

export const Recycle = Loadable({
    loader:()=>import("./recycle"),
    loading:Loading
})

export const Search = Loadable({
    loader:()=>import("./search"),
    loading:Loading
})

export const Recommend = Loadable({
    loader:()=>import("./recommend"),
    loading:Loading
})

export const Detail = Loadable({
    loader:()=>import("./detail"),
    loading:Loading
})

export const LimitTime = Loadable({
    loader:()=>import("./limitTime"),
    loading:Loading
})


export const Sort = Loadable({
    loader:()=>import("./sort"),
    loading:Loading
})

export const TopLine = Loadable({
    loader:()=>import("./topLine"),
    loading:Loading
})

export const Pwd = Loadable({
    loader:()=>import("./pwd"),
    loading:Loading
})

export const ImgUrl = Loadable({
    loader:()=>import("./imgUrl"),
    loading:Loading
})