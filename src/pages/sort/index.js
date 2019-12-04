import React from "react"
import {Main,Header,Nav,Container} from "./styled"
import {mapStateToProps,mapDispatchToProps} from "./mapStore"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
@withRouter
@connect(mapStateToProps,mapDispatchToProps)

class Sort extends React.Component{
    constructor(props){
        super(props);
        this.state={
            inputVal:"",
            active:10,
            sortVal:"价格降序",
            shengxu:"0-0-1-1-0_0"
        }
        this.state.inputVal=this.props.match.params.inputVal
    }
    render(){
        let {inputVal,active,sortVal,shengxu} = this.state
        let {SortList} = this.props
        return(
            <Main>
                <Header>
                    <div className="back" onClick={this.handleBack.bind(this)}>
                        <i className="iconfont">&#xe609;</i>
                    </div>
                    <div className="find" onClick={this.handleToSearch.bind(this)}>
                        <i className="iconfont">&#xe622;</i>
                        <span>{inputVal}</span>
                    </div>
                    <div className="bigtu">
                        <i className="iconfont">&#xe610;</i>
                    </div>
                </Header>

                <Nav>
                    <div className={active===10?'comprehensive active':'comprehensive'} onClick={this.handlecomprehensive.bind(this,"0-0-0-0-0_0",inputVal)}>
                        <span>综合</span>
                        <i className="iconfont">&#xe611;</i>
                    </div>
                    <div className={active===11?'sort active':'sort'} onClick={this.handlesort.bind(this,shengxu,inputVal)}>
                        {sortVal}
                    </div>
                    <div className={active===12?'newProduct active':'newProduct'} onClick={this.handlenewProduct.bind(this,"0-0-2-0-0_0",inputVal)}>
                        最新上架
                    </div>
                    <div className={active===13?'screen active':'screen'} onClick={this.handlescreen.bind(this)}>
                        筛选
                    </div>
                </Nav>

                <Container>
                    {
                        SortList.map((item,index)=>(
                            <div className="phone" key={index}>
                                <img src={item.imagePath}/>
                                <div className="phoneInfo">
                                    <h2>{item.name}</h2>
                                    <p className="characteristic">
                                        <section>
                                            {
                                                item.tag.map((child,index)=>(
                                                    <span key={index}>{child}</span>
                                                ))
                                            }
                                        </section>
                                    </p>
                                    <p className="price">
                                        <em>￥</em><span>{item.price}</span>
                                        <u>免息分期</u>
                                    </p>
                                    <p className="evaluate">
                                        <span>{item.commentCount}人评价</span>
                                        <span>好评率{item.praiseRate}</span>
                                    </p>
                                    <div className="easyPrice">
                                        <span>优品￥{item.bargain.price}</span>
                                        <span>良品￥{item.secondHand.price}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    
                </Container>
            </Main>
        )
    }
    handleBack(){
        this.props.history.goBack()
    }
    handleToSearch(){
        this.props.history.push("/search")
    }
    componentDidMount(){
        let {inputVal} = this.state
        this.props.handleActionSortList("0-0-0-0-0_0",inputVal)
    }
    handlecomprehensive(coll,inputVal){
        this.props.handleActionSortList(coll,inputVal)
        this.setState({
            active:10
        })
    }
    handlesort(coll,inputVal){
        this.props.handleActionSortList(coll,inputVal)
        if(this.state.sortVal==="价格升序"){
            this.setState({
                active:11,
                sortVal:"价格降序",
                shengxu:"0-0-1-0-0_0"
            })
        }else{
            this.setState({
                active:11,
                sortVal:"价格升序",
                shengxu:"0-0-1-1-0_0"
            })
        }
        
    }
    handlenewProduct(coll,inputVal){
        this.props.handleActionSortList(coll,inputVal)
        this.setState({
            active:12
        })
    }
    handlescreen(){
        this.setState({
            active:13
        })
    }
}

export default Sort