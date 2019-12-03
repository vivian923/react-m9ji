import styled from "styled-components"

export const Section = styled.div`
    margin-top:.94rem;
    padding-bottom:.55rem;
    .lbpic{
        width:100%;
        height:1.875rem;
        text-align:center;
        img{
            width:100%;
            height:100%
        }
    }
    .floor{
        width:100%;
        border-bottom:1px solid #e8e8e8;
        .floorBox{
            width:3.55rem;
            height:.6rem;
            padding:.1rem;
            background:#fff;
            display:flex;
            .img{
                width:.8rem;
                height:.6rem;
                img{
                    width:100%;
                    height:100%
                }
            }
            .info{
                flex:1;
                background:#fff;
                margin-left:.1rem;
                display:flex;
                flex-direction:column;
                justify-content:space-between;
                p{
                    font-size:.145rem;
                    line-height: 1.2;
                    overflow : hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    color:#666;
                }
                div{
                    display:flex;
                    justify-content:space-between;
                    span{
                        font-size:.12rem;
                        color:#9c9c9c;
                    }
                }
            }
        }
        .big{
            width:100%;
            height:1.875rem;
            background:#ccc;
            overflow:hidden;
            position: relative;
            img{
                height:100%
            }
            .info{
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height:.4rem;
                background: rgba(0,0,0,.8);
                color: #fff;
                padding: 0 .1rem;
                box-sizing: border-box;
                display: flex;
                justify-content: space-between;
                align-items: center;
                span{
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    overflow: hidden;
                    -webkit-box-orient: vertical;
                    line-height: 1.2;
                    word-break: break-all;
                    -webkit-line-clamp: 1;
                    color: #fff;
                    font-size:.14rem;
                }
            }
        }
    }
`