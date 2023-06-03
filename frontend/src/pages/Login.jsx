import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components";

const Wrap = styled.div`
  background-color: #b7b5ff;
  height: 900px;
`

export default function Login() {
  const navigate = useNavigate();
  const LoginClick = () =>{
    navigate("/Home")
  }

  return (
    <Wrap>
      <span>로그인화면입니다</span>
      <button onClick = {LoginClick}>Login</button>
    </Wrap>
  )
}