import styled from "styled-components"

export const Main = styled.div`
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    padding: .94rem 0 .55rem 0;
    overflow-y:auto;
    .bg{
        height:1.125rem;
        background: linear-gradient(45deg,#FF2929,#CB0000);
    }
    .slider{
        width:3.45rem;
        height:1.725rem;
        border-radius: .05rem;;
        overflow: hidden;
        margin:-.94rem auto .075rem;;
        img{
            width:100%
        }
    }
    .rob{
        width:100%;
        height:.58rem;
        box-shadow:.01rem 0 .03rem #ccc;
        margin-bottom:.1rem;
        overflow-x:auto;
        .rob_con{
            width:7.2rem;
            height:.58rem;
            padding:.1rem 0;
            box-sizing:border-box;
            overflow:hidden;
            div{
                width:.68rem;
                height:.38rem;
                float:left;
                display:flex;
                flex-direction:column;
                align-items:center;
                justify-content:space-around;
                span{
                    width:.59rem;
                    height:.21rem;
                    line-height:.21rem;
                    text-align:center;
                    border-radius: .3rem;
                    font-size:.13rem;
                    color:#333;
                }
                p{
                    font-size:.12rem;
                    color:#999;
                }
            }
            .parst{
                span{
                    background:#000;
                    color:#fff;
                }
                p{
                    color:#000;
                }
            }
            .now{
                span{
                    background:#F21C1C;
                    color:#fff;
                }
                p{
                    color:#F21C1C;
                }
            }
            .future{
                span{
                    background:#2AC57F;
                    color:#fff;
                }
                p{
                    color:#2AC57F;
                }
            }
        }
    }
    .Count_down{
        display:flex;
        align-items:center;
        justify-content:center;
    }
    .product{
        min-height:2.2rem;
        .product_item{
            width:3.45rem;
            height:1.1rem;
            margin:.15rem;
            padding:.1rem;
            box-sizing:border-box;
            display:flex;
            align-items:center;
            justify-content:space-between;
            box-shadow: 0 2px 10px 0 rgba(0,0,0,.08);
            border-radius: 10px;
            img{
                width:.9rem;
                height:.9rem;
            }
            .product_item_right{
                width:2.25rem;
                height:.9rem;
                display:flex;
                flex-direction:column;
                justify-content: space-between;
                .line-1{
                    font-size:.15rem;
                    color:#333;
                }
                .line-2{
                    font-size:.14rem;
                    color:#9c9c9c;
                }
                .right-bottom{
                    width:2.25rem;
                    height:.41rem;
                    display:flex;
                    justify-content:space-between;
                    .robprice{
                        width:1.4rem;
                        height:.41rem;
                        display:flex;
                        flex-direction:column;
                        justify-content:space-between;
                        .pri{
                            width:1.4rem;
                            height:.2rem;
                            display:flex;
                            align-items:center;
                            em{
                                font-size:.14rem;
                                color:#F21C1C;
                            }
                            span{
                                font-size:.2rem;
                                color:#F21C1C;
                            }
                            i{
                                font-size:.12rem;
                                color:#9c9c9c;
                                text-decoration:line-through;
                            }
                        }
                        .grow{
                            width:1.35rem;
                            height:.16rem;
                            border: 1px solid #fa6571;
                            border-radius: .08rem;
                            height: .14rem;
                            line-height: .12rem,;
                            overflow: hidden;
                            margin-left: .05rem;
                            position: relative;
                            background: #ffebeb;
                            strong{
                                width:.6rem;
                                height:.14rem;
                                position: absolute;
                                display: block;
                                height: 100%;
                                left: 0;
                                top: 0;
                                background: #fa6571;
                                border-radius: 6px;
                                font-size:.12rem;
                                color:#fff;
                                line-height:100%;
                                text-align:center;
                            }
                        }
                    }
                    button{
                        width:.7rem;
                        height:.3rem;
                        text-align: center;
                        line-height: 30px;
                        color: #fff;
                        border-radius: 30px;
                        font-size:.14rem;
                        background:#F21C1C;
                        margin-top:.11rem;
                    }
                }
            }
        }
    }
`