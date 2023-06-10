import React, {useEffect, useState}from "react"
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion,AnimatePresence } from "framer-motion"
import character from "../image/character.png"

const Wrap = styled.div`
background-color: #b7b5ff;
align-items : center ;
margin: auto;
height: 900px;
img{
  display: block;
  width: 400px;
  height: 400px;
  margin: auto;
  padding-top: 100px;
  padding-right: 50px;
}
`
const AppText = styled.div`
	text-align: center;
  font-weight: 700;
  font-size: 64px;
  font-family: 'Courier New', Courier, monospace;
  letter-spacing: 2px;
  text-shadow: px 3px gray;
`

const TextWrap = styled.div`
  float: right;
  padding-top: 50px;
  padding-right: 50px;
`
const Text = styled.div`
  text-align: center;
  font-weight: 700;
`
export default function Intro() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate()

  useEffect(() => { // 3초후 페이지이동
    setIsVisible(true)
    const timer = setTimeout(() => {
      setIsVisible(false)
      const timer2 = setTimeout(() => {
        navigate("/home");
      }, 2000);
    }, 2000);
    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 해제
  }, [navigate]);

  return (
    <Wrap>      
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 2,
            }}
          >
            <img src = {character} alt="놀러갈래 아이콘" />
            <AppText>놀러갈래</AppText>
            <TextWrap>
              <Text>2023년도 오픈소스 프로젝트</Text>
              <Text>2019019014 서범수</Text>
              <Text>2020069051 안제원</Text>
              <Text>2021040008 양수아</Text>
              </TextWrap>
            </motion.div>
          )}
      </AnimatePresence>
    </Wrap>
  )
}