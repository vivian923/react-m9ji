import React from "react"
import {TabBarRoute} from "../../router"
import {NavLink} from "react-router-dom"
import {TabBox} from "./styled"
class TabBar extends React.Component{

    render(){
        return(
            <TabBox>
                <ul>
                    {
                        TabBarRoute.map((item,index)=>(
                            <li key={index}>
                                <NavLink to={item.path}>
                                    <i className="iconfont">{item.icon}</i>
                                    <span>{item.text}</span>
                                   {
                                       item.bubble?<span className="bubble">0</span>:''
                                   }
                                </NavLink>
                            </li>
                        ))
                       
                    }
                    
                </ul>
            </TabBox>
        )
    }
}

export default TabBar