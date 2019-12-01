import React from "react"
import {Section} from "./styled"
class Search extends React.Component{
    
    render(){
        return(
            <Section>
                <header>
                    <a className="iconfont back" href="true">&#xe609;</a>
                    <div className="searchbox">
                        <form>
                            <i className="iconfont">&#xe622;</i>
                            <div>
                                <input type="text" placeholder="5G手机"/>
                            </div>
                        </form>
                    </div>
                    <a className="searchbtn" href="true">搜索</a>
                </header>
                <div className="hot">
                    <div className="title">
                        <span>热门搜索</span>
                        <img alt="true"src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaBAMAAABbZFH9AAAAKlBMVEVHcEydnZ2dnZ2dnZ2goKCcnJyjo6Ofn5+enp6dnZ2dnZ2dnZ2dnZ2cnJwkxHPnAAAADXRSTlMA3HStHfMLK0CKWsSW6GI2/gAAANVJREFUGNNjYKAA9GwMlT4B4yjevRt6964QhON9d1MZQ7r23S0gDovsdrBg4UUHIJl4mYEhyViNgc1WDMg7a8DALnv3YgFD9k2gwqsODIl3794VY2CJdWDgBIqsBfJuMTDMncDAeAVIAXlAQV8BBu7rDAy6QN4lBoZeAQYmoJG9QN4NBgZbBQa22AYGZiDPgIHjagLQCBEGtrN37yQwOAINYmAGWsWyygFoqQGQx2YblAByoOplEMWQFHtZq2OR7VU1iCdqYoGmXD0O8yCHpvGkBkqCCwAMyUeqnGO2tgAAAABJRU5ErkJggg=="></img>
                    </div>
                    <div className="hotbrand">
                        <div>华为 Mate 30 5G</div>
                        <div>iPhone 11</div>
                        <div>荣耀 V30</div>
                        <div>一加 7T</div>
                        <div>5G手机</div>
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
                <div className="guesslist">
                    <a href="true">
                        <div>
                            <i className="iconfont">&#xe622;</i>
                            <span>华为 Mate 30 （TAS-AN00）全网通5G版</span>
                        </div>
                        <i className="iconfont">&#xe641;</i>
                    </a>
                </div>
            </Section>
        )
    }
}

export default Search