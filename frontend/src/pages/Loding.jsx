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
  const { activity, legioncode, setactivity} = useStore()
  const { placedata, SetPlaceData , SetWeatherData } = GoodDayStore()
  useEffect(()=>{
    var code = localStorage.getItem('activity');
    console.log(code);
    var data = {
      stnId : '131' , activity : code
    }
    console.log(data);
    axios.defaults.headers.post = null
    axios.post(URL, data ,{header}).then((response) => {
      console.log(response.data.data);
      SetPlaceData(response.data.data)
      
      localStorage.setItem('PlaceData', JSON.stringify(response.data.data));
      const hi = JSON.parse(localStorage.getItem('PlaceData'));
      console.log(hi[2].name);
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