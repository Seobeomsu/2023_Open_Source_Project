import React from 'react'
import styled, { css } from 'styled-components'

const Wrap = styled.div`
  ${(p) => p.stateStyle}
  background-color: var(--div-background-color , greenyellow);
  width: 300px;
  height: 250px;
  margin: 20px;
  flex-shrink: 0;
  margin: auto 20px auto 20px;
  border-radius: 30px;
  padding: 10px;
  font-weight: 700;
  font-size: 24px;
  color: var(--div-color , #252525);
`
const STATE = {
  verygood: css`
    --div-background-color: #4a58fa;
  `,
  good: css`
    --div-background-color: #78dd8f;
  `,
  notbad: css`
    --div-background-color: #ffe0a1;
  `,
  bad: css`
    --div-background-color: #ff7f8e;
  `,
  stayhome: css`
    --div-background-color: #252525;
    --div-color: #ffffff;
  `
}

const Date = styled.div`
  font-size: 40px;
`
const State = styled.div`
  position: relative;
  bottom : 40px;
  left: 145px;
  text-align: right;
  width: 150px;
  font-size: 32px;
`
const Cloud = styled.div`
 margin-top : 10px;
`
const LowT = styled.div`
  color: #0000ff8e;
  margin-top: 10px;
`
const HighT = styled.div`
  color: #ff000094;
  margin-top: 10px;
`


export default function WeatherBox({date,weather,hightempature,lowtempature,state}) {
  const stateStyle = STATE[state];

  return (
    <Wrap stateStyle = {stateStyle}>
      <Date>{date}</Date>
      <State>{state}</State>
      <Cloud>구름양: {weather}</Cloud>
      <HighT>최고기온 : {hightempature}</HighT>
      <LowT>최저기온 : {lowtempature}</LowT>
    </Wrap>
  )
}
