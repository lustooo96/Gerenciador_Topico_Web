import styled from "styled-components";

interface ButtonProps {
  color: string;
}

export const Container = styled.button<ButtonProps>`
  text-align: center;
  border: none;
  height: 35px;
  width: 70px;
  margin: 10px;
  cursor: pointer;
  background-color: ${({ color }) => color};
`;

export const Title = styled.h5`
  color: #fff;
  font-family: monospace;
`;
