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
            left: 1.6rem;
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
    .login{
        width:3.352rem;
        height:1.35rem;
        margin:.1rem .2rem;
        background:#fff
    }
  
    .login .username, .login .expire{
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
        span{
            font-size:.14rem;
            color: #6b6b6b;
        }
        .am-list-extra{
            flex-basis:100%;
        }
    }
    .deal{
        display: flex;
        align-items: center;
        margin-top:.2rem;
        margin:0 .2rem;
        .check{
           display:flex;
            justify-content:center;
            align-items:center;
            border: 1px solid #ccc;
            border-radius: 100%;
            position: relative;
            width:.18rem;
            height:.18rem;
            background: rgb(242, 28, 28);
            border-color: rgb(242, 28, 28);
            font-size:.18rem;
            color:#fff;
        }
        span:nth-of-type(2){
            font-size:.14rem;
            margin-left:.06rem
            a{
                color:#1890ff;
            }
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
        letter-spacing:.05rem;
        font-size:.14rem;
    }
    .color{
        background-color:#f21c1c
    }
`