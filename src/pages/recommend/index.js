import React from "react"
import {Section} from "./styled"
import {connect} from "react-redux"
import {mapStateToProps,mapDispatchToProps} from "./mapStore"

@connect(mapStateToProps,mapDispatchToProps)

class Recommend extends React.Component{
    constructor() {
        super()
        this.state = {
            codeType:false, 
        }
    }
    render(){
        let {goodsList,floors} =this.props;
        return(
            <Section>
               <div className="bg"></div>
                <div className="lbpic">
                    <img src="https://img2.ch999img.com/newstatic/1377/01420e55da11a01b.jpg.webp" alt="true"></img>
                </div>
                <div className="tips">
                    <img src="https://img2.ch999img.com/newstatic/1377/c12348e35e3868.png.webp" alt="true"></img>
                </div>
                <div className="floor-picture">
                    <a href="true">
                        <img src="https://img2.ch999img.com/newstatic/1378/013f3ad0195b274e.jpg.webp" alt="true"></img>
                    </a>
                    <a href="true">
                        <img src="https://img2.ch999img.com/newstatic/1382/013f3ad2371f3433.jpg.webp" alt="true"></img>
                    </a>
                    <a href="true">
                        <img src="https://img2.ch999img.com/newstatic/1378/013f3ada10a112c5.jpg.webp" alt="true"></img>
                    </a>
                    <a href="true">
                        <img src="https://img2.ch999img.com/newstatic/1381/013f3adc00371174.jpg.webp" alt="true"></img>
                    </a>
                    <a href="true">
                        <img src="https://img2.ch999img.com/newstatic/1378/013f3aea967321d3.jpg.webp" alt="true"></img>
                    </a>
                </div>
                <div className="news">
                    <a href="true">
                        <img src="https://img2.ch999img.com/newstatic/1377/fd37bb381d389c.png.webp" alt="true"></img>
                    </a>
                    <a href="true">
                        <img src="https://img2.ch999img.com/newstatic/1383/fd37dbef9d3302.png.webp" alt="true"></img>
                    </a>
                </div>
                <div className="banner">
                    <a href="true">
                        <img src="https://img2.ch999img.com/newstatic/1380/013fb6051911f22a.jpg.webp" alt="true"></img>
                    </a>
                    <a href="true">
                        <img src="https://img2.ch999img.com/newstatic/1380/013fb6797888b5f5.jpg.webp" alt="true"></img>
                    </a>
                </div>
                <div className="gift">
                    <a href="true">
                        <img src="https://img2.ch999img.com/newstatic/1378/01007c8da2386a8a.jpg.webp" alt="true"></img>
                    </a>
                    <a href="true">
                        <img src="https://img2.ch999img.com/newstatic/1383/01007e017694728b.jpg.webp" alt="true"></img>
                    </a>
                </div>
                <div className="message">
                    <div className="messbox">
                        <img  alt="true" className="title" src="//img2.ch999img.com/spa-static/mall-m/jiuji/assets/news.631f4fc3356569715f192b0173db71da.png"></img>
                        <a href="true"><span>5G标杆，不止于快，荣耀V30正式发布！</span></a>
                        <img className="fpic" alt="true" src="https://img2.ch999img.com//pic/edt/news/20191126/20191126174359_0338.jpg.webp"></img>
                    </div>
                </div>
                <div className="floor-optimize">
                    {
                        floors.map((item)=>(
                            <div key={item.ppid}>
                                <img src={item.imagePath} alt="true"></img>
                                <p className="ptitle">{item.title}</p>
                                <p className="pintro">{item.sellingPoint}</p>
                                <p className="pprice">￥{item.price}</p>
                            </div>
                        ))
                    }
                    <div className="all">
                        查看全部
                    </div>
                </div>
                <div className="find">
                    <img src="https://img2.ch999img.com/newstatic/769/2f9b9cb8e1a5d2.png.webp" alt="true"></img>
                </div>
                <div className="goods">
                    {
                        goodsList.map((item,index)=>(
                            <div key={index}>
                                <img src={item.imagePath} alt="true"></img>
                                <p className="introbg"><span>{item.sellingPoint}</span></p>
                                <div className="detail">
                                    <p className="pname">{item.title}</p>
                                    <p className="ppprice">￥{item.price}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="nomore">没有更多了</div>
                <a href="true" className="gotop" style={{display:this.state.codeType===true?'block':'none'}} onClick={this.handleGotop.bind(this)}>
                    <img alt="true" src="data:image/png;base64,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"></img>
                </a>
            </Section>
        )
    }
    componentDidMount(){
        this.props.handleFind()
        window.addEventListener('scroll',this.bindScroll.bind(this))
    }
    handleGotop(){
        window.scrollTo(0,0);
    }
    bindScroll(event) {
        const scrollTop = (event.srcElement ? event.srcElement.documentElement.scrollTop : false) || window.pageYOffset || (event.srcElement ? event.srcElement.body.scrollTop : 0);
        if(scrollTop>600){
            this.setState({
                codeType:true
            })
        }else{
            this.setState({
                codeType:false
            })
        }
    }
}

export default Recommend