import React from "react"
import {TabBarRoute} from "../../router"
import {NavLink} from "react-router-dom"
import {TabBox} from "./styled"
import {connect} from "react-redux"
import {mapStateToProps,mapDispatchToProps} from "./mapStore"
@connect(mapStateToProps,mapDispatchToProps)
class TabBar extends React.Component{

    render(){
        let{allnum}=this.props
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
                                       item.bubble?<span className="bubble">{allnum}</span>:''
                                   }
                                </NavLink>
                            </li>
                        ))
                       
                    }
                    
                </ul>
            </TabBox>
        )
    }
    componentDidMount(){
        this.props.handleSum()
    }
}

export default TabBar