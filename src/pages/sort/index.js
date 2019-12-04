import React from "react"
import {Main,Header,Nav,Container} from "./styled"

class Sort extends React.Component{
    render(){
        return(
            <Main>
                <Header>
                    <div className="back">
                        <i className="iconfont">&#xe609;</i>
                    </div>
                    <div className="find">
                        <i className="iconfont">&#xe622;</i>
                        <span>小米</span>
                    </div>
                    <div className="bigtu">
                        <i className="iconfont">&#xe610;</i>
                    </div>
                </Header>

                <Nav>
                    <div className="comprehensive">
                        <span>综合</span>
                        <i className="iconfont">&#xe611;</i>
                    </div>
                    <div className="sort">
                        价格升序
                    </div>
                    <div className="newProduct">
                        最新上架
                    </div>
                    <div className="screen">筛选</div>
                </Nav>

                <Container>
                    <div className="phone">
                        <img src="https://img2.ch999img.com/pic/product/440x440/20190923100026167.jpg.webp" alt="true"/>
                        <div className="phoneInfo">
                            <h2>小米9 Pro 全网通5G版 梦之白 12GB+5 12GB </h2>
                            <p className="characteristic">
                                <section>
                                    <span>30W无线闪充</span>
                                    <span>骁龙855plus</span>
                                    <span>40W超级有线闪充</span>
                                </section>
                            </p>
                            <p className="price">
                                <em>￥</em><span>4299</span>
                                <u>免息分期</u>
                            </p>
                            <p className="evaluate">
                                <span>251人评价</span>
                                <span>好评率98%</span>
                            </p>
                            <div className="easyPrice">
                                <span>优品￥3799</span>
                                <span>良品￥3599</span>
                            </div>
                        </div>
                    </div>
                </Container>
            </Main>
        )
    }
}

export default Sort