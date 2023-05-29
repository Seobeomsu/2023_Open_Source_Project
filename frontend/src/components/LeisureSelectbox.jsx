import React from 'react'

const OPTIONS = [
  { value : "1",name:"꽃놀이"},
  { value : "2",name:"바다"},
  { value : "3",name:"캠핑"},
  { value : "4",name:"그거"},
  { value : "5",name:"스키or보드"},
  { value : "6",name:"별관측"},
]


export default function LeisureSelectbox(props) {
  return (
		<select>
      {OPTIONS.map((item)=>(
        <option value={item.value} key={item.value}>{item.name}
        </option>
      ))}
		</select>
  )
}
