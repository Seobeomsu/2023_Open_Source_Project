import React from 'react'
import Button from './button'
import styled from 'styled-components'

const OPTIONS = [
  { value : "0",name:"꽃놀이"},
  { value : "1",name:"물놀이"},
  { value : "2",name:"캠핑"},
  { value : "3",name:"피크닉"},
  { value : "4",name:"별구경"},
]

const Wrapper = styled.div`
  display: block;
  width: 500px;
  height: 500px;;
  background-color: aqua;
`

export default function LeisureSelectbox() {
  return (
    <Wrapper>
        <Button variant="activity" size="lg" context="꽃놀이"/>
        <Button variant="activity" size="lg" context="물놀이"/>
        <Button variant="activity" size="lg" context="캠피잉"/>
        <Button variant="activity" size="lg" context="피크닉"/>
        <Button variant="activity" size="lg" context="별구경"/>
    </Wrapper>
  )
}
