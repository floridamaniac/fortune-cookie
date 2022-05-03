import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import { createRoot } from 'react-dom/client';
import axios from 'axios';

function App() {
  const [fortunes, setFortunes] = useState([]);
  const [addView, setAddView] = useState(false);
  const [activeFortune, setActiveFortune] = useState(null);
  const [newFormText, setNewFormText] = useState('');

  const getFortunes = () => {
    axios.get('/fortunes').then((results) => setFortunes(results.data.reverse()));
    console.log('called');
  };

  useEffect(() => {
    getFortunes();
  }, []);

  const addFortune = () => {
    axios.post('/fortunes', {
      text: newFormText,
      date: new Date(),
    }).then(() => {
      getFortunes();
      setAddView(false);
      setNewFormText('');
    });
  };

  const toggleAddView = () => {
    setAddView(true);
  };

  const deselectFortune = () => {
    setActiveFortune(null);
  };

  const viewFortune = (i) => {
    if (activeFortune === null) setActiveFortune(i);
  };

  const handleChange = (e) => {
    setNewFormText(e.target.value);
  };

  return (
    <>
      <FortuneTitle>My Fortunes</FortuneTitle>
      <Fortunes>
        {fortunes.map((fortune, i) => (
          <FortuneWrapper key={fortune.date} onClick={() => viewFortune(i)}>
            <Fortune id={`fortune${i}`} className={activeFortune === i ? 'selected' : 'inactive'}>
              {(activeFortune === i) && (
                <CloseFortune onClick={() => deselectFortune()}>
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 0C6.7335 0 0 6.7335 0 15C0 23.2665 6.7335 30 15 30C23.2665 30 30 23.2665 30 15C30 6.7335 23.2665 0 15 0ZM11.5605 9.43945L15 12.8789L18.4395 9.43945C18.9606 8.9116 19.9296 8.81526 20.5605 9.43945C21.1462 10.0252 21.1462 10.9748 20.5605 11.5605L17.1211 15L20.5605 18.4395C21.1462 19.0252 21.1462 19.9748 20.5605 20.5605C19.9748 21.1462 19.0252 21.1462 18.4395 20.5605L15 17.1211L11.5605 20.5605C10.9748 21.1462 10.0252 21.1462 9.43945 20.5605C8.85382 19.9748 8.85382 19.0252 9.43945 18.4395L12.8789 15L9.43945 11.5605C8.85382 10.9748 8.85382 10.0252 9.43945 9.43945C10.0718 8.84691 10.9053 8.81517 11.5605 9.43945Z" fill="white"/>
                  </svg>
                </CloseFortune>
              )}
              <FortuneText>
                {fortune.text}
              </FortuneText>
              <FortuneDate>
                {new Date(fortune.date).toDateString().split(' ').slice(1)
                  .join(' ')}
              </FortuneDate>
            </Fortune>
          </FortuneWrapper>
        ))}
      </Fortunes>
      <AddFortuneIcon onClick={() => toggleAddView()}>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M4.375 15C4.375 14.6548 4.65482 14.375 5 14.375H25C25.3452 14.375 25.625 14.6548 25.625 15C25.625 15.3452 25.3452 15.625 25 15.625H5C4.65482 15.625 4.375 15.3452 4.375 15Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <path fillRule="evenodd" clipRule="evenodd" d="M15 4.375C15.3452 4.375 15.625 4.65482 15.625 5V25C15.625 25.3452 15.3452 25.625 15 25.625C14.6548 25.625 14.375 25.3452 14.375 25V5C14.375 4.65482 14.6548 4.375 15 4.375Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </AddFortuneIcon>

      {addView && (
        <AddView>
          <NewFortuneInput onChange={(e) => handleChange(e)} placeholder="Start writing..." />
          <DoneButton onClick={() => addFortune()}>
            Done
          </DoneButton>
        </AddView>
      )}
    </>
  );
}

const NewFortuneInput = styled.textarea`
  outline: none;
  border: 0;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: -0.5px;
  width: 100%;
  height: 80%;
  padding: 20px;
`;

const CloseFortune = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 900;
`;

const FortuneTitle = styled.h1`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 35px;
  /* identical to box height, or 109% */
  letter-spacing: -0.5px;
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

const Fortune = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 24px;
  box-shadow: 0px 8px 30px rgba(47, 47, 47, 0.18);
  &.selected {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 0;
    z-index: 800;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    ${FortuneText} {
      font-size: 28px;
      line-height: 35px;
      text-align: center;
      letter-spacing: -1px;
    }
    ${FortuneDate} {
      font-size: 16px;
      line-height: 20px;
      bottom: 52px;
    }
  }
  &.inactive {
    &:active {
      transform: scale(0.97);
      transition: transform 0.05s ease-in-out;
    }
  }
  transition: transform 0.1s ease-in-out;
  border-radius: 20px;
`;

const FortuneWrapper = styled.article`
  width: 196px;
  height: 162px;
  margin: 2px;
  position: relative;
`;

const DoneButton = styled.span`
  padding: 8px 12px;
  width: 62px;
  height: 36px;
  background-color: black;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  position: absolute;
  bottom: 16px;
  right: 16px;
  cursor: pointer;
`;

const AddView = styled.div`
  background-color: #fff;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 800;
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
  z-index: 700;
`;

const Fortunes = styled.section`
  /* width: 400px; */
  display: flex;
  flex-wrap: wrap;
  & > :nth-child(5n + 1) {
    width: 400px;
  }
  & > :nth-child(6n + 1) > * { background-color: #0AB5FF; }
  & > :nth-child(6n + 2) > * { background-color: #9146FF;; }
  & > :nth-child(6n + 3) > * { background-color: #20C09F; }
  & > :nth-child(6n + 4) > * { background-color: #0066FF; }
  & > :nth-child(6n + 5) > * { background-color: #5A34F3; }
  & > :nth-child(6n + 6) > * { background-color: #00C1CD; }

  `;

createRoot(document.getElementById('root')).render(<App />);
