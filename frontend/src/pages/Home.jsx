import React from 'react'
import LegionSelectbox from '../components/LegionSelectbox'
import LeisureSelectbox from '../components/LeisureSelectbox'
import { useNavigate } from 'react-router-dom'
import Map from '../components/Map'
export default function Home() {
  const Navigate = useNavigate();

  function GoodDayConvert(){
    


    Navigate("/GoodDay")
  }

  return (
    <>
    <div>Home</div>
    <Map/>
    <LegionSelectbox></LegionSelectbox>
    <LeisureSelectbox></LeisureSelectbox>
    <button onClick={GoodDayConvert}>놀러가기 좋은날~</button>
    </>
  )
}
