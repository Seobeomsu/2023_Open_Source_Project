import React from 'react'
import Button from './button'
import styled from 'styled-components'
import GoodDayButton from './GoodDayButton'
import { motion } from "framer-motion"

const Wrapper = styled.div`
  display: block;
  width: 300px;
  height: 700px;
  margin-top: auto;
  margin-bottom: auto;
  ul{
    width: 300px;
    height: 500px;
  }
  li{
    padding: auto;
    justify-content: center;
    width: 150px;
    height: 100px;
    margin-left: 100px;
  }
`

export default function LeisureSelectbox() {
  const open = {
		hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0,
			transition: {
				duration : 1
			 } }
	}

  const list = {
    hidden: {opacity:0} , 
    visible:{
      opacity:1,
      transition:{
        when: "beforeChildren",
        staggerChildren : 0.4
    }}
  }

  const item = {
    hidden: {opacity: 0, y: 50},
    visible: {opacity:1, y: 0}
  }

  return (
    <Wrapper>
      <motion.ul variants={list} initial="hidden" animate="visible">
        <motion.li variants={item}>
          <Button vari="activity" size="lg" context="꽃놀이"/>
        </motion.li>
        <motion.li variants={item}>
          <Button vari="activity" size="lg" context="물놀이"/>
        </motion.li>
        <motion.li variants={item}>
          <Button vari="activity" size="lg" context="캠피잉"/>
        </motion.li>
        <motion.li variants={item}>
          <Button vari="activity" size="lg" context="피크닉"/>
        </motion.li>
        <motion.li variants={item}>
          <Button vari="activity" size="lg" context="별구경"/>
        </motion.li>
      </motion.ul>
      <motion.div variants={open} initial="hidden" animate="visible">
        <GoodDayButton/>
      </motion.div>
    </Wrapper>
  )
}
