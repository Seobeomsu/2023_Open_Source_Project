import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  background-color: greenyellow;
  width: 300px;
  height: 250px;
  margin: 20px;
  flex-shrink: 0;
  margin: auto 20px auto 20px;
  border-radius: 30px;
  padding: 10px;

`

export default function WeatherBox({date,weather,hightempature,lowtempature,state}) {
  return (
    <Wrap>
      {date}
      {weather}
      {hightempature}
      {lowtempature}
      {state}
    </Wrap>
  )
}
