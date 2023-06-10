import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import WeatherWrap from '../components/WeatherWrap'
import PlaceWrap from '../components/PlaceWrap'

const Wrap = styled.div`
  height: 900px;
  display: block;
  justify-content: center;
  background-color: #b7b5ff;
  overflow: hidden;
`

export default function GoodDay() {
return (
    <Wrap>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      >
        <PlaceWrap/>
      </motion.div>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      > 
        <WeatherWrap/>
      </motion.div>
    </Wrap>
  )
}
