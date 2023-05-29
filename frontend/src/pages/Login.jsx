import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"


export default function Login() {
  const navigate = useNavigate();

  const LoginClick = () =>{
    navigate("/Home")
  }

  return (
    <>
      <span>로그인화면입니다</span>
      <button onClick = {LoginClick}>Login</button>
    </>
  )
}