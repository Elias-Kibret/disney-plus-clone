import React from 'react'
import styled from 'styled-components'
import login from "../images/login-background.jpg"
import ctaLogo from "../images/cta-logo-one.svg"
import ctaLogo2 from "../images/cta-logo-two.png"
function Login() {
    return (
        <Continer>
            <CTA>
                <img src={ctaLogo}/>
                <SignUp>
                  Get All There
                </SignUp>
                <Description>
                Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
                </Description>
                 <CTALogo>
                     <img src={ctaLogo2}/>
                 </CTALogo>
            </CTA>
        </Continer>
    )
}

export default Login
const Continer=styled.div`
display: flex;
align-items:center;
justify-content: center;
position: relative;
height:calc(100vh - 70px);
&:before{
    background-position: top;
    background-size: cover;
    background:url(${login}) center center /cover no-repeat fixed;
    content: "";
    position: absolute;
    opacity: 0.8;
    top:0;
    left:0;
    right: 0;
    bottom: 0;
    z-index:-1;
}
`
const CTA=styled.div`
width:60%;
display:flex;
flex-direction: column;

`
const SignUp=styled.a`
width:100%;
margin-top: 20px;
background-color: #0063e5;
padding: 17px 0px;
text-transform: uppercase;
text-align:center;
font-weight:bold;
border-radius: 5px;
font-size:20px;
cursor: pointer;
transition: all 250ms;
letter-spacing: 1.6px;
&:hover{
    background-color:#0483ee;
}
`
const Description=styled.p`
margin-top:20px;
font-size:11px;
letter-spacing: 1.5px;
text-align:center;
line-height: 1.5;
`
const CTALogo=styled.div`
width:70%;
margin:auto;
margin-top:30px;

img{
    width:100%;
    object-fit:contain;
}
`