import React from "react"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { Section } from "./styled"
@connect(mapStateToProps, mapDispatchToProps)
class Cart extends React.Component {
    render() {
        let { selectAll, goodsList, recommend,allprice,allnum} = this.props
        return (
            <Section>
                <header>
                    <a href="true" className="iconfont back">&#xe609;</a>
                    <span>购物车(2)</span>
                    <div className="management">
                        <a href="true">管理</a>
                        <i className="iconfont">&#xe741;</i>
                    </div>
                </header>
                <div className="cart">
                    {
                        goodsList.map((item, index) => (
                            <div className="cartBox" key={item.id}>
                                <input type="checkbox" checked={item.flag} onChange={this.props.handleChangeItem.bind(this, index)} className="select" />
                                <div className="cartContainer">
                                    <img src={item.img} alt="true"></img>
                                    <div className="info">
                                        <p>{item.title}</p>
                                        <a href="true" className="config">
                                            <span>{item.config}</span><span>选服务<i className="iconfont">&#xe611;</i></span>
                                        </a>
                                        <div className="price">
                                            <p>
                                                <em>￥</em><em>{item.price}</em>
                                            </p>
                                            <div className="del" onClick={this.props.handleDel.bind(this,index)}>删除</div>
                                            <div className="numbtn">
                                                <em className="reduce" onClick={this.props.handleReduce.bind(this,index)}>-</em>
                                                <input value={item.num} readOnly/>
                                                <em href="true" className="add" onClick={this.props.handleAdd.bind(this,index)}>+</em>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))
                    }

                </div>
                <div className="recommend">
                    <div className="banner">
                        <img src="https://img2.ch999img.com/newstatic/1377/013cf2070dbb6a19.png" alt="true"></img>
                    </div>
                    <ul>
                        {
                            recommend.map((item)=>(
                            item.sku.map((child)=>(
                                <li key={child.ppid}>
                                    <div className="rinfo">
                                        <img src={child.imagePath} alt="true"></img>
                                        <p>{child.name}</p>
                                        <div className="price">
                                            <span>￥{child.price}</span>
                                            <i className="iconfont">&#xe60c;</i>
                                        </div>
                                    </div>
                                </li>
                        ))

                    ))}
                    </ul>
                </div>
                <footer>
                    <div className="settlement">
                        <div className="allbtn">
                            <input type="checkbox" checked={selectAll} id="all" onChange={this.props.handleChange.bind(this)} /><label htmlFor="id">全选</label>
                        </div>
                        <div className="txt">
                        <p>合计 : <span>￥{sessionStorage.getItem("price")?JSON.parse(sessionStorage.getItem("price")):allprice}</span></p>
                        </div>
                            <button>去结算({sessionStorage.getItem("num")?JSON.parse(sessionStorage.getItem("num")):allprice})</button>
                    </div>
                </footer>
            </Section>

        )
    }
    componentDidMount() {
        this.props.handleCartRecommend()
        this.props.handleSum()
    }
}
export default Cart