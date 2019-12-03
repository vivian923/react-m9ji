import styled from "styled-components";

export const Container = styled.div`
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`

export const Header = styled.div`
    height:.44rem;
    display:flex;
    align-items:center;
    justify-content:space-between;
    border-bottom: 1px solid #eee;
    .back,.more{
        width:.44rem;
        height:.44rem;
        display:flex;
        align-items:center;
        justify-content:center;
        i{
            font-size:.22rem;
        }
    }
    .headerNav{
        width:1.22rem;
        height:.44rem;
        display:flex;
        align-items:center;
        justify-content:space-between;
        span{
            font-size:.12rem;
            padding:.05rem 0;
            color:#333;
            box-sizing:border-box;
        }
    }
`

export const Main = styled.div`
    flex:1;
    overflow-y:auto;
    .slider{
        height:3.75rem;
        position:relative;
        img{
            width:100%;
            height:100%;
        }
        span{
            position:absolute;
            left:50%;
            margin-left:-.27rem;
            bottom:.15rem;
            width:.54rem;
            height:.22rem;
            border-radius:.24rem;
            background:rgba(0,0,0,.4);
            color:#fff;
            text-align:center;
            line-height:.22rem;
            font-size:.12rem;
        }
    }
    .describe{
        width:3.75rem;
        height: 2.17rem;
        padding:.13rem .1rem .1rem;
        box-sizing:border-box;
        .product-title{
            width:100%;
            height: .48rem;
            font-size:.16rem;
            color:#333;
            font-weight:900;
        }
        .product-characteristic{
            margin-top:.05rem;
            color:#F21C1C;
            font-size:.13rem;
            line-height:.19rem;
        }
        .product-price{
            font-size:.21rem;
            color:#F21C1C;
            margin:.05rem 0;
        }
        .newman{
            width:3.75rem;
            height: .44rem;
            display:flex;
            align-items:center;
            justify-content:space-between;
            background:#FAF2D9;
            margin-left:-.1rem;
            padding:.05rem .1rem .05rem .1rem;
            box-sizing:border-box;
            p{
                font-size:.14rem;
                color:#604F2A;
                span{
                    color:#F21C1C;
                }
            }
        }
        .wantknow{
            margin:.1rem 0 .07rem;
            display:flex;
            align-items:center;
            justify-content:space-between;
            div{
                display:flex;
                align-items:center;
                justify-content:center;
                span{
                    width:.14rem;
                    height:.14rem;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    background:#333;
                    border-radius:50%;
                    overflow:hidden;
                    margin-right:.03rem;
                    i{
                        font-size:.1rem;
                        color:#ccc;
                    }
                }
                p{
                    font-size:.14rem;
                    color:#333;
                }
            }
            div:nth-of-type(4) span{
                background:#ccc;
            }
            div:nth-of-type(4) span i{
                background:#eee;
            }
            div:nth-of-type(4) p{
                color:#ccc;
            }
        }
    }
`

export const Footer = styled.div`
    height: .49rem;
    border-top: 1px solid #eee;
    display:flex;
    .cart{
        border-right:1px solid #eee;
    }
    .service,.collection,.cart{
        width:.55rem;
        height:.48rem;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        i{
            font-size:.19rem;
            margin-bottom:.01rem;
            color:#333;
        }
        span{
            font-size:.12rem;
            color:#333;
        }
    }
    .joincart{
        width:1.05rem;
        height:.48rem;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:.15rem;
        color:#333;
    }
    .quicklibuy{
        width:1.05rem;
        height:.48rem;
        background:#F21C1C;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        p{
            font-size:.15rem;
            color:#fff;
        }
        span{
            font-size:.12rem;
            color:#fff;
        }
    }
`