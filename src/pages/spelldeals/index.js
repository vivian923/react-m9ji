import React from "react"
import { Section } from "./styled"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"

@connect(mapStateToProps, mapDispatchToProps)

class Spelldeals extends React.Component {
    render() {
        let { spellList } = this.props
        return (
            <Section>
                <div className="bg"></div>
                <div className="lbpic">
                    <img src="https://img2.ch999img.com/newstatic/1383/013fccb514229447.jpg.webp" alt="true"></img>
                </div>
                <div className="goodsflow">
                    {
                        spellList.map((item) => (
                            <div className="good_items" key={item.raId}>
                                <img src={item.imagePath} alt="true"></img>
                                <div className="lintro">
                                    <p className="name">{item.hintTag.text ? <a className="newman" href="true">{item.hintTag.text}</a> : ''}{item.productName}</p>
                                    <p className="material">{item.skuName}</p>
                                    <div className="bintro">
                                        <div className="lefttips">
                                            <p>
                                                <span>
                                                    <em>￥</em>
                                                    <em>{item.raPrice}</em>
                                                </span>
                                                <span><del>￥{item.price}</del></span>
                                            </p>
                                            <p>{item.raType}</p>
                                        </div>
                                        <div className="tbtn">去拼团</div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </Section>
        )
    }
    componentDidMount() {
        this.props.handleSpell()
    }
}

export default Spelldeals