import styled, { css } from "styled-components";
import useStore from "./HomeStore";

const SIZES = {
  sm: css`
    --button-font-size: 0.875rem;
    --button-padding: 8px 12px;
    --button-radius: 4px;
  `,
  md: css`
    --button-font-size: 1rem;
    --button-padding: 12px 16px;
    --button-radius: 8px;
  `,
  lg: css`
    --button-font-size: 1.5rem;
    --button-padding: 4px 8px;
    --button-radius: 12px;
  `
};

const VARIS = {
  success: css`
    --button-color: #ffffff;
    --button-bg-color: #28a745;
    --button-hover-bg-color: #218838;
  `,
  error: css`
    --button-color: #ffffff;
    --button-bg-color: #dc3545;
    --button-hover-bg-color: #c82333;
  `,
  warning: css`
    --button-color: #212529;
    --button-bg-color: #ffc107;
    --button-hover-bg-color: #e0a800;
  `,
  activity: css`
    --button-color: #252525;
    --button-bg-color: #78dd8f;
    --button-hover-bg-color: #ffe0a1;
    --button-focus-bg-color: #ff7f8e;
  `
};

function Button({disabled, size, vari, context, code}) {
  const { setactivity } = useStore()

  const sizeStyle = SIZES[size];
  const variStyle = VARIS[vari];

  function buttonClick(){
    setactivity(code);

    localStorage.setItem('activity',code);
  }

  return (
    <StyledButton
      disabled={disabled}
      sizeStyle={sizeStyle}
      variStyle={variStyle}
      onClick={buttonClick}
    >
      {context}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  ${(p) => p.sizeStyle}
  ${(p) => p.variStyle}
  border: solid 0px #2402e2;
  cursor: pointer;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 700;
  font-size: var(--button-font-size, 1rem);
  padding: var(--button-padding, 12px 16px);
  border-radius: var(--button-radius, 8px);
  color: var(--button-color, #ffffff);
  background: var(--button-bg-color, #0d6efd);

  &:hover{
    background-color:  var(--button-hover-bg-color,#025ce2 );
    transition: 0.5s;
  }
  &:focus {
    background: var(--button-focus-bg-color, #025ce2);
  }
  &:active{}
  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, #025ce2);
  }
`;

export default Button;
