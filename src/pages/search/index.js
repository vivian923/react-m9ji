import React from "react"
import { Section } from "./styled"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import {withRouter} from "react-router-dom"
@withRouter

@connect(mapStateToProps, mapDispatchToProps)
class Search extends React.Component {

    render() {
        let { hot, searchList,isShow} = this.props
        return (
            <Section>
                <header>
                    <a className="iconfont back" href="true">&#xe609;</a>
                    <div className="searchbox">
                        <form>
                            <i className="iconfont">&#xe622;</i>
                            <div>
                                <input type="text" placeholder="5G手机" ref="searchVal" onInput={this.props.handleSearch.bind(this)} />
                            </div>
                        </form>
                    </div>
                    <div className="searchbtn" onClick={this.handleFind.bind(this)}>搜索</div>
                </header>
                <div className="guesslist" style={{display:isShow===true?'block':'none'}}>
                    {
                        searchList.map((item) => (
                            <a href="true" key={item.productId}>
                                <div>
                                    <i className="iconfont">&#xe622;</i>
                                    <span>{item.name}</span>
                                </div>
                                <i className="iconfont">&#xe641;</i>
                            </a>
                        ))
                    }

                </div>
                <div className="hot">
                    <div className="title">
                        <span>热门搜索</span>
                        <img alt="true" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaBAMAAABbZFH9AAAAKlBMVEVHcEydnZ2dnZ2dnZ2goKCcnJyjo6Ofn5+enp6dnZ2dnZ2dnZ2dnZ2cnJwkxHPnAAAADXRSTlMA3HStHfMLK0CKWsSW6GI2/gAAANVJREFUGNNjYKAA9GwMlT4B4yjevRt6964QhON9d1MZQ7r23S0gDovsdrBg4UUHIJl4mYEhyViNgc1WDMg7a8DALnv3YgFD9k2gwqsODIl3794VY2CJdWDgBIqsBfJuMTDMncDAeAVIAXlAQV8BBu7rDAy6QN4lBoZeAQYmoJG9QN4NBgZbBQa22AYGZiDPgIHjagLQCBEGtrN37yQwOAINYmAGWsWyygFoqQGQx2YblAByoOplEMWQFHtZq2OR7VU1iCdqYoGmXD0O8yCHpvGkBkqCCwAMyUeqnGO2tgAAAABJRU5ErkJggg=="></img>
                    </div>
                    <div className="hotbrand">
                        {
                            hot.map((item, index) => (
                                <div key={index}>{item}</div>
                            ))
                        }
                    </div>
                </div>
                <div className="ranklist">
                    <a href="https://m.9ji.com/product/hot/rank?from=sou">
                        <div className="boxc">
                            <i className="iconfont">&#xe622;</i>
                            <span>手机热销排行榜</span>
                            <em>榜单</em>
                        </div>
                        <i className="iconfont">&#xe641;</i>
                    </a>
                </div>
                
            </Section>
        )
    }

    componentDidMount() {
        this.props.handleHistory()
    }
    handleFind(){
        let inputVal=this.refs.searchVal.value
        this.props.history.push("/sort/"+inputVal)
    }
}

export default Search