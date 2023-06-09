import React from 'react'
import PlaceBox from '../components/PlaceBox'
import WeatherBox from '../components/WeatherBox'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import GoodDayStore from '../components/GoodDayStore'

//const { placedata , weatherdata } = GoodDayStore()

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

const placedata = [ // 총 3개
  { name: "고릴라캠핑청주점",
    address: "충청북도 청주시 서원구 남이면 수대리 233-1",
    context: "매장 내 쇼핑",
    imageaddress: "https://lh5.googleusercontent.com/p/AF1QipNwF-Gd6UowdqIpHEepMkw7WtTM2PkR4ZdtNWt2=w408-h862-k-no",},
  { name : "누난내여자니까", address : "비전이동" , context : "응애", imageaddress : "/asdfsaf"},
  { name : "양성재", address : "420호" , context : "420호의 불은 꺼지지않는다", imageaddress : "/asdfsaf"},
]

const Wrap = styled.div`
  height: 900px;
  display: block;
  justify-content: center;
  background-color: #b7b5ff;
  overflow: hidden;
`
const WeatherWrap = styled.div`
  display: flex;
  height: 350px;
  flex-shrink: 0;
  overflow: auto;
  white-space: nowrap;
`

const PlaceWrap = styled.div`
  display: flex;
  height: 550px;
  flex-shrink: 0;
  overflow: auto;
  white-space: nowrap;
`

export default function GoodDay() {

return (
    <Wrap>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{duration: 2}}
      >
        <PlaceWrap>
          {placedata.map((item)=>(
            <PlaceBox
            key = {item.name}
            name = {item.name}
            address = {item.address}
            context={item.context}
            imgaddress={item.imageaddress}
            />
          ))}
        </PlaceWrap>
      </motion.div>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      > 
      <div>
        <WeatherWrap>
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
        </WeatherWrap>
        </div>
      </motion.div>
    </Wrap>
  )
}
