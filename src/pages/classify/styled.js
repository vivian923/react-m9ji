import styled from "styled-components";

export const Main = styled.div`
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    overflow-y:auto;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom:.55rem;
`
export const Header = styled.div`
    height:.44rem;
    display:flex;
    align-items: center;
    justify-content: space-between;
    border-bottom:.01rem solid #f5f5f5;
    .goBack,.more{
        width:.44rem;
        height:.44rem;
        display:flex;
        align-items: center;
        justify-content: center;
        i{
            font-size:.23rem;
        }
    }

    .finds{
        width:2.87rem;
        height:.3rem;
        background:#F5F5F5;
        padding: 0 .1rem;
        border-radius: .15rem;
        display: flex;
        align-items: center;
        box-sizing:border-box;
        i{
            font-size:.16rem;
            color:#9c9c9c;
            margin-right:.03rem;
        }
        span{
            font-size:.14rem;
            color:#9c9c9c;
        }
    }
`
export const Connect = styled.div`
    flex: 1;
    .con{
        width:100%;
        min-height:100%;

        .left{
            position: sticky;
            top: 0;
            left:0;
            float:left;
            height: 100%;
            overflow-y:auto;
            background:#f5f5f5;
            .active{
                background:#fff;
                color:red;
                i{
                    background:red;
                }
            }
            span{
                display:block;
                width:.94rem;
                height:.44rem;
                padding:0 .08rem;
                font-size:.14rem;
                color:#333;
                box-sizing:border-box;
                display:flex;
                align-items:center;
                justify-content:space-between;
                i{
                    width:.03rem;
                    height: .14rem;
                    margin-left:-.08rem;
                }
                em{
                    margin-right:.1rem;
                }
            }
        }

        .isnone{
            display:none;
        }
        
        .right{
            width:2.81rem;
            min-height:9.6rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            float:right;
            padding-top:.1rem;
            box-sizing:border-box;
            .rightImg{
                width:2.6285rem;
                height:.875rem;
                margin-bottom:.1rem;
                img{
                    width:100%;
                    height:100%;
                }
            }
            .product{
                width:2.625rem;
                min-height:1.38rem;
                background:white;
                box-shadow: 0 0 .05rem #ccc;
                border-radius:.05rem;
                margin-bottom:.1rem;
                overflow:hidden;
                .title{
                    width:2.625rem;
                    height:.3rem;
                    padding:0 .1rem;
                    display:flex;
                    align-items:center;
                    box-sizing:border-box;
                    span{
                        font-size:.14rem;
                        color:#333;
                    }
                }
                .product_mo{
                    width:2.625rem;
                    min-height:1.08rem;
                    display:flex;
                    flex-wrap: wrap;
                    div{
                        width:.86rem;
                        height:1.08rem;
                        display:flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        img{
                            width:.693rem;
                            height:.693rem;
                            margin-bottom:.05rem;
                        }
                        p{
                            font-size:.12rem;
                            color:#333;
                        }
                    }
                }
            }
        }
    }
`