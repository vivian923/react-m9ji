import React from "react"
import { Section } from "./styled"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
@connect(mapStateToProps, mapDispatchToProps)
class Recycle extends React.Component {

    render() {
        let { brandList } = this.props
        return (
            <Section>
                <div className="bg"></div>
                <div className="lbpic">
                    <img src="https://img2.ch999img.com/newstatic/913/4eaf9f4aab4a54.jpg.webp" alt="true"></img>
                </div>
                <div className="goods">
                    <a href="true">
                        <img src="https://img2.ch999img.com/newstatic/1382/c12498bce2f010.png.webp" alt="true"></img>
                    </a>
                    <a href="true">
                        <img src="https://img2.ch999img.com/newstatic/1379/c124a34a447dac.png.webp" alt="true"></img>
                    </a>
                    <a href="true">
                        <img src="https://img2.ch999img.com/newstatic/1382/c124a7b972bcd7.png.webp" alt="true"></img>
                    </a>
                    <a href="true">
                        <img src="https://img2.ch999img.com/newstatic/1382/d5b3b7c11863f3.png.webp" alt="true"></img>
                    </a>
                    <a href="true">
                        <img src="https://img2.ch999img.com/newstatic/1381/c124bdfb39b4a1.png.webp" alt="true"></img>
                    </a>
                </div>
                <div className="detection">
                    <div className="detebox">
                        <div className="title">
                            <img src="https://img2.ch999img.com/newstatic/1378/d33f4366a52b5c.png" alt="true"></img>
                            <span>检测到</span>
                        </div>
                        <div className="line"></div>
                        <div className="phone">
                            <img src="https://img2.ch999img.com/pic/product/60x60/20180402163209165.jpg" alt="true"></img>
                            <div className="right">
                                <p>本机型号:<span>Apple iPhone 6</span></p>
                                <div className="price">
                                    <p>预估回收价:<span className="rmb">￥<span>600</span></span></p>
                                    <div className="btn">立即估价</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="data">
                    <a href="true">
                        <img src="https://img2.ch999img.com/newstatic/1380/0127a89fae82b274.png.webp" alt="true"></img>
                    </a>
                    <a href="true">
                        <img src="https://img2.ch999img.com/newstatic/1381/0127a8b4afb10e54.png.webp" alt="true"></img>
                    </a>
                </div>
                <div className="banner">
                    <img src="https://img2.ch999img.com/newstatic/913/71cc3aec56e993.png.webp" alt="true"></img>
                    <img src="https://img2.ch999img.com/newstatic/913/71cc3aec56e993.png.webp" alt="true"></img>
                </div>
                <div className="banner">
                    <img src="https://img2.ch999img.com/newstatic/770/2b5bca68017fe3.png.webp" alt="true"></img>
                    <img src="https://img2.ch999img.com/newstatic/769/2b5bd13c9451e6.png.webp" alt="true"></img>
                </div>
                <div className="line"></div>
                <div className="brand">热门回收机型</div>
                <div className="phones">
                    {
                        brandList.map((item) => (
                            <div className="stuff" key={item.id}>
                                <img src={item.imagePath} alt="true"></img>
                                <div className="intro">
                                    <p>{item.title}</p>
                                    <p>预估回收价</p>
                                    <p>￥{item.price}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </Section>
        )
    }
    componentDidMount() {
        this.props.handleBrand()
    }
}

export default Recycle