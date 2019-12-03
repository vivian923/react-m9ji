import React, { Fragment } from "react"
import { Section } from "./styled"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import BscrollCom from "common/bscroll"
@connect(mapStateToProps, mapDispatchToProps)
class TopLine extends React.Component {
    constructor() {
        super()
        this.page = 1;
    }
    render() {
        let { newsList } = this.props
        return (
            <BscrollCom ref="scroll">
                <Section>
                    <div className="lbpic">
                        <img src="https://img2.ch999img.com//pic/edt/news/20191128/20191128091341_9023.jpg" alt="true"></img>
                    </div>
                    <div className="floor">
                        {
                            newsList.map((item) => (
                                <Fragment key={item.id}>
                                    {
                                        item.big ? <div className="big" >
                                            <img src={item.imagePath} alt="true"></img>
                                            <div className="info">
                                                <span>{item.title}</span>
                                            </div>
                                            </div> : <div className="floorBox" key={item.id}>

                                                <div className="img">
                                                    <img src={item.imagePath} alt="true"></img>
                                                </div>
                                                <div className="info">
                                                    <p>{item.title}</p>
                                                    <div>
                                                        <span>{item.author}</span>
                                                        <span>{item.pageView}阅读</span>
                                                    </div>
                                                </div>
                                            </div>
                                    }

                                </Fragment>
                            ))
                        }

                    </div>
                </Section>
            </BscrollCom>
        )
    }

    componentWillUpdate(){
        this.refs.scroll.handlefinishPullUp()
    }
    componentDidMount() {
        this.handleTopLine()
        //上拉加载更多
        this.refs.scroll.handlepullingUp(()=>{
            this.handleTopLine()
        })
    }
    handleTopLine() {
        this.props.handleNews(this.page);
        this.page++;
    }
}

export default TopLine
