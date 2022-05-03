import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import { createRoot } from 'react-dom/client';
import axios from 'axios';

import AddFortune from './AddFortune';
import FortuneCard from './FortuneCard';

import { clickable } from './SharedStyles';

// How frequently to include wide fortunes in main view.
const wideFreq = 5;

function App() {
  const [fortunes, setFortunes] = useState([]);
  const [addView, setAddView] = useState(false);
  const [activeFortune, setActiveFortune] = useState(null);
  const [newFormText, setNewFormText] = useState('');

  const getFortunes = () => { axios.get('/fortunes').then((results) => setFortunes(results.data.reverse())); };

  useEffect(() => { getFortunes(); }, []);

  // TODO: Add visual feedback if fortune is empty.
  const addFortune = () => {
    if (newFormText !== '') {
      axios.post('/fortunes', {
        text: newFormText,
        date: new Date(),
      }).then(() => {
        getFortunes();
        setAddView(false);
        setNewFormText('');
      });
    }
  };

  const toggleAddView = () => { setAddView(!addView); };
  const viewFortune = (i) => { if (activeFortune === null) setActiveFortune(i); };
  const handleChange = (e) => { setNewFormText(e.target.value); };

  return (
    <MainView>
      <FortuneTitle>My Fortunes</FortuneTitle>
      <Fortunes>
        {fortunes.map((fortune, i) => (
          <FortuneCard
            key={fortune.date}
            date={fortune.date}
            text={fortune.text}
            i={i}
            isWide={!(i % 5)}
            isActive={activeFortune === i}
            viewFortune={viewFortune}
            setActiveFortune={setActiveFortune}
          />
        ))}
      </Fortunes>
      <AddFortuneIcon onClick={() => toggleAddView()}>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M4.375 15C4.375 14.6548 4.65482 14.375 5 14.375H25C25.3452 14.375 25.625 14.6548 25.625 15C25.625 15.3452 25.3452 15.625 25 15.625H5C4.65482 15.625 4.375 15.3452 4.375 15Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <path fillRule="evenodd" clipRule="evenodd" d="M15 4.375C15.3452 4.375 15.625 4.65482 15.625 5V25C15.625 25.3452 15.3452 25.625 15 25.625C14.6548 25.625 14.375 25.3452 14.375 25V5C14.375 4.65482 14.6548 4.375 15 4.375Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </AddFortuneIcon>

      {addView && (
        <AddFortune
          handleChange={handleChange}
          addFortune={addFortune}
          toggleAddView={toggleAddView}
        />
      )}
    </MainView>
  );
}

const MainView = styled.div`
  padding: 10px;
  font-family: 'Roboto';
  font-style: normal;
`;

const FortuneTitle = styled.h1`
  font-weight: 700;
  font-size: 32px;
  letter-spacing: -0.5px;
  margin-top: 60px;
  margin-bottom: 10px;
`;

const Fortunes = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & > :nth-child(${wideFreq}n + 1) {
    min-width: 300px;
    flex: 2;
  }
  & > :nth-child(6n + 1) > * { background-color: #0AB5FF; }
  & > :nth-child(6n + 2) > * { background-color: #9146FF;; }
  & > :nth-child(6n + 3) > * { background-color: #20C09F; }
  & > :nth-child(6n + 4) > * { background-color: #0066FF; }
  & > :nth-child(6n + 5) > * { background-color: #5A34F3; }
  & > :nth-child(6n + 6) > * { background-color: #00C1CD; }
`;

const AddFortuneIcon = styled.span`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: black;
  box-shadow: 2px 12px 40px rgba(0, 0, 0, 0.4);
  bottom: 40px;
  right: 20px;
  z-index: 700;
  ${clickable};
`;

createRoot(document.getElementById('root')).render(<App />);
