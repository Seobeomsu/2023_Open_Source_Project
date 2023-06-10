import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  background-color: #64e2e2d4;
  display: block;
  flex-shrink: 0;
  width: 600px;
  height: 450px;
  margin: auto 20px auto 20px;
  border-radius: 30px;
  padding: 10px;
  overflow : hidden;
  img{
    width: 300px;
    height: 300px;
    border-radius: 20px;
  }
`
const Name = styled.div`
  font-size: 44px;
  position: relative;
  width: 600px;
  text-align: center;
  margin: 10px;
  font-weight: bold;
`
const Address = styled.div`
  position: relative;
  top: -275px;
  left : 325px;
  width: 275px;
  height: 275px;
  white-space: pre-wrap;
  word-break: break-all;
  font-size: 24px;
`
const Context = styled.div`
  position: relative;
  height: 75px;
  top: -250px;
  left: 0px;
  font-size: 24px;
  text-align: center;
  white-space: pre-wrap;
  word-break: break-all;

`

export default function PlaceBox({name,address,context,imgaddress}) {
  return (
    <Wrap>
      <Name>{name}</Name>
      <img src={imgaddress}/>
      <Address>{address}</Address>
      <Context>{context}</Context>
    </Wrap>
  )
}
