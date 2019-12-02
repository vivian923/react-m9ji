import React from "react"
import {Main, Header, Connect} from "./styled"
import {connect} from "react-redux";
import {mapStateToProps,mapDispatchToProps} from "./mapStore"
@connect(mapStateToProps,mapDispatchToProps)

class Classify extends React.Component{
    constructor(){
        super()
        this.state={
            active:0,
            isShow:0
        }
    }
    render(){
        let {classifyList} = this.props
        return(
            <Main>
                <Header>
                    <div className="goBack">
                        <i className="iconfont">&#xe609;</i>
                    </div>
                    <div className="finds">
                        <i className="iconfont">&#xe622;</i>
                        <span>5G手机</span>
                    </div>
                    <div className="more">
                        <i className="iconfont">&#xe655;</i>
                    </div>
                </Header>
                <Connect>
                    <div className="con">
                        <div className="left">
                            {
                                classifyList.map((item,index)=>(
                                    <span key={index} className={this.state.active===index?'active':''} onClick={this.handleCheckout.bind(this,index)}>
                                        <i></i>
                                        <em>{item.title}</em>
                                    </span>
                                ))
                            }
                            <span></span>
                        </div>
                        
                        {
                            classifyList.map((item,index)=>(
                                <div key={index} className={this.state.isShow===index?'right':'isnone'}>
                                    <div className="rightImg">
                                        <img src={item.picture} alt="true"/>
                                    </div>
                                    {
                                        item.children.map((child)=>(
                                            <div className="product" key={child.id}>
                                                <div className="title">
                                                    <span>{child.title}</span>
                                                </div>
                                                <div className="product_mo">
                                                    {
                                                        child.children.map((kids)=>(
                                                            <div key={kids.id}>
                                                                <img src={kids.picture} alt="true"/>
                                                                <p>{kids.title}</p>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>
                </Connect>
            </Main>
        )
    }
    handleCheckout(index){
        this.setState({
            active:index,
            isShow:index
        })
    }
    componentDidMount(){
        this.props.handleAsyncClassify()
    }
}

export default Classify