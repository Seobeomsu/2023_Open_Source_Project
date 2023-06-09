import React, { useEffect } from 'react'
import LeisureSelectbox from '../components/LeisureSelectbox'
import Map from '../components/Map'
import styled from 'styled-components'

const Wrap = styled.div`
  height: 900px;
  display : flex;
  justify-content: center;
  background-color: #b7b5ff;
  overflow: hidden;
`

export default function Home() {
  useEffect(()=>{
    console.log("Home Rendering");
  },[])
  return (
    <Wrap>
      <Map/>
      <LeisureSelectbox/>
    </Wrap>
  )
}
