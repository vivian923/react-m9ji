import styled from "styled-components";

export const Main = styled.div`
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
    .back,.bigtu{
        width:.44rem;
        height:.44rem;
        display:flex;
        align-items:center;
        justify-content:center;
        i{
            font-size:.24rem;
        }
    }
    .find{
        width:2.87rem;
        height:.32rem;
        border-radius: 16px;
        background-color: #f5f5f5;
        font-size:.16rem;
        color:#9c9c9c;
        display:flex;
        align-items:center;
        i{
            font-size:.17rem;
            margin:0 .05rem 0 .1rem;;
        }
    }
`
export const Nav = styled.div`
    height:.44rem;
    box-shadow: 0 5px 7px 0 rgba(0,0,0,.08);
    position:sticky;
    top:0;
    .comprehensive,.sort,.newProduct,.screen{
        width:.9375rem;
        height:.44rem;
        float:left;
        color:#333;
        font-size:.14rem;
        text-align:center;
        line-height:.44rem;
    }
    .active{
        color:#F21C1C;
    }
`

export const Container = styled.div`
    flex:1;
    overflow-y:auto;
    .phone{
        height: 1.84rem;
        box-sizing:border-box;
        padding:.1rem .1rem .18rem;
        display:flex;
        justify-content:space-between;
        border-bottom:.01rem solid #eee;
        img{
            width:1rem;
            height:1rem;
        }
        .phoneInfo{
            width:2.5rem;
            height: 1.56rem;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            h2{
                font-size:.13rem;
                font-weight:900;
                color:#333;
            }
            .characteristic{
                width:100%;
                height: .21rem;
                overflow-x:auto;
                section{
                    width:200%;
                    display:flex;
                    span{
                        display:inline-block;
                        line-height: .16rem;
                        margin-right: .1rem;
                        font-size: .1rem;
                        padding: 0 7px;
                        box-sizing:border-box;
                        color: #9c9c9c;
                        height: .16rem;
                        border-radius: 8px;
                        background-color: #f5f5f5;
                    }
                }
                
            }
            .price{
                font-size:.16rem;
                color:#f21c1c;
                em,span{
                    font-weight:900;
                }
                u{
                    border-radius: .08rem;
                    padding: .01rem .04rem .01rem;
                    box-sizing:border-box;
                    margin-right: 3px;
                    border: .01rem solid #f21c1c;
                    color: #f21c1c;
                    overflow: hidden;
                    font-size:.12rem;
                    margin-left:.05rem;
                }
            }
            .evaluate{
                font-size:.12rem;
                color:#9c9c9c;
                span{
                    margin-right:.08rem;
                }
            }
            .easyPrice{
                width:2.5rem;
                height: .35rem;
                display:flex;
                span{
                    width:.79rem;
                    height: .28rem;
                    box-sizing:border-box;
                    border: 1px solid #bfbfbf;
                    color: #666;
                    padding: 5px;
                    border-radius: 24px;
                    font-size:.12rem;
                    color:#666;
                    margin-right:.08rem;
                }
            }
        }
    }
`