import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  width: 200px;
  height: 200px;
  background-color: greenyellow;
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
