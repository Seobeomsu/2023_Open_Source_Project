import React, {useEffect}from "react"
import character from "../image/character.png"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function Intro() {
  const navigate = useNavigate()

  useEffect(() => { // 3초후 페이지이동
    const timer = setTimeout(() => {
      navigate("/login");
    }, 3000);

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 해제
  }, [navigate]);

  return (
    <>
      <img src = {character} alt="놀러갈래 아이콘" />
      <span>놀러갈래</span>
      <span><Link to ="/Login">Login</Link></span>
    </>
  )
}