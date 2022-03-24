import styled from "styled-components";

export const Container = styled.div`
  border-radius: 10px;
  background-color: gray;
  height: 180px;
  word-break: break-all;
  width: 50%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 10px 10px;
  :hover {
    cursor: pointer;
  }
`;

export const Content = styled.div``;
export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const Title = styled.h3`
  margin-left: 10px;
`;
export const About = styled.p`
  margin-left: 10px;
`;
