import styled, { keyframes } from "styled-components";


const loading=keyframes`
  0 % { transform: translate(-.09rem, -.25rem) rotate(0deg); }
  100 % { transform: translate(-.09rem, -.25rem) rotate(360deg); }
`

export const LoadingCon = styled.div`
  width: 1rem;
  height: 1.01rem;
  border: 8px solid;
  border-top-color: hsl(154,100%,31%);
  border-left-color: hsl(216,87%,52%);
  border-bottom-color: hsl(8,66%,50%);
  border-right-color: hsl(42,100%,51%);
  border-radius: 50%;
  transform: rotate(45deg);
  margin: .3rem auto;
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  margin:auto;
  p {
  display: inline-block;
  width: 1.07rem;
  height: 1.07rem;
  background: linear-gradient(90deg, hsla(212,67%,36%,0) 0%,
                              hsla(207,69%,51%,0) 76%,
                              hsla(0,0%,100%,1) 85%,
                              hsla(0,0%,100%,1) 100%);
  -moz-background-origin: border;
  background-origin: border-box;
  border: 6px solid transparent;
  border-radius: 50%;
  box-shadow: inset -999px 0 0 #fff;
  transform: translate(-8px, .55rem);
  animation: ${loading} 1s linear infinite;
}
`