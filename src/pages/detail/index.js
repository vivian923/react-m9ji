import React from "react";
import {Container, Header,Main, Footer} from "./styled"

class Detail extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <Container>
                <Header>
                    <div className="back">
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
                        <img src="https://img2.ch999img.com/pic/product/800x800/20191126094557106.jpg.webp" alt="true"/>
                        <span>1/1</span>
                    </div>
                    <div className="describe">
                        <p className="product-title">
                            苹果 AirPods 2代 蓝牙无线耳机 白色 配有线充电盒版 自动开启自动连接无线
                        </p>
                        <p className="product-characteristic">
                            【火热销售】支持嘿 Siri，全新的 Apple H1 耳机芯片
                        </p>
                        <p className="product-price">
                            ￥1099
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
                        <span>购物车</span>
                    </div>
                    <div className="joincart">
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
}

export default Detail