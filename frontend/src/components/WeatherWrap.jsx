import React from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import WeatherBox from '../components/WeatherBox'
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  height: 350px;
  flex-shrink: 0;
  overflow: auto;
  white-space: nowrap;
`

const weatherdata = [ // 총 10개
  { date : "5.31", weather : "good", hightempature : "45", lowtempature : "-45" , state : "bad"},
  { date : "6.1", weather : "good", hightempature : "45", lowtempature : "-45" , state : "good"},
  { date : "6.2", weather : "good", hightempature : "45", lowtempature : "-45" , state : "verygood"},
  { date : "6.3", weather : "good", hightempature : "45", lowtempature : "-45" , state : "good"},
  { date : "6.4", weather : "good", hightempature : "45", lowtempature : "-45" , state : "good"},
  { date : "6.5", weather : "good", hightempature : "45", lowtempature : "-45" , state : "good"},
  { date : "6.6", weather : "good", hightempature : "45", lowtempature : "-45" , state : "good"},
  { date : "6.7", weather : "good", hightempature : "45", lowtempature : "-45" , state : "good"},
  { date : "6.8", weather : "good", hightempature : "45", lowtempature : "-45" , state : "good"},
  { date : "6.9", weather : "good", hightempature : "45", lowtempature : "-45" , state : "good"},
]

export default function WeatherWrap() {
  // const WeatherData = JSON.parse(localStorage.getItem('WeatherData')); // 데이터 로드
  return (
    <Wrap>
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
    </Wrap>
  )
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      Left
    </Arrow>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
      Right
    </Arrow>
  );
}

function Card({ onClick, selected, title, itemId }) {
  const visibility = React.useContext(VisibilityContext);

  return (
    <div
      onClick={() => onClick(visibility)}
      style={{
        width: '160px',
      }}
      tabIndex={0}
    >
      <div className="card">
        <div>{title}</div>
        <div>visible: {JSON.stringify(!!visibility.isItemVisible(itemId))}</div>
        <div>selected: {JSON.stringify(!!selected)}</div>
      </div>
      <div
        style={{
          height: '200px',
        }}
      />
    </div>
  );
}