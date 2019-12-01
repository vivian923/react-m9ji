import styled from "styled-components"

export const Section = styled.section`
    width:100%;
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
    .goodsflow{
        width:100%;
        min-height:20.7rem;
        background:#fff;
        .good_items{
            width:3.47rem;
            height:.85rem;
            padding:.15rem .14rem;
            background:#fff;
            display:flex
        }
    }
    .goodsflow .good_items{
        img{
            width:.85rem;
            height:.85rem;
        }
        .lintro{
            flex:1;
            background:fff;
            margin-left:.1rem;
            .name{
                font-size:.14rem;
                width:2.52rem;
                font-weight:700;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space:nowrap;
                
                .newman{
                    border-radius: 8px;
                    padding: 1.5px 4px 1px;
                    margin-right: 3px;
                    border: 1px solid #f21c1c;
                    color: #f21c1c;
                    font-size:.1rem;
                }
            }
            .material{
                line-height: 1;
                font-size:.12rem;
                margin-top:.05rem;
            }
            .bintro{
                height:.356rem;
                display:flex;
                justify-content:space-between;
                margin-top:.08rem;
            }
        }
        .lintro .bintro{
            .lefttips{
                min-width:0.77rem;
                height:.356rem;
                p:nth-child(1){
                    height:.16rem;
                    
                    display:flex;
                    align-items:center
                    span:nth-child(1){
                        display:flex;
                        em:nth-child(1){
                            font-size:.1rem;
                            color:#f21c1c;
                            display:flex;
                            padding-top:.06rem;
                            box-sizing:border-box
                            
                        }
                        em:nth-child(2){
                            font-size:.16rem;
                            color:#f21c1c;
                            font-weight: 500;
                            display:flex;
                            align-items:flex-end
                        }
                    }
                    span:nth-child(2){
                        font-size:.12rem;
                        color:#9c9c9c
                    }
                }
                p:nth-child(2){
                    font-size:.1rem;
                    margin-top:.08rem;
                }
            }
            .tbtn{
                width:.75rem;
                height:.32rem;
                border-radius:.16rem;
                text-align: center;
                line-height:.3rem;    
                color: #fff;
                background:#f21c1c;
                font-size:.14rem;
            }
        }
    }
`