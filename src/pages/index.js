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
    loader:()=>import("./mine"),
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