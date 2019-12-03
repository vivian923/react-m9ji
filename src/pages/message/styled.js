import styled from "styled-components";

export const Main = styled.div`
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
`
export const Header = styled.div`
    height:.44rem;
    display:flex;
    align-items:center;
    justify-content: center;
    position:relative;
    span{
        font-size:.16rem;
        color:#333;
        margin-right:.05rem;
    }
    img{
        width:.18rem;
        height:.18rem;
    }
    a{
        width:.4rem;
        height:.44rem;
        text-align:center;
        line-height:.44rem;
        font-size:.12rem;
        color:#333;
        position:absolute;
        right:0;
    }
`
export const Content = styled.div`
    flex:1;
    .nav{
        height:.94rem;
        display:flex;
        align-items:center;
        justify-content: space-around;
        div{
            width:.6rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            img{
                width:.5rem;
                height:.5rem;
                opacity:.6
            }
            p{
                font-size:.13rem;
                color:#333;
                margin:.05rem 0;
            }
        }
        .active{
            border-bottom:2px solid #f21c1c;
            img{
                width:.55rem;
                height:.55rem;
                opacity:1
            }
            p{
                font-size:.15rem;
                color:#F21C1C;
                font-weight:900
            }
        }
    }
    .showCon{
        height:4.73rem;
        display: flex;
        align-items: center;
        justify-content: center;
        .empty{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            display:none;
            img{
                width:.6rem;
                height:.6rem;
            }
            p{
                margin-top:.05rem;
                font-size:.14rem;
                color:#9c9c9c;
            }
        }
        .activicity{
            width:100%;
            height:100%;
            overflow-y: auto;
            .activicity_con{
                width:3.45rem;
                min-height:2.685rem;
                margin:.56rem .15rem .15rem;
                position: relative;
                box-shadow: 0 1px 10px 0 rgba(0,0,0,.1);
                .time{
                    position:absolute;
                    top: -.3rem;
                    left: 50%;
                    transform: translate(-50%);
                    border-radius: .11rem;
                    background-color: #dfdfdf;
                    padding: 0 .08rem;
                    height: .18rem;
                    line-height: .18rem;
                    font-size: .1rem;
                    color: #fff;
                }
                img{
                    width: 100%;
                    border-radius: 4px 4px 0 0;
                }
                .block{
                    width:3.45rem;
                    min-height:1.125rem;
                    box-sizing:border-box;
                    padding:.15rem .1rem;
                    background:#fff;
                    h1{
                        font-size:.15rem;
                        color:#333;
                        font-weight:900;
                    }
                    .msg_con{
                        min-height: .305rem;
                        font-size:.14rem;
                        color:#9c9c9c;
                        box-sizing:border-box;
                        padding-bottom:.1rem;
                        margin:.1rem 0 .15rem;
                        border-bottom: .5px dashed #bfbfbf;
                        line-height: 20px;
                    }
                    .detail{
                        display:flex;
                        align-items:center;
                        justify-content:space-between;
                        em{
                            font-size:.12rem;
                            color:#333;
                        }
                        i{
                            font-size:.12rem;
                        }
                    }
                }
            }
        }
    }
`