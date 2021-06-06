import styled from "styled-components";

export const Container = styled.div`
  background: #000;
  width: 18%;
  height: 100%;
  color: #fff;
  font-family: Vazir;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

export const TopBoarder = styled.div`
  width: 3px;
  height: 300px;
  background-color: white;
  display: flex;
  border-radius: 10px;
  justify-content: center;
`;

export const TopContent = styled.h4`
  color: lightgray;
  justify-content: center;
  margin: 1rem 0 0 0;
`;

export const MainContent = styled.h1`
  color: #f5f5f5;
  justify-content: center;
  font-family: Vazir;
  margin: 2rem 0 2rem 0;
`;

export const BottomContent = styled.h4`
  color: lightgray;
  justify-content: center;
  margin: 1rem 0 0 0;
`;

export const Button = styled.button`
  background: none;
  color: white;
  width: 7rem;
  height: 9rem;
  border-radius: 0.1rem;
  box-shadow: 1px -1px 6px 0 rgba(87, 68, 68, 0.95);
  margin-top: 3rem;
`;

export const BottomBorder = styled.div`
  width: 3px;
  height: 300px;
  background-color: white;
  display: flex;
  border-radius: 10px;
  justify-content: center;
  margin-top: 5rem;
`;
