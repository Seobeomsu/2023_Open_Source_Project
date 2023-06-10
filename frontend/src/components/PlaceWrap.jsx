import React from 'react'
import styled from 'styled-components';
import PlaceBox from './PlaceBox';

const Wrap = styled.div`
  display: flex;
  height: 550px;
  flex-shrink: 0;
  overflow: auto;
  white-space: nowrap;
`

export default function PlaceWrap() {
  const PlaceData = JSON.parse(localStorage.getItem('PlaceData'));

  return (
    <Wrap>
    {PlaceData.map((item)=>(
      <PlaceBox
      key = {item.name}
      name = {item.name}
      address = {item.address}
      context={item.context}
      imgaddress={item.imageaddress}
      />
    ))}
  </Wrap>
  )
}


