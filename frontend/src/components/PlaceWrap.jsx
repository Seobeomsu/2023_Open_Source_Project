import React from 'react'
import styled from 'styled-components';
import PlaceBox from './PlaceBox';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Wrap = styled.div`
  padding-top: 25px;
  display: block;
  height: 550px;
  width: 1440px;
  flex-shrink: 0;
  overflow: auto;
  white-space: nowrap;
  flex-shrink: 0;
  .slick-slider{
    display: flex;
    width: auto;
    overflow: visible;
  }
  .slick-list{ //얘로 크기조정 했음
    display: block;
    left: -350px;
    width: 700px;
    height: 350px;
    margin: 0 auto;
    overflow: visible;
  }
  .slick-arrow{
    font-size: 40px
  }
  .slick-prev, .slick-next{ //얘는 양옆 버튼. 커스텀 해줘야 보임
    z-index: -1000;
    	font-family: 'slick';
        font-size: 40px;
        line-height: 1;
        opacity: .75;
        color: #000000;
        -webkit-font-smoothing: antialiased;
    }
`

export default function PlaceWrap() {
  const PlaceData = JSON.parse(localStorage.getItem('PlaceData')); // 데이터 로드

  const settings = {
    dots: false,
    Infinity: true,
    speed: 300,
    slidesToshow : 1,
    slidesToScroll: 1,
    Arrow : true
  };

  return (
    <Wrap>
      <Slider {...settings} >
    {PlaceData.map((item)=>(
      <PlaceBox
      key = {item.name}
      name = {item.name}
      address = {item.address}
      context={item.context}
      imgaddress={item.imageaddress}
      />
    ))}
    </Slider>
  </Wrap>
  )
}