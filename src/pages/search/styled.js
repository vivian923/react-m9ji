import styled from "styled-components"

export const Section = styled.section`
header{
        width:100%;
        height:.44rem;
        background:#fff;
        display:flex;
        justify-content:space-between;
        opacity:.95;
        background-color: rgba(255, 255, 255, 0.95);
        border-bottom:1px solid #f5f5f5;
        .back{
            width:.44rem;
            height:.44rem;
            font-size:.25rem;
            text-align:center;
            line-height:.44rem;
        }
        .searchbox{
            flex:1;
            justify-content: center;
            align-items: center;
            display: flex;
            form{
                width: 100%;
                border-radius:.16rem;
                height:.32rem;
                background-color: #f5f5f5;
                padding: 0 8px;
                display: flex;
                align-items: center;
                i{
                    font-size:.15rem;
                    color:#9c9c9c;
                    margin-right:.02rem
                }
                div{
                    display:flex;
                    width:100%;
                    height:100%;
                    input{
                        width: 100%;
                        flex: 1;
                        background: transparent;
                        box-sizing: border-box;
                        padding-right: 20px;
                    }
                }
            }
        }
        .searchbtn{
            width:.44rem;
            height:.44rem;
            text-align: center;
            line-height:.44rem;
            color: #333;
            font-size:.14rem;
        }
        
    }
    .hot{
        width:100%;
        height:1.564rem;
        .title{
            width:3.552rem;
            height:0.144rem;
            padding:.15rem .1rem 0;
            color: #000;
            font-weight: 500;
            font-size:.15rem;
            display:flex;
            justify-content:space-between;
            align-items:center;
            img{
                width:.13rem;
                height:.13rem
            }
        }
        .hotbrand{
            width:3.552rem;
            height:.92rem;
            padding:.15rem .1rem .2rem;
            display:flex;
            flex-wrap:wrap;
            align-content:flex-start
            div{
                height:.26rem;
                line-height:.26rem;
                border-radius:.13rem;
                background-color: #f5f5f5;
                margin:.09rem .09rem .09rem 0;
                padding: 0 .12rem;
                font-size:.11rem;
                min-width:.3rem;
                text-align: center;
                cursor: pointer;
            }
        }
    }
    .ranklist{
        width:3.552rem;
        height:.44rem;
        padding:0 .1em;
        margin:.1rem 0;
        a{
            display:flex;
            width:100%;
            height:100%;
            align-items:center;
            justify-content:space-between;
            .boxc{
                display:flex;
                height:.16rem;
                color: #000;
                font-weight: 500;
                padding-right: 8px;
                align-items:center;
            }
            i{
                font-size:.16rem;
            }
        }
    }
    .ranklist a .boxc{
        i{
            font-size:.16rem;
        }
        span{
                font-size:.14rem;
            }
        em{
            padding: 0 5px;
            display: inline-block;
            height:.16rem;
            line-height:.16rem;
            font-size:.12rem;
            border-radius:.13rem;
            border: 1px solid;
            margin-left:5px;
            color:#f21c1c;
        }
    }
    .guesslist{
        width:100%;
        min-height:4rem;
        background:#fff;
        position:absolute;
        z-index:2;
        a{
            height:.4rem;
            padding: 0 .1rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom:1px solid #f5f5f5;
            div{
                display:flex;
                i{
                    font-size:.16rem;
                    color:#333;
                }
                span{   
                        font-size:.129rem;
                        margin: 0 .1rem;
                        color:#333;
                        width:3.1rem;
                        text-overflow: ellipsis;
                        white-space:nowrap;
                        overflow:hidden;
                }
            }
            i{
                font-size:.16rem;
            }
        }
    }
`