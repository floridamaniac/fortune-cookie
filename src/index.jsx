import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import { createRoot } from 'react-dom/client';
import axios from 'axios';

function App() {
  const [fortunes, setFortunes] = useState([]);

  useEffect(() => {
    axios.get('/fortunes').then((results) => setFortunes(results.data));
  }, []);

  return (
    <>
      <FortuneTitle>My Fortunes</FortuneTitle>
      <Fortunes>
        {fortunes.map((fortune) => (
          <FortuneWrapper key={fortune.date}>
            <FortuneText>
              {fortune.text}
            </FortuneText>
            <FortuneDate>
              {new Date(fortune.date).toDateString().split(' ').slice(1).join(' ')}
            </FortuneDate>
          </FortuneWrapper>
        ))}
      </Fortunes>
      <AddFortuneIcon>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M4.375 15C4.375 14.6548 4.65482 14.375 5 14.375H25C25.3452 14.375 25.625 14.6548 25.625 15C25.625 15.3452 25.3452 15.625 25 15.625H5C4.65482 15.625 4.375 15.3452 4.375 15Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M15 4.375C15.3452 4.375 15.625 4.65482 15.625 5V25C15.625 25.3452 15.3452 25.625 15 25.625C14.6548 25.625 14.375 25.3452 14.375 25V5C14.375 4.65482 14.6548 4.375 15 4.375Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </AddFortuneIcon>
    </>
  );
}
const FortuneTitle = styled.h1`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 35px;
  /* identical to box height, or 109% */
  letter-spacing: -0.5px;
`;

const FortuneDate = styled.span`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 4px 8px;
  color: #fff;
  font-size: 13px;
  line-height: 15px;
  position: absolute;
  bottom: 27px;
`;

const AddFortuneIcon = styled.span`
  width: 60px;
  height: 60px;
  display: inline-block;
  border-radius: 50%;
  background-color: black;
  box-shadow: 2px 12px 40px rgba(0, 0, 0, 0.4);
  position: fixed;
  bottom: 40px;
  right: 20px;
  & > * {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &:hover {
    transform: scale(1.03);
    transition: transform 0.2s ease-in-out;
  }
  &:active {
    transform: scale(0.97);
    transition: transform 0.05s ease-in-out;
  }
  transition: transform 0.1s ease-in-out;
`;

const Fortunes = styled.section`
  /* width: 400px; */
  display: flex;
  flex-wrap: wrap;
  & > :nth-child(5n + 1) {
    width: 400px;
  }
  & > :nth-child(6n + 1) { background-color: #0AB5FF; }
  & > :nth-child(6n + 2) { background-color: #9146FF;; }
  & > :nth-child(6n + 3) { background-color: #20C09F; }
  & > :nth-child(6n + 4) { background-color: #0066FF; }
  & > :nth-child(6n + 5) { background-color: #5A34F3; }
  & > :nth-child(6n + 6) { background-color: #00C1CD; }

  `;

const FortuneWrapper = styled.article`
  width: 196px;
  height: 162px;
  border-radius: 20px;
  background-color: #0AB5FF;
  box-shadow: 0px 8px 30px rgba(47, 47, 47, 0.18);
  margin: 2px;
  position: relative;
  padding: 24px;
  &:active {
    transform: scale(0.97);
    transition: transform 0.05s ease-in-out;
  }
  transition: transform 0.1s ease-in-out;
`;

const FortuneText = styled.p`
  /* position: absolute; */
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #fff;
`;

createRoot(document.getElementById('root')).render(<App />);
