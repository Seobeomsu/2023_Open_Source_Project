import React from 'react'
import PlaceBox from '../components/PlaceBox'
import WeatherBox from '../components/WeatherBox'

const weatherdata = [ // 총 10개
  {  date : "5.31", weather : "good", hightempature : "45", lowtempature : "-45" , state : "bad"},
  { date : "6.1", weather : "good", hightempature : "45", lowtempature : "-45" , state : "good"},
  { date : "6.2", weather : "good", hightempature : "45", lowtempature : "-45" , state : "verygood"},
  { date : "6.3", weather : "good", hightempature : "45", lowtempature : "-45" , state : "good"},
  { date : "6.4", weather : "good", hightempature : "45", lowtempature : "-45" , state : "good"},
]

const placedata = [ // 총 3개
  { name : "SkyTree", address : "고색동" , context : "뭐하는거야" , imageaddress : "/asdfsaf"},
  { name : "누난내여자니까", address : "비전이동" , context : "응애", imageaddress : "/asdfsaf"},
  { name : "양성재", address : "420호" , context : "420호의 불은 꺼지지않는다", imageaddress : "/asdfsaf"},
]

export default function GoodDay() {
  return (
    <>
      <div>
        장소 wrap
        {placedata.map((item)=>(
        <PlaceBox
          key = {item.name}
          name = {item.name}
          address = {item.address}
          context={item.context}
          imgaddress={item.imageaddress}
        />
      ))}
      </div>
      <div>
        날씨 wrap
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
      </div>
    </>
  )
}
