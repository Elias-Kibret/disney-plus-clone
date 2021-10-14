import React from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'
import Viewers from './Viewers'
import Movies from './Movies'
import bg from "../images/home-background.png"
function Home() {
    return (
        <Container>
        <ImageSlider/>
        <Wrapper>
        
        <Viewers/>
        </Wrapper>
        <Movies/>
        </Container>
    )
}

export default Home
const Container=styled.main`
min-height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position: relative;
overflow-x: hidden;

&:before{
    background:url(${bg}) center center /cover no-repeat fixed;
    content: "";
    position: absolute;
    top:0;
    left:0;
    right: 0;
    bottom: 0;
    z-index:-1;
    
    
    
}

`
const Wrapper=styled.div`

z-index:3;
`