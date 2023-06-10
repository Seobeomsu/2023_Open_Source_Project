import React from 'react'
import WeatherBox from '../components/WeatherBox'
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Wrap = styled.div`
  display: block;
  height: 350px;
  width: 1440px;
  flex-shrink: 0;
  overflow: auto;
  white-space: nowrap;
  .slick-slider{
    display: flex;
    width: auto;
    overflow: visible;
  }
  .slick-list{ //얘로 크기조정 했음
    display: block;
    left: -500px;
    width: 350px;
    height: 350px;
    margin: 0 auto;
    overflow: visible;
  }
  .slick-slide{
    //width: 350px !important;
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

const weatherdata = [ // 총 10개
  { date : "5.31", weather : "good", hightempature : "45", lowtempature : "-45" , state : "verygood"},
  { date : "6.1", weather : "good", hightempature : "45", lowtempature : "-45" , state : "good"},
  { date : "6.2", weather : "good", hightempature : "45", lowtempature : "-45" , state : "notbad"},
  { date : "6.3", weather : "good", hightempature : "45", lowtempature : "-45" , state : "bad"},
  { date : "6.4", weather : "good", hightempature : "45", lowtempature : "-45" , state : "stayhome"},
  { date : "6.5", weather : "good", hightempature : "45", lowtempature : "-45" , state : "good"},
  { date : "6.6", weather : "good", hightempature : "45", lowtempature : "-45" , state : "good"},
  { date : "6.7", weather : "good", hightempature : "45", lowtempature : "-45" , state : "good"},
  { date : "6.8", weather : "good", hightempature : "45", lowtempature : "-45" , state : "good"},
  { date : "6.9", weather : "good", hightempature : "45", lowtempature : "-45" , state : "good"},
]

export default function WeatherWrap() {
  // const WeatherData = JSON.parse(localStorage.getItem('WeatherData')); // 데이터 로드

  const settings = {
    dots: false,
    Infinity: true,
    speed: 300,
    slidesToshow : 4,
    slidesToScroll: 1,
    Arrow : true
  };
  return (
    <Wrap>
      <Slider {...settings} >
        {weatherdata.map((item)=>(
          <WeatherBox
          key={item.date}
          date={item.date}
          weather={item.weather}
          hightempature = {item.hightempature}
          lowtempature = {item.lowtempature}
          state = {item.state}
        />
      ))}
      </Slider>
    </Wrap>
  )
}