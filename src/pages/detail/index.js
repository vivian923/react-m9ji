import React from "react";
import { Container, Header, Main, Footer } from "./styled"

import { detailApi } from "api/detail"
import {withRouter} from "react-router-dom"
@withRouter
class Detail extends React.Component {
    constructor() {
        super()
        this.state = {
            info: {}
        }
    }
    render() {
        let { info } = this.state;
        return (
            <Container>
                <Header>
                    <div className="back" onClick={this.handleBack.bind(this)}>
                        <i className="iconfont">&#xe609;</i>
                    </div>
                    <div className="headerNav">
                        <span>商品</span>
                        <span>评论</span>
                        <span>详情</span>
                    </div>
                    <div className="more">
                        <i className="iconfont">&#xe655;</i>
                    </div>
                </Header>
                <Main>
                    <div className="slider">
                        <img src={info.imagePath} alt="true" ref="img" />
                        <span>1/1</span>
                    </div>
                    <div className="describe">
                        <p className="product-title">
                            <span ref="name">{info.productName}</span> <span ref="skuname">{info.skuName}</span><span ref="tags">{info.tags}</span>
                        </p>
                        <p className="product-characteristic" ref="profile">
                            {info.profile}
                        </p>
                        <p className="product-price" ref="price">
                            ￥{info.price}
                        </p>
                        <div className="newman">
                            <p>新人专享全场通用9元优惠,领券<span>立减9元</span></p>
                            <i className="iconfont">&#xe641;</i>
                        </div>
                        <div className="wantknow">
                            <div>
                                <span>
                                    <i className="iconfont">&#xe727;</i>
                                </span>
                                <p>价格走势</p>
                            </div>
                            <div>
                                <span>
                                    <i className="iconfont">&#xe606;</i>
                                </span>
                                <p>降价通知</p>
                            </div>
                            <div>
                                <span>
                                    <i className="iconfont">&#xe612;</i>
                                </span>
                                <p>机型对比</p>
                            </div>
                            <div>
                                <span>
                                    <i className="iconfont">&#xe6e5;</i>
                                </span>
                                <p>开箱展示</p>
                            </div>
                        </div>
                    </div>
                </Main>
                <Footer>
                    <div className="service">
                        <i className="iconfont">&#xe741;</i>
                        <span>客服</span>
                    </div>
                    <div className="collection">
                        <i className="iconfont">&#xe666;</i>
                        <span>收藏</span>
                    </div>
                    <div className="cart">
                        <i className="iconfont">&#xe60c;</i>
                        <span onClick={this.handlePush.bind(this)}>购物车</span>
                    </div>
                    <div className="joincart" onClick={this.handleAddCart.bind(this)}>
                        加入购物车
                    </div>
                    <div className="quicklibuy">
                        <p>立即购买</p>
                        <span>卷后￥1090</span>
                    </div>
                </Footer>
            </Container>
        )
    }
    async componentDidMount() {
        let ppid = this.props.match.params.ppid
        let data = await detailApi(ppid)
        this.setState({
            info: data.data
        })
    }
    handleAddCart(){
        let img=this.refs.img.src;
        let title=this.refs.name.innerHTML;
        let config=this.refs.skuname.innerHTML;
        let price=Number(this.refs.price.innerHTML.replace("￥",''));
        let id=this.state.info.ppid;
        let flag=true; let num =1
        let info ={
            img,title,config,price,id,flag,num
        }
        let cart =sessionStorage.getItem("cart")?JSON.parse(sessionStorage.getItem("cart")):[]
        cart.push(info)
        sessionStorage.setItem("cart",JSON.stringify(cart))
    }
    handlePush(){
        this.props.history.push("/cart")
    }
    handleBack(){
        this.props.history.goBack()
    }
}

export default Detail