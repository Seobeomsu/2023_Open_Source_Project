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
    --button-font-size: 1.25rem;
    --button-padding: 16px 20px;
    --button-radius: 12px;
  `
};

const VARIANTS = {
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
    --button-color: #ffffff;
    --button-bg-color: #28a745;
    --button-hover-bg-color: #e0a800;
    --button-focus-bg-color: #dc3545;
  `
};

function Button({disabled, size, variant, context}) {
  const { setactivity } = useStore()

  const sizeStyle = SIZES[size];
  const variantStyle = VARIANTS[variant];

  function buttonClick(){
    setactivity(context);
  }

  return (
    <StyledButton
      disabled={disabled}
      sizeStyle={sizeStyle}
      variantStyle={variantStyle}
      onClick={buttonClick}
    >
      {context}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  ${(p) => p.sizeStyle}
  ${(p) => p.variantStyle}

  margin: 0;
  border: none;
  cursor: pointer;
  font-family: "Noto Sans KR", sans-serif;
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
