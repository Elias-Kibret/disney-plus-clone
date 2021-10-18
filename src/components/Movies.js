import React from 'react'
import styled from 'styled-components'
function Movies() {
    return (
        <Container>
            <h4>Recommended for You</h4>
            <Content>

            <Wrap>
              <img src="https://lumiere-a.akamaihd.net/v1/images/cg_shopdisney_foodeating_mobile_21986_ac397321.jpeg"/>
            </Wrap>
            <Wrap>
              <img src="https://lumiere-a.akamaihd.net/v1/images/cg_shopdisney_foodeating_mobile_21986_ac397321.jpeg"/>
            </Wrap>
            <Wrap>
              <img src="https://lumiere-a.akamaihd.net/v1/images/cg_shopdisney_foodeating_mobile_21986_ac397321.jpeg"/>
            </Wrap>
            <Wrap>
              <img src="https://lumiere-a.akamaihd.net/v1/images/cg_shopdisney_foodeating_mobile_21986_ac397321.jpeg"/>
            </Wrap>
            </Content>



            
        </Container>
    )
}

export default Movies
const Container=styled.div`

`
const Content=styled.div`
margin:20px 0px 200px 0px;
display: grid;
grid-template-columns: repeat(4, minmax(0, 1fr));
justify-items: center;
align-items: center;
gap:20px;
`
const Wrap=styled.div`

img{
  transition: all 250ms cubic-bezier(0.25, 0.45, 0.45, 0.94) 0s;
  width:100%;
  height: 100%;
  object-fit:fill;
  border-radius: 20px;
  border:3px solid rgba(249,249,249, 0.1);
  box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px , rgba(0 0 0 / 73%) 0px 16px 10px -10px;
  &:hover{
      box-shadow:rgb(0 0 0 / 80%) 0px 40px 58px -16px , rgba(0 0 0 / 73%) 0px 30px 22px -10px;
      transform: scaleX(1.05);
      border-color: rgba(249,249,249,0.8);
  }
}

`