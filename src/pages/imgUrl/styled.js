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
            left: 1.5rem;
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
    .loginbtn{
        display:flex;
        justify-content: center;
        align-items: center;
        height:.45rem;
        margin:.2rem;
        margin-top:.4rem;
        border-radius:.45rem;
        background-color:#f21c1c;
        color:#fff;
        letter-spacing:.05rem
    }
`