import React from "react"
import { Header } from "./styled"
import {withRouter} from "react-router-dom"
@withRouter

class Home extends React.Component {
    constructor() {
        super()
        this.state={
            list:[
                {
                    text:"推荐",
                    path:"/home/recommend"
                },
                {
                    text:"限时购",
                    path:"sss"
                },
                {
                    text:"拼团购",
                    path:"/home/spelldeals"
                },
                {
                    text:"旧机回收",
                    path:"/home/recycle"
                },
                {
                    text:"手机快修",
                    path:"dd"
                },
                {
                    text:"头条",
                    path:"ff"
                },
            ]
        }
    }
    render() {
        let {list}=this.state
        return (
                <Header>
                    <div className="searchbox" onClick={this.handleSearch.bind(this)}>
                        <div className="search">
                            <div  className="city">
                                <span>昌平区</span>
                                <i className="iconfont">&#xe611;</i>
                            </div>
                            <div className="line"></div>
                            <div  className="searchbtn">
                                <i className="iconfont">&#xe622;</i>
                                <span>5G手机</span>
                            </div>
                        </div>
                    </div>
                    <ul className="slider">
                        {
                            list.map((item)=>(
                                <li onClick={this.handleTo.bind(this,item.path)} key={item.path}>{item.text}</li>
                            ))
                        }
                    </ul>
                </Header>

        )
    }
    handleTo(path){
        this.props.history.push(path)
    }
    handleSearch(){
        this.props.history.push("/search")
    }

}

export default Home