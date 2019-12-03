import React from "react"
import { Main } from "./styled"
import { connect } from "react-redux"
import ReactCountdownClock from "react-countdown-clock"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
@connect(mapStateToProps, mapDispatchToProps)

class LimitTime extends React.Component {
    constructor() {
        super();
        this.state = {
            robNav: [
                {
                    week: "周日抢",
                    se: "抢购结束",
                    sign: "parst"
                },
                {
                    week: "周一抢",
                    se: "抢购结束",
                    sign: "parst"
                },
                {
                    week: "周二抢",
                    se: "抢购中",
                    sign: "now"
                },
                {
                    week: "周三抢",
                    se: "即将开始",
                    sign: "future"
                },
                {
                    week: "周四抢",
                    se: "即将开始",
                    sign: "future"
                },
                {
                    week: "周五抢",
                    se: "即将开始",
                    sign: "future"
                },
                {
                    week: "周六抢",
                    se: "即将开始",
                    sign: "future"
                },
                {
                    week: "周日抢",
                    se: "即将开始",
                    sign: "future"
                },
                {
                    week: "周一抢",
                    se: "即将开始",
                    sign: "future"
                },
            ],
            active: 2
        }
    }
    render() {
        let { robList } = this.props
        let { robNav, active } = this.state
        return (
            <Main>
                <div className="bg"></div>
                <div className="slider">
                    <img src="https://img2.ch999img.com/newstatic/1377/013f1d922028f7a1.jpg.webp" alt="true" />
                </div>
                <div className="rob">
                    <div className="rob_con">
                        {
                            robNav.map((item, index) => (
                                <div key={index} className={active === index ? item.sign : ''} onClick={this.handleChange.bind(this, index)}>
                                    <span>{item.week}</span>
                                    <p>{item.se}</p>
                                </div>
                            ))
                        }

                    </div>
                </div>
                <div className="Count_down">
                    <ReactCountdownClock seconds={10000000}
                        color="#F21C1C"
                        fontSize="14px"
                        size={110} />
                </div>
                <div className="product">
                    {
                        robList.map((item, index) => (
                            <div className="product_item" key={index}>
                                <img src={item.imagePath} alt="true" />
                                <div className="product_item_right">
                                    <p className="line-1">{item.name}</p>
                                    <p className="line-2">{item.description}</p>
                                    <div className="right-bottom">
                                        <div className="robprice">
                                            <p className="pri"><em>￥</em><span>{item.price}</span><i>￥{item.originalPrice}</i></p>
                                            <div className="grow">
                                                <strong>剩余{item.totalCount}件</strong>
                                            </div>
                                        </div>
                                        <button>去抢购</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </Main>
        )
    }
    handleChange(index) {
        this.setState({
            active: index
        })
    }
    componentDidMount() {
        this.props.handleAsyncLimitTime()
    }
}

export default LimitTime;