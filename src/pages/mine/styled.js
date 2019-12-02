import styled from "styled-components";

export const Main = styled.div`
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const Header = styled.div`
    height:.44rem;
    background:#FF2929;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .back{
        width:.44rem;
        height:.44rem;
        display: flex;
        align-items: center;
        justify-content: center;
        i{
            font-size:.22rem;
            color:#fff;
        }
    }
    h2{
        font-size:.18rem;
        color:#fff;
        opacity:0;
    }
    .shezhi{
        width:.58rem;
        height:.44rem;
        padding-right:.1rem;
        display:flex;
        align-items:center;
        span{
            font-size:.14rem;
            color:#fff;
            margin-right:.05rem;
        }

        i{
            font-size:.15rem;
            color:#fff;
        }
    }
` 
export const Content = styled.div`
    flex:1;
    overflow-y:auto;
    .bg{
        height:.53rem;
        background:#FF2929;
    }
    .info{
        width:3.47rem;
        height:1.79rem;
        background:#fff;
        border-radius:.05rem;
        margin:-.44rem auto .15rem auto;
        box-shadow: 0 0 .03rem #ccc;
        padding:0 .1rem;
        box-sizing:border-box;
        .personvip{
            width:3.27rem;
            height:1.16rem;
            padding:.2rem 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            box-sizing:border-box;
            a{
                width:.86rem;
                height:.76rem;
                img{
                    width:.70rem;
                    height:.70rem;
                    border: 3px solid #fff;
                    margin-right:.1rem;
                    border-radius:50%;
                    box-shadow: 0 2px 5px #ccc;
                }
            }
            .pinfo{
                width:1.5rem;
                height:.73rem;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                p{
                    font-size:.18rem;
                    color:#333;
                    font-weight:900;
                }
                .vip{
                    width:1.5rem;
                    height:.2rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    span{
                        width:.78rem;
                        height:.18rem;
                        img{
                            width:100%;
                            height:100%;
                        }
                    }
                    i{
                        width:.59rem;
                        height:.2rem;
                        display:flex;
                        img{
                            width:.2rem;
                            height:.2rem;
                            margin-right:.03rem;
                        }
                        u{
                            font-size:.12rem;
                            color:#333;
                        }
                    }
                }
                em{
                    font-size:.12rem;
                    color:#555;
                }
            }
            .jifen{
                width:.96rem;
                height:.24rem;
                padding:0 .05rem;
                background:#F21C1c;
                border-radius: .24rem 0 0 .24rem;
                margin:-.3rem -.1rem 0 0;
                display:flex;
                align-items: center;
                justify-content: space-between;
                img{
                    width:.14rem;
                    height:.14rem;
                }
                span{
                    font-size:.12rem;
                    color:#fff;
                }
            }
        }
        .infoval{
            width:3.27rem;
            height:.63rem;
            padding-bottom:.2rem;
            display:flex;
            box-sizing:border-box;
            div{
                width:.8175rem;
                height:.43rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                p{
                    font-size:.13rem;
                    color:#333;
                }
            }
        }
    }
    .vipcode{
        width:3.47rem;
        height:.44rem;
        margin: 0 auto .15rem;
        display:flex;
        align-items:center;
        justify-content: space-between;
        span{
            font-size:.16rem;
            color:#333;
            font-weight:900
        }
        i{
            font-size:.26rem;
        }
    }
    .affair{
        height:7.61rem;
        overflow:hidden;
        .order{
            width:3.45rem;
            height:.3rem;
            margin:0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            span{
                font-size:.16rem;
                color:#333;
                font-weight:900;
            }
            .allorder{
                width:.76rem;
                height:.3rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                p{
                    font-size:.14rem;
                    color:#9c9c9c;
                }
                i{
                    font-size:.20rem;
                    color:#9c9c9c;
                }
            }
        }
        .order_con{
            width:3.45rem;
            height:.84rem;
            margin:0 auto .1rem;
            padding:0 .1rem .15rem;
            border-bottom: 1px solid #dfdfdf;
            display: flex;
            align-items: center;
            justify-content: space-between;
            box-sizing:border-box;
            div{
                width:.8125rem;
                height:.69rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                img{
                    width:.32rem;
                    height:.32rem;
                    margin-top:.12rem;
                }
                p{
                    font-size:.13rem;
                    color:#333;
                }
            }
        }
        .other{
            width: 3.45rem;
            height: .3rem;
            margin:0 auto;
            display:flex;
            align-items:center;
            font-size:.16rem;
            font-weight:900;
            color:#333;
        }
        .other_con{
            width:3.45rem;
            height:2.02rem;
            margin:0 auto .1rem;
            padding: 0 .1rem;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            box-sizing:border-box;
            div{
                width:.8125rem;
                height: .86rem;
                margin-bottom:.15rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                img{
                    width:.32rem;
                    height:.32rem;
                    margin-top:.08rem;
                }
                p{
                    font-size:.13rem;
                    color:#333;
                }
                span{
                    font-size:.12rem;
                    color:#9c9c9c;
                }
            }
            div:nth-of-type(6) p{
                margin-bottom:.22rem;
            }
        }
        .myinfo,.message{
            width: 3.45rem;
            height: .3rem;
            margin:0 auto;
            display:flex;
            align-items:center;
            font-size:.16rem;
            font-weight:900;
            color:#333;
        }
        .myinfo_con{
            width:3.45rem;
            height:1.01rem;
            margin:0 auto .1rem;
            padding: 0 .1rem;
            display: flex;
            align-items: center;
            box-sizing:border-box;
            div{
                width:.8125rem;
                height: .86rem;
                margin-bottom:.15rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                img{
                    width:.32rem;
                    height:.32rem;
                    margin:.12rem 0;
                }
                p{
                    font-size:.13rem;
                    color:#333;
                }
            }
            div:nth-of-type(2) span{
                font-size:.12rem;
                color:#9c9c9c;
            }
        }
        .function{
            width:3.45rem;
            height:.3rem;
            margin:0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            span{
                font-size:.16rem;
                color:#333;
                font-weight:900;
            }
            .morefunction{
                width:.76rem;
                height:.3rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                p{
                    font-size:.14rem;
                    color:#9c9c9c;
                }
                i{
                    font-size:.20rem;
                    color:#9c9c9c;
                }
            }
        }
        .function_con,.message_con{
            width:3.45rem;
            height:1.01rem;
            margin:0 auto .1rem;
            padding: 0 .1rem;
            display: flex;
            align-items: center;
            box-sizing:border-box;
            div{
                width:.8125rem;
                height: .86rem;
                margin-bottom:.15rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                img{
                    width:.32rem;
                    height:.32rem;
                    margin:.12rem 0;
                }
                p{
                    font-size:.13rem;
                    color:#333;
                }
            }
            div:nth-of-type(2) span{
                font-size:.12rem;
                color:#9c9c9c;
            }
        }
        
    }
`   