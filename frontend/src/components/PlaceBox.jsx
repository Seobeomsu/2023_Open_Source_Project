import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  background-color: aqua;
  width: 200px;
  height: 200px;
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
