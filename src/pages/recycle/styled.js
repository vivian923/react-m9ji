import styled from "styled-components"

export const Section =styled.section`
    width:100%;
    padding-bottom:.55rem;
    background:#f3f3f3;
    .bg{
        width:100%;
        height:2.065rem;
        background:linear-gradient(45deg,#FF2929,#CB0000);
    }
    
    .lbpic{
        margin-top:-.94rem;
        width:100%;
        height:1.875rem;
        text-align:center;
        padding:0.075rem .15rem;
        box-sizing:border-box;
        img{
            width:100%;
            height:100%
        }
    }
    .goods{
        width:100%;
        height:.75rem;
        background:#fff;
        display:flex;
        a{
            display:inline-block;
            width:.75rem;
            height:.75rem;
            img{
                width:100%;
                height:100%
            }
        }
    }
    .detection{
        width:3.47rem;
        height:1.16rem;
        padding:.14rem .14rem 0;
       .detebox{
        background:#fff;
        box-shadow: 0 2px 10px 0 rgba(0,0,0,.08);
        border-radius: 10px;
       }
        .title{
            width:3.27rem;
            height:.24rem;
            padding:.1rem .1rem 0;
            display:flex;
            font-weight:700;
            img{
                width:.24rem;
                height:.24rem;
                margin-right:.05rem
            }
            span{
                font-size:.136rem;
                line-height:.24rem
            }
        }
        .line{
            width: 100%;
            height: 1px;
            border-top: 1px solid #dfdfdf;
            margin: 10px auto;
            opacity: .2;
        }
        .phone{
            width:3.27rem;
            height:.5rem;
            padding:0 .1rem .1rem;
            background:#fff;
            display:flex
            img{
                margin-left:.05rem;
                height:.5rem;
                height:.5rem
            }
            .right{
                flex:1;
                background:#fff;
                display:flex;
                flex-direction:column;
                justify-content:space-between
                p{
                    font-size:.13rem;
                    span{
                        font-weight: 700;
                    }
                }
                .price{
                    height:.22rem;
                    display:flex;
                    justify-content:space-between
                    p{
                        font-size:.13rem;
                        
                        .rmb{
                            font-size: 13px;
                            color:#f21c1c;
                            span{
                                font-size:.16rem;
                                color:#f21c1c;
                            }
                        }
                    }
                    .btn{
                        width:.66rem;
                        height:.22rem;
                        box-sizing: border-box;
                        border-radius:.2rem;
                        line-height:.2rem;
                        text-align: center;
                        border: 1px solid #f21c1c;
                        font-size:.12rem;
                        color: #f21c1c;
                    }
                }
            }
        }
    }
    .data{
        width:100%;
        height:.62513rem;
        display:flex;
        margin-bottom:.1rem;
        a{
            display:inline-block;
            width:50%;
            height:100%
            img{
                width:100%;
                height:100%
            }
        }

    }
    .banner{
        width:100%;
        height:1.34988rem;
        display:flex;
        flex-wrap:wrap;
        background:#fff;
     img{
         height:100%;
         width:50%;
     }   
    }
    .brand{
        width:100%;
        height:.4399rem;
        font-size:.16rem;
        text-align:center;
        line-height:.4399rem;
        background:#fff
    }
    .phones{
        width:3.47rem;
        min-height:12.535rem;
        padding:0 .14rem .15rem;
        background:#e8e8e8;
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap;
        align-content:flex-start
        .stuff{
            width:1.6875rem;
            height:2.332rem;
            box-shadow: 0 2px 10px 0 rgba(0,0,0,.08);
            border-radius: 3px;
            margin-top:.075rem;
            padding-bottom:.1rem;
            display:flex;
            flex-direction:column;
            align-items:center ;
            background:#fff                                       
        }
    }
    .phones .stuff{
        img{
            width:1.5rem;
            height:1.5rem;
            margin:.1rem 0.09375rem;
        }
        .intro{
            flex:1;
            width:100%;
            p:nth-child(1){
                margin: .05rem .15rem;
                text-overflow: ellipsis;
                overflow: hidden;
                line-height: 1.2;
                font-size:.16rem;
                white-space:nowrap
            }
            p:nth-child(2){
                margin: .1rem 0 0 .15rem;
                color: #9c9c9c;
                font-size:.12rem;
            }
            p:nth-child(3){
                font-size:.15rem;
                color:#f21c1c;
                margin-left:.15rem
            }
        }
    }
    .line{
        height:.1rem;
    }
`