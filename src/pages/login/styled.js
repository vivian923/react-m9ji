import styled from "styled-components"

export const Section = styled.section`
    height:100%;
    background:#fff;
    header{
        width:100%;
        height:.44rem;
        background:#fff;
        display:flex;
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
        span{
            font-size:.17rem;
            position:absolute;
            left: 1.7rem;
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

    .checkoutLogin{
        width:3.552rem;
        height:0.136rem;
        margin:.3rem .1rem;
        background:#fff;
        display:flex;
        justify-content:center;
        align-items:center;
        div:nth-child(1){
            color: #9c9c9c;
            font-size:.136rem;
        }
        div:nth-child(2){
            margin: 0 .2rem;
            font-size:.13rem;
        }
        div:nth-child(3){
            font-weight:700;
            font-size:.136rem;
        }
    }

    .login{
        width:3.352rem;
        height:1.35rem;
        margin:.1rem .2rem;
        background:#fff
    }
    .login .expire{
        justify-content:space-between
    }
    .login .username, .login .pwd, .login .expire{
        width:100%;
        height:.44rem;
        border-bottom:1px solid #f5f5f5;
        display:flex;
        align-items:center;
        position:relative;
        .icons{
            width:.2rem;
            height:.2rem;
            margin-right:.1rem;
            text-align: center;
            display:flex;
            i{
                font-size:.2rem;
            }
        }
        input{
            flex-grow:1;
            height:100%;
        }
        a{
            font-size:.19rem;
            position:absolute;
            right:.05rem;
            color:#ccc;
            display:none
        }
        span{
            font-size:.14rem;
            color: #6b6b6b;
        }
        .am-list-extra{
            flex-basis:100%;
        }
    }
    .loginbtn{
        display:flex;
        justify-content: center;
        align-items: center;
        height:.45rem;
        margin:.2rem;
        margin-top:.4rem;
        border-radius:.45rem;
        background-color:#dfdfdf;
        color:#fff;
        letter-spacing:.05rem
    }
    .color{
        background-color:#f21c1c
    }
    .pushRegister{
        margin:.2rem;
        display: flex;
        justify-content: space-between;
        .register, a{
            font-size:.14rem;
            color:#666
        }
    }
    .third{
        margin-top:.7rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        span{
            color: #9c9c9c;
            font-size:.14rem;
        }
        div{
            width:.34rem;
            height:.344rem;
            margin:.15rem;
            a{
                width:100%;
                height:100%;
            }
            img{
                width:100%;
                height:100%;
            }
        }

    }
`