import React, { useEffect } from 'react'
import axios from 'axios'
import useStore from '../components/HomeStore'
import GoodDayStore from '../components/GoodDayStore'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Wrap = styled.div`
  height: 900px;
  display : flex;
  justify-content: center;
  background-color: #b7b5ff;
  overflow: hidden;
`
const URL = "http://54.180.194.206:8000/TourSpot";

const header = {
  'Content-type': 'application/json',
  'Accept': '*',
  'Access-Control-Allow-Origin': '*'
}

export default function Loding(){
  const { activity, legioncode } = useStore()
  const { SetPlaceData , SetWeatherData } = GoodDayStore()
  axios.defaults.headers.post = null

  useEffect(()=>{
    axios.post(URL,{ stnId : "131", activity : activity },{header}).then((response) => {
      console.log(response.data.data);
      SetPlaceData(response.data.data).then(console.log("hi")/*useNavigate("/GoodDay")*/);
    })
  },[])
  //axios.post(URL, { legioncode : legioncode },{header}).then((response)=>{
  //  console.log(response.data.data);
  //  SetWeatherData(response.data.data);
  //})

  return(
    <Wrap>
      Loding...
    </Wrap>
  )
}