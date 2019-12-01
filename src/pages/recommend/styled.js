import styled from "styled-components"

export const Section = styled.div`
    padding-bottom:.55rem;
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
    .tips{
        width:100%;
        height:.24rem;
        background:#fff;
        img{
            width:100%;
            height:100%
        }
    }

    .floor-picture{
        height:.75rem;
        display:flex;
        a{
            display:inline-block;
            width:.75rem;
            height:.75rem
            img{
                width:100%;
                height:100%
            }
        }
    }

    .news{
        height:.6251rem;
        display:flex;
    }

    .news a, .banner a, .gift a{
        width:50%;
        height:100%;
    }
    .news a img, .banner a img, .gift a img{
        width:100%;
        height:100%
    }

    .banner, .gift{
        width:100%;
        height:1.2499rem;
        display:flex;
    }

    .message{
        height:.34rem;
        .messbox{
            width:3.45rem;
            height:.34rem;
            margin:.15rem;
            background: #fde9e9;
            border-radius: 50px;
            display:flex;
            align-items:center;

            .title{
                width:.68rem;
                height:.1541rem;
                margin:0 .12rem;
            }

            a{
                width:1.85rem;
                height:.168rem;
                display:flex;
                span{
                    width:100%;
                    font-size:.12rem;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow:hidden;
                }
            }
            .fpic{
                width:.68rem;
                height:.34rem;
            }
        }
    }

    .floor-optimize{
        height:1.922rem;
        overflow-x:auto;
        padding:.15rem;
        display:flex;
        div{
            width:1.2rem;
            height:1.722rem;
            padding:.1rem;
            margin-right:.1rem;
            box-shadow: 0 0 10px #e1e1e1;
            border-radius: 3px;
            flex-shrink:0;
        }
        p{
            margin-top:.03rem;
        }
        .all{
            font-size:.16rem;
            text-align:center;
            line-height:1.722rem;;
        }
    }

    .floor-optimize div{
        img{
            width:1.2rem;
            height:1.2rem;
        }
        .ptitle{
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            font-size:.12rem;
            color:#333
        }
        .pintro{
            font-size:.11rem;
            color: #9c9c9c;
        }
        .pprice{
            color:rgb(242,28,28);
            font-size:.12rem;
        }
    }

    .find{
        width:100%;
        height:0.4399rem;
        img{
            width:100%;
            height:100%;
        }
    }

    .goods{
        width:3.47rem;
        min-height:7.617rem;
        display:flex;
        padding:0 .14rem .15rem;
        justify-content:space-between;
        flex-wrap: wrap;
        align-content: flex-start;
        div{
            width:1.6875rem;
            height:2.364rem;
            margin-top:0.075rem;
            padding-bottom:.1rem;
            background:#fff;
            box-shadow: 0 2px 10px 0 rgba(0,0,0,.08);
            border-radius: 3px;
        }
    }
    .goods div{
        img{
            width:1.5rem;
            height:1.5rem;
            margin:.1rem 0.09375rem;
        }
        .introbg{
            width:1.3875rem;
            height:0.152rem;
            padding:.05rem .15rem;
            background: #ebf6fe;
            color: #87acd8;
            display:flex;
            span{
                font-size:.12rem;
            }
        }
        .detail{
            height:0.412rem;
        }
    }
    .goods div .detail{
        .pname{
            margin:.05rem .15rem;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            font-size:.14rem;
            color: #333;
        }
        .ppprice{
            margin: .05rem .15rem 0;
            font-size:.14rem;
            color:red;
        }
    }

    .nomore{
        margin-top:.1rem;
        font-size:.12rem;
        text-align:center;
    }
    .gotop{
        position:fixed;
        right:.16rem;
        bottom:.6rem;
        display:block;
        width:.44rem;
        height:.44rem;
        img{
            width:100%;
            height:100%
        }
    }

`