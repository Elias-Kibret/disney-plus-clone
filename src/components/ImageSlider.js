import React from 'react'

import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderBadag from "../images/slider-badag.jpg"
import sliderBadging from "../images/slider-badging.jpg"
import sliderScale from "../images/slider-scale.jpg"
import sliderScaling from "../images/slider-scales.jpg"

function ImageSlider(){
let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplayspeed:1000
  };

    return (
        <Carsousel {...settings}>
            <Wrap>
              <img src={sliderBadag}/>
            </Wrap>
            <Wrap>
              <img src={sliderBadging}/>
            </Wrap>
            <Wrap>
              <img src={sliderScale}/>
            </Wrap>
            <Wrap>
              <img src={sliderScaling}/>
            </Wrap>
              
            
        </Carsousel>
    )
}

export default ImageSlider
const Carsousel=styled(Slider)`
margin-top: 20px;
z-index:2;
ul li button{
    &:before{
        font-size: 10px;
        color:white;
    }
}
li.slick-active button:before{
    color:white;
}
.slick-list{
    overflow: visible;
}
button{
    z-index:1;
}
`

const Wrap=styled.div`

img{
    border:4px  solid transparent;
    border-radius: 4px;
    width:100%;
    height: 100%;
    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px , rgba(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration: 300ms;
    &:hover{
        border:4px solid rgba(249,249,249,0.8);
    }
}
`