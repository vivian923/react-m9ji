import React from "react"
import { Main, Header, Content } from "./styled"
import { withRouter } from "react-router-dom"
@withRouter

class Message extends React.Component {
    constructor() {
        super()
        this.state = {
            messageNav: [
                {
                    title: "消息通知",
                    img: "https://img2.ch999img.com/newstatic/1378/012aa9b4a217f811.png",
                },
                {
                    title: "九机活动",
                    img: "https://img2.ch999img.com/newstatic/1382/012aa9280c6b824c.png",
                },
                {
                    title: "九机头条",
                    img: "https://img2.ch999img.com/newstatic/1378/012aa99f7019aba2.png",
                },
                {
                    title: "九机客服",
                    img: "https://img2.ch999img.com/newstatic/1383/012aa97f2a4377c1.png",
                }
            ],
            active: 0,
            isShow: 0
        }
    }
    render() {
        let { messageNav, active, isShow } = this.state
        return (
            <Main>
                <Header>
                    <span>消息中心</span>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAACa9JREFUaAXNWWlMVFkWBkERxEZFE0VUXFAKbMSNwQ3bQTQ0Md2NmjitJk4c94zGfYlGjYk/jEs0cck4Oo4R40RNu7La6pBGQMTBURQFrEEERZRCKLYCYb6vUq/yqnivqt6r0vYkH/e9u5x3P+6555x7y93NteIOdT2BAFPZA6Uv0AXoDFBaAAOgB2oAHVBhKttRukQ4EWeFOvoBwcAgoCugRpowqBQoAt4ATpF0hhjHDgHGA98ArpRaKMsFXgKqCKolRlOLAnoDn1PeQ3k2QFNVJEqJcWUmAQMUfcX5zmVQkQlwJR0SJcS4SrGAl0OaXd+pGSrTAYdWz8PB74ei3x8BwbM5OMyl3TyhbRhAJ1NlT7M9Yp2ggKY3FlCyuva+q7adcxgIeAOvAVnHYo8YSXG1vjbpgwkxrLySm5gtYiTElfpaheQaAUmzpKlJCR3FRKmGL1Hn4+PT6ezZs9FPnjz5y927d+dMmTKFGYyUcI6caweR2jd06T8Bv4v3I6nk5OSEESNGDBdmq9PpPoSHh/+tpaVFak/RW/4CWIQCqRXjvvrdSCUlJVmQIrmePXv6R0VF+fFZQjhXztlCrIlxWRUH34EDB3rt3LkzbMGCBYEW2hW8cKVIKiQkxLxSwnCslOHp06dMmuWEc7YwScYGQWiWTJMUSUBAQJf09PTFfn5+xn0wYcKEW6tWrbqvRImJ1E9SpKjn1KlTyR8+fGi1o5Nzp0kazVW8YkNQqTj3mz9/fpBAih+eNm1aBEtHhaRu3rz5I0iNkBpz5syZpF27dhVItVnVce7kYBRhxbhazNIVy/Pnz3mmMgv+sxbvbPD39/ecPXt2fy8vLw+tVqtPTU2toiMgqRs3bvyg0WhCzApED/CMSVu2bMkXVdl7JAfjiUAgxvOUqqPHtWvX3k2dOjVl5syZY+G9atatW5cqfD0wMNDr5MmTsaNGjRrZCSLU19XV1d65cycvODi4nw1SyZs2bVJCiurJgVwqBHc/FS+SpoB6VdK5c2f3R48eLe3Vq5e/UgXnzp1L3rBhw3+UjjP1f47y38w8SC4aEFYPj85LW1ubW3Nz8/vo6GgNFstWhmPxscTExBQnSFEXryL+yw/2AsIBp8XX19fj0KFDkSjbCgoK9A8fPvyo1+vLkTmEik1R7kPnz59PXb9+/UO5dgfruUBaEhsKKI5d4o8ggHrCc4WD1I+jR48OjYmJCS0rK/sfY09eXt7H+vp6kuPKmfeZeDyfX0HmzJlj3p/W7Qrfa0iMe4sJpSLx8PBwg6sP3L17dxRIxY8bNy60a9euPE64oc1z+vTpoZir9tmzZyRX09TUVEFy7u7ukuS6Q9LS0vLfvXtnUDQR6c56EhsFdJdut6yFu3YnGbjgcXv37o2fNWtW5IABAwI8PT07HEBN5DSlpaXawsJCfW5ubk1jY6MsORB279atmx7ZR7nlV1W9tdIebZKKjIz0mzdv3rAxY8YEDR48eBDIOXy9xr4wz5/b29sTr1y5Unns2DEtCF/aunXrXCmH0r9/f95JukK6c8XGALIecdmyZcMXLVr0fW8IVka2n9xsOAZmqXkJQTCvv3//vq61tbVy0qRJIdZmWQNBUC6U06Wgvp3EGK2FeNZhLM5EusWLF4+VINWOfdOE+g5maK2EfWJjYzXFxcUvX7x4UZ+Tk1NtIsc9Z/426guuX79eZj1exbsxvnDFzMqtlTQ0NLT16dOnHqZozLorIDgvZcOdl4SFhQ2z5enEukhuxowZIUVFRSVAA8nBRCuRNJvJHTly5DadjXicymfjin2LwTZN7Pbt25UGg6EC+yVj+/bt2QkJCUFAjKOkhMmRHFIvjUAuKyurGgtWibOWBp7z0Y4dO9RmG8InhNLAlfoZYLS2KwzAFy9ejEOsciqgwzs2rFy5MhErb7yvwD4OggnSGFzh6smjjnssCLDpGdFulMOHD0fiWDJBeJcqsXdaMPHGLhCpdtYhjzSuHMJAcUlJSQPjHBLjT3L9VdRXM1h2OGbIKdq4ceMD/lvl2rE/CpHApiMedZPrI9R7e3v7wO1/J7y7uKwhMZ2jSpH3fYKHvIwUqV48Bl5at2fPngtIXtMR875Dm6wzEo87ceLEPfG7C591NEUeuR2+FH379q0BRMqRD377CYJ98tvcuXOv0pwQhP+EvJFJtV1BTHuBf0SO3Y7qOuTQG3LFeB/ucEaBIPoap+JL2dnZVfBsH/nty5cvx+L+I4DPUoKQ14Bc0kdoO378+OdaLXLRCSbj1EFz27ZtIatXr04QJm1d1tbWfsSVQTVSssFswzYtR1z8p3U/3nadPn06Dg6obeHChclVVVUt1n0ceDceNIVMu8iBAZJdcLHps2LFinjJRlTibqP5woULGQIp9ktJSTHGK96FIHSYPfLatWtHQkIjIiJGrlmzRvIeRO47onojF4HYGzTUihodfsReaUD+91hmQPv+/fuvYj+GCe04Wbciwyg8evToHx4/frwBe/Sv+fn5f8a9iG9GRkY5wwX/GXiW9b6CLomSHMjFnHHwLi4XiGGlUsENVBoubfQ4xtCkBfN2u3XrVhbiVO3QoUOHCDqRL2pxYuiBMeZv9e3bt9+BAweQK0+/glTrMG+wVJohOZCLm7BifOa1FX/zVSVLliy5t2/fvku45+Dm5T56vXTp0gyEhwixQqxu8cSJEzs4GZzr+pnGGVSS4tzJwShiYmSabapXVRw8eLAIx/u/Y1VKli9ffhUk2/BjgkasLDMz882DBw8qxXV8xj+iQ511HzvvnLtxtdjPOvmlXZcBqu9AcFKunTx58r+ofPz48d/gUtSbzxTsrzZch1cx0MfFxWXEx8dPQbU7POb7zZs3/2rspO4P52yxJ837QaSPl44u+xkJ2Xxv3InMgFcMqqysfAMn8Q/hW8HBwd5w8T5wFNXcV0K9wrIZ/X8BLJyfFDHq5R74HhCbKutVC/LM4XAi/jDRLNVKOg5sQ1USYLFa7CZHjG1Msybz4SuW3zC3p1Lz85CqNNVVoeT+UHw1Z0OnK5tIKE9OoS1iHPMaYA75tZEjqXuA7L60R4wDXwH8dZ6/VtoyXTR/duGeygS4UrKkOAt7xNiHQrN8CwwCrEMEqr6I0PulAuYgbOurjhKjjjpAC/iZgOKLSRm+lAY4nBmpNS2GgyhA8U+7GKNESIQZRQd3bk+JWmLUy7FDAF64Mqi7UhhsmdDS7GzuJbmPOkNM0EkdTGCDAe5BelE1wuS5FOB5ikcPVYQwziiuICboYkl9/GGBpsqyB8CDJK/BhatwnooNAG98eUPGqwmaGkunyGC8Wf4PeFtpVouZGpUAAAAASUVORK5CYII=" alt="true"/>
                    <a href="true">投诉</a>
                </Header>

                <Content>
                    <div className="nav">
                        {
                            messageNav.map((item, index) => (
                                <div key={index} className={active === index ? 'active' : ''} onClick={this.handleCheck.bind(this, index)}>
                                    <img src={item.img} alt="true" />
                                    <p>{item.title}</p>
                                </div>
                            ))
                        }

                    </div>

                    <div className="showCon">
                        <div className={isShow === 0 ? 'empty' : 'isnone'}>
                            <img src="data:image/png;base64,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" alt="true" />
                            <p>暂无相关内容</p>
                        </div>

                        <div className={isShow === 1 ? 'activicity' : 'isnone'}>
                            <div className="activicity_con">
                                <span className="time">2小时前</span>
                                <img src="https://img2.ch999img.com/pic/clientimg/201912021016490.jpg" alt="true"/>
                                <div className="block">
                                    <h1>今天的你穿着袄，而我还能露着腰</h1>
                                    <div className="msg_con">
                                        秘诀→一打开就被太阳拥抱的便携暖风机立省40元；冬天工作玩游戏不怕手冷的超大加热桌垫69元抢；仙女专用的圣诞暖手宝119元，立即领取优惠>>
                                    </div>
                                    <div className="detail">
                                        <em>查看详情</em>
                                        <i className="iconfont">&#xe641;</i>
                                    </div>
                                </div>
                            </div>
                            <div className="activicity_con">
                                <span className="time">11-29 19:05</span>
                                <img src="https://img2.ch999img.com/pic/clientimg/201906050349130.png" alt="true"/>
                                <div className="block">
                                    <h1>本周降价机型！</h1>
                                    <div className="msg_con">
                                        有没有您关注的？>>
                                    </div>
                                    <div className="detail">
                                        <em>查看详情</em>
                                        <i className="iconfont">&#xe641;</i>
                                    </div>
                                </div>
                            </div>
                            <div className="activicity_con">
                                <span className="time">11-13 09:39</span>
                                <img src="https://img2.ch999img.com/pic/clientimg/201911130931080.jpg" alt="true"/>
                                <div className="block">
                                    <h1>中国6大中医在线传授驱寒偏方，快来<span role="img" aria-labelledby="billing name">🚶</span></h1>
                                    <div className="msg_con">
                                        一打开就被太阳拥抱的便携暖风机立省40元❄让人一用就离不开的超大加热鼠标垫69元抢❄戳我拥有温暖>>>>
                                    </div>
                                    <div className="detail">
                                        <em>查看详情</em>
                                        <i className="iconfont">&#xe641;</i>
                                    </div>
                                </div>
                            </div>
                            <div className="activicity_con">
                                <span className="time">11-10 23:18</span>
                                <img src="https://img2.ch999img.com/pic/clientimg/201911101019000.jpg" alt="true"/>
                                <div className="block">
                                    <h1>【0点必抢】iPhone 11 ¥4999限时抢<span role="img" aria-labelledby="billing name">❗</span>都给我冲!!</h1>
                                    <div className="msg_con">
                                    这才是双11☞华为Mate 20 2299元抢，购华为手机最高享600元换新补贴<span role="img" aria-labelledby="billing name">🔥</span>AirPods Pro 价低官网<span role="img" aria-labelledby="billing name">🔥</span>配件、电脑、潮品统统抄！底！价！超大优惠力度看得见🔥 冲→>>>>
                                    </div>
                                    <div className="detail">
                                        <em>查看详情</em>
                                        <i className="iconfont">&#xe641;</i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={isShow === 2 ? 'headerLine' : 'isnone'}>
                            <div className="headerLine_con">
                                <span>11-26 18:00</span>
                                <img src="https://img2.ch999img.com//pic/edt/news/20191128/20191128091341_9023.jpg" alt="true" />
                                <div className="block">
                                    <h1>荣耀发布全新MagicBook、MagicWatch 2、猎人游戏路由器以及FlyPods 3无线降噪耳机</h1>
                                    <div className="msg_con">
                                        11月26日下午，荣耀在北京举办新品发布会，除期待已久的荣耀V30外同时登场的还有全新的MagicBook、MagicWatch 2、荣耀猎人游戏路由器和FlyPods 3无线降噪耳机。
                                    </div>
                                    <div className="detail">
                                        <em>查看详情</em>
                                        <i className="iconfont">&#xe641;</i>
                                    </div>
                                </div>
                            </div>
                            <div className="headerLine_con">
                                <span>11-26 17:15</span>
                                <img src="https://img2.ch999img.com//pic/edt/news/20191126/20191126174359_0338.jpg" alt="true" />
                                <div className="block">
                                    <h1>5G标杆，不止于快，荣耀V30正式发布！</h1>
                                    <div className="msg_con">
                                        作为荣耀旗下推出的首款5G机型，V30系列于11月26日正式发布，一起来看看这款期待已久的新机。
                                    </div>
                                    <div className="detail">
                                        <em>查看详情</em>
                                        <i className="iconfont">&#xe641;</i>
                                    </div>
                                </div>
                            </div>
                            <div className="headerLine_con">
                                <span>11-26 08:51</span>
                                <img src="https://img2.ch999img.com//pic/edt/news/20191126/20191126094021_8120.png" alt="true" />
                                <div className="block">
                                    <h1>3299元起，华为MatePad Pro来了</h1>
                                    <div className="msg_con">
                                        3299元起，华为MatePad Pro来了
                                    </div>
                                    <div className="detail">
                                        <em>查看详情</em>
                                        <i className="iconfont">&#xe641;</i>
                                    </div>
                                </div>
                            </div>
                            <div className="headerLine_con">
                                <span>11-18 11:38</span>
                                <img src="https://img2.ch999img.com//pic/edt/news/20191118/20191118113802_0113.jpg" alt="true" />
                                <div className="block">
                                    <h1>荣耀V30今日开启预约，将会推出V30与V30 Pro两款机型</h1>
                                    <div className="msg_con">
                                        V30系列11月18日开启预约，26日开启预订。
                                    </div>
                                    <div className="detail">
                                        <em>查看详情</em>
                                        <i className="iconfont">&#xe641;</i>
                                    </div>
                                </div>
                            </div>
                            <div className="headerLine_con">
                                <span>11-15 09:32</span>
                                <img src="https://img2.ch999img.com//pic/edt/news/20191115/20191115094536_2498.jpg" alt="true" />
                                <div className="block">
                                    <h1>vivo s5发布，菱形四摄，售价2698元起</h1>
                                    <div className="msg_con">
                                        11月14日，vivo在杭州发布为年轻群体打造的全新拍照手机vivo S5，售价2698元起
                                    </div>
                                    <div className="detail">
                                        <em>查看详情</em>
                                        <i className="iconfont">&#xe641;</i>
                                    </div>
                                </div>
                            </div>
                            <div className="headerLine_con">
                                <span>11-05 17:08</span>
                                <img src="https://img2.ch999img.com//pic/edt/news/20191105/20191105172742_6811.jpg" alt="true" />
                                <div className="block">
                                    <h1>小米CC 9 Pro 发布：一亿像素，售价2799元起</h1>
                                    <div className="msg_con">
                                        11月5日下午两点，小米召开新品发布会，期待已久的1亿像素新机小米CC 9 Pro 正式与大家见面，售价2799元起。
                                    </div>
                                    <div className="detail">
                                        <em>查看详情</em>
                                        <i className="iconfont">&#xe641;</i>
                                    </div>
                                </div>
                            </div>
                            <div className="headerLine_con">
                                <span>11-01 09:41</span>
                                <img src="https://img2.ch999img.com//pic/edt/news/20191101/20191101102559_5517.jpg" alt="true" />
                                <div className="block">
                                    <h1>5G来了！华为Mate 30系列5G版今日开售！</h1>
                                    <div className="msg_con">
                                        今天，HUAWEI Mate 30系列5G版正式开售。
                                    </div>
                                    <div className="detail">
                                        <em>查看详情</em>
                                        <i className="iconfont">&#xe641;</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Content>
            </Main>
        )
    }
    handleCheck(index) {
        this.setState({
            active: index,
            isShow: index
        })
    }
    componentDidUpdate(){
        if (this.state.isShow === 3) {
            this.props.history.push("/home")
        }
    }
}

export default Message