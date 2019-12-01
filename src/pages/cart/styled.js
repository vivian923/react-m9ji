import styled from "styled-components"

export const Section=styled.section`
    height:100%;
    background:#fff;
    overflow-y: auto;
    padding-top:.44rem;
    header{
        width:100%;
        height:.44rem;
        background:#fff;
        display:flex;
        position:fixed;
        top:0;
        opacity:.95;
        .back{
            width:.44rem;
            height:.44rem;
            font-size:.25rem;
            text-align:center;
            line-height:.44rem;
        }
        span{
            font-size:.16rem;
            position:absolute;
            left: 1.55rem;
            top: .1rem;
        }
        .management{
            width:.66rem;
            height:.44rem;
            background:#fff;
            position:absolute;
            right:0;
            display:flex;
            justify-content:center;
            align-items:center
            a{
                margin-right: .1rem;
                font-size: .13rem;
            }
            i{
                font-size:.2rem
            }
        }
    }

    .cart{
        width:100%;
        min-height:1.18rem;
        background:#fff;
        .cartBox{
            width:3.472rem;
            height:1.18rem;
            margin:.07rem .14rem .14rem;
            border-radius: .1rem;
            box-shadow: 0 2px 10px 0 rgba(0,0,0,.08);
            background-color: #fff;
            display:flex;
            align-items:center;
            box-sizing:border-box;
            padding:0 .12rem;
        }
    }


    .cart .cartBox{
        .select{
            width:.16rem;
            height:.16rem;
            margin-right:.1rem;
        }

        .cartContainer{
            width:2.923rem;
            height:100%;
            background:#fff;
            padding-top:.14rem;
            box-sizing:border-box;
            display:flex
            img{
                width:.9rem;
                height:.9rem
            }
        }

        .cartContainer .info{
            width:1.932rem;
            height:.9rem;
            margin-left:.1rem;
            background:#fff
            p{
                color: #000;
                font-size:.12rem;
            }
            .config{
                display:flex;
                background: #f5f5f5;
                border-radius:.09rem;
                padding: 1px 6px 1px 8px;
                margin-top:.05rem;
                margin-bottom:.1rem;
                span{
                    font-size:.1rem;
                    color: #555;
                }
                span:nth-child(2){
                    margin-left:.04rem;
                    i{
                        font-size:.1rem;
                    }
                }
            }
        }

        .cartContainer .info .price{
            height:.18rem;
            display:flex;
            justify-content:space-between
            p{
                em{
                    color:rgb(242,28,28)
                }
                em:nth-child(1){
                    font-size:.11rem;
                }
                em:nth-child(2){
                    font-size:.17rem;
                    font-weight:500
                }
            }
            
            .numbtn{
                width:.56rem;
                height:.18rem;
                display:flex;
                input{
                    font-size:.12rem
                    height:.16rem;;
                    line-height: .16rem;
                    text-align: center;
                    width:.2rem;
                    border-top: 1px solid #f5f5f5;
                    border-bottom: 1px solid #f5f5f5;
                }
                a{
                    color: #ccc;
                    font-size: .12rem;
                    width:.16rem;
                    height:.16rem;
                    text-align: center;
                    line-height:.16rem;
                    background-color: #f5f5f5;
                    border: 1px solid #f5f5f5;
                }
                a:nth-of-type(1){
                    border-radius: 12px 0 0 12px;
                }
                a:nth-of-type(2){
                    border-radius: 0 12px 12px 0;
                }
            }
        }
    }
    .recommend{
        width:3.532rem;
        min-height:19.092rem;
        padding:0 .11rem;
        .banner{
            height:.4074rem;
            img{
                width:100%;
                height:100%
            }
        }
    }
    .recommend ul{
        width:3.532rem;
        min-height:18.624rem;
        padding:.03rem 0 .5rem;
        display:flex;
        flex-wrap:wrap;
        align-content:flex-start;
        
        li{
            width:1.706rem;
            height:2.268rem;
            padding:0.03rem;
        }
        li .rinfo{
            width:1.506rem;
            height:2.168rem;
            padding:0 .1rem .1rem;
            border-radius: 4px;
            box-shadow: 0 2px 10px 0 rgba(0,0,0,.08);
            background-color: #fff;
            img{
                width:1.506rem;
                height:1.506rem;
            }
            p{
                margin-top: 5px;
                font-size:.14rem;
                text-overflow:ellipsis;
                overflow:hidden
            }
            .price{
                display:flex;
                margin-top:.1rem;
                justify-content:space-between;
                span{
                    font-size:.16rem;
                    color:rgb(242,28,28)
                }
                i{
                    font-size:.15rem;
                }
            }
        }
    }
    footer{
        position:fixed;
        left:0;
        bottom:0;
        width:100%;
        height:.5rem;
        display:flex;
        align-items:center;
        background: #fff;
        box-shadow: 0 0 10px 0 rgba(0,0,0,.08);
        .settlement{
            width:3.472rem;
            height:.35rem;
            padding:0 .14rem;
           
            display:flex;
            align-items:center;
        }
    }
    footer .settlement{
        .allbtn{
            display:flex;
            width:.51rem;
            height:.18rem;
            margin-left:.1rem;
        }

        .allbtn label{
            font-size:.14rem;
            margin-left:.05rem;
        }
        .allbtn input{
            width:.18rem;
            height:.18rem;
        }
        .txt{
            flex:1;
            height:.136rem;
            margin-right:.1rem;
            p{
                text-align:right;
                font-size:.136rem;
                color: #333;
                span{
                    color:#f21c1c;
                    font-size:.13rem;
                }
            }
        }
        button{
            width:.9rem;
            height:.35rem;
            margin-left:.1rem;
            background: #f21c1c;
            box-shadow: 0 2px 10px 0 rgba(242,28,28,.2);
            border-radius:18px;
            line-height:.35rem;
            text-align: center;
            font-size:.14rem;
            color:#fff
        }
    }

`