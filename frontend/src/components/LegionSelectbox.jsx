import React from 'react'

const OPTIONS = [
  { value : "1",name:"서울"},
  { value : "2",name:"경기도"},
  { value : "3",name:"충청북도"},
  { value : "4",name:"충청북도"},
  { value : "5",name:"전라남도"},
  { value : "6",name:"전라북도"},
  { value : "7",name:"경상남도"},
  { value : "8",name:"경상북도"},
  { value : "9",name:"강원도"},
  { value : "10",name:"제주도"},
]


export default function LegionSelectbox(props) {
  return (
		<select>
      {OPTIONS.map((item)=>(
        <option value={item.value} key={item.value}>{item.name}
        </option>
      ))}
		</select>
  )
}
