import styled from "styled-components"

export const TabBox = styled.div`
    width:100%;
    height:0.55rem;
    background:#fff;
    position:fixed;
    left:0;
    bottom:0;
    ul{
        width:100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    ul li{
        width:100%;
        height: 100%;
        .active i, .active span{
            color:#c33
        }
    }
    ul li a{
        display:block;
        width:100%;
        height: 100%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items: center;
        position:relative;
    }
    ul li a i{
        font-size:.24rem;
        color: #333;
    }
    ul li a span{
        font-size:.1rem;
        color: #333;
        font-weight:bold;
        margin-top:0.03rem;
    }
    ul li a .bubble{
        position: absolute;
        left:0.45rem;
        top:-.01rem;
        padding: 0 .04rem;
        border-radius:14px;
        background: #f21c1c;
        color: #fff;
        font-size:.12rem;
        height:.16rem;
        line-height:.145rem;
        min-width:.16rem;
        box-sizing: border-box;
        border: 1px solid #fff;
        text-align: center;
    }
`
