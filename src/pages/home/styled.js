import styled from "styled-components"
export const Header =styled.header`
        position:fixed;
        top:0;
        width:100%;
        height:.94rem;
        background:linear-gradient(45deg,#FF2929,#CB0000);
        transition: all .2s ease;
        z-index: 1;
        .searchbox{
            width:100%;
            height:.44rem;
        }

        .search{
        width:3.17rem;
        height:0.34rem;
        padding:0 .15rem;
        margin:.14rem;
        background:#fff;
        border-radius: .3rem;
        display:flex;
        align-items:center;
        .city{
            display:flex;
            justify-content:center;
            align-items:center;
            font-size:.13rem;
            padding-right:.1rem;
        }
        .line{
            height:.14rem;
            width:.02rem;
            background: #dfdfdf;
            opacity: .6;
        }
        .searchbtn{
            flex-grow:1;
            height:.34rem;
            padding: 0 10px;
            display:flex;
            align-items:center;
            font-size:.13rem;
            color: #9c9c9c;
        }
    }
        .slider{
        width:100%;
        height:.4rem;
        overflow-x:auto;
        display:flex;
        margin-top:-.05rem;
        .active{
            font-size:.16rem;
            opacity:1
        }
        li{
            font-size:.15rem;
            margin:0 11px;
            white-space: nowrap;
            line-height:.4rem;
            color: #fff;
            opacity: .8;
        }
    }

   

    
`