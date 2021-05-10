import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src= "/images/cta-logo-one.svg" />
                <SignUp>GET ALL DONE</SignUp>
                <Description>
                    Get Premier Acess to Raya and the last Dragon for an additional fee with disney + subscription
                    As of 5/10/2021,the price of Disney + and the Disney bundle will increase by 2$.
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.svg" />

            </CTA>
        </Container>
    )
}

export default Login


const Container = styled.div`
     position: relative;
     height: calc(100vh-10px);
     display: flex;
     align-items: top;
     justify-content: center;
     margin-top: 200px;

     &:before{
         background-position: top;
         background-size: cover;
         background-repeat: no-repeatl
        background-image: url("images/images/login-background.png");
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        buttom: 0;
        opacity: 0.7;
        z-index: -1;


     }
`
const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
   


`
const CTALogoOne = styled.img`


`
const SignUp = styled.a`
     width: 100%;
     background-color: #0063e5;
     font-weight: bold;
     padding: 17px 0;
     color: #f9f9f9;
     border-radius: 4px;
     text-align: center;
     font-size: 18px;
     cursor: pointer;
     transition: all 250ms;
     letter-spacing: 1.5px;
     margin-top: 8px;
     margin-bottom: 12px;

     &:hover{
         background: #0483ee;
     }
`
const Description = styled.p`
     font-size: 11px;
     letter-spacing: 1.5px;
     text-align: center;
     line-height: 1.5;
`

const CTALogoTwo = styled.div`
width: 90%;


`