import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useStore from './HomeStore';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrap = styled.div`
  div{
    border-radius: 1px;
    background-color: #b7b5ff;
    width: 1px;
    height: 1px;
  }
`

const Button = styled.button`
  width: 230px;
  height: 75px;
  border-radius: 16px;
  margin-top: 50px;
  margin-left : 40px;
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  font-family: "Noto Sans KR", sans-serif;
  color: #252525;
  background-color: #67af78;
  border: 0;

  &:hover{
    background: #e0a800;
    transition: 0.5s;
  }
  &:focus {
    background-color: #dc3545;
  }
  &:active{}
`

export default function GoodDayButton() {
  const [  size , setsize] = useState(0);
  const { activity, legioncode } = useStore()
  const Navigate = useNavigate();

  function GoodDayConvert(){
    console.log(activity,legioncode)
    if(!(activity==null) && !(legioncode==null)){
      setsize(3000);
      const timer = setTimeout(() => {
       Navigate("/GoodDay");
      }, 2000)
    }else if(activity==null && legioncode==null){
     console.log("지역과 활동을 선택해주세요!");
    }else if(activity == null){
      console.log("활동을 선택해주세요!");
    }else if(legioncode == null){
      console.log("지역을 선택해주세요!");
    }
  }

  return (
    <Wrap>
      <motion.div
      initial={{sacle: 10}}
      animate={{scale: size}}
      transition={{
        duration: 2,
      }}
      />
      <Button onClick={GoodDayConvert}>놀러가기 좋은날</Button>
    </Wrap>
  )
}
