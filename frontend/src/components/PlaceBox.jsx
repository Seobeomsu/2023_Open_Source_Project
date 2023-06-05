import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  background-color: aqua;
  display: block;
  flex-shrink: 0;
  width: 600px;
  height: 450px;
  margin: auto 20px auto 20px;
  border-radius: 30px;
  padding: 10px;
  
`

export default function PlaceBox({name,address,context,imgaddress}) {
  return (
    <Wrap>
      <div>{name}</div>
      <div>{address}</div>
      <div>{context}</div>
      <div>{imgaddress}</div>
    </Wrap>
  )
}
