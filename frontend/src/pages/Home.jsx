import React from 'react'
import LeisureSelectbox from '../components/LeisureSelectbox'
import { useNavigate } from 'react-router-dom'
import Map from '../components/Map'
import styled from 'styled-components'
import useStore from '../components/HomeStore'

const Wrapper = styled.div`
  display : flex;
`

export default function Home() {
  const { activity, legioncode } = useStore()

  const Navigate = useNavigate();

  function GoodDayConvert(){
    console.log(activity,legioncode)
   //Navigate("/GoodDay")
  }

  return (
    <Wrapper>
      <Map/>
      <LeisureSelectbox></LeisureSelectbox>
      <button onClick={GoodDayConvert}>놀러가기 좋은날~</button>
    </Wrapper>
  )
}
