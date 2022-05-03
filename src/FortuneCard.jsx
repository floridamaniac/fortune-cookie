/* eslint-disable newline-per-chained-call */
import { React } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { CloseView } from './SharedStyles';

function FortuneCard({ i, date, text, isWide, isActive, viewFortune, setActiveFortune }) {
  // Clip text longer than 50 chars.
  const clippedText = (t, double) => {
    // If it's a wide text field, clip double the characters.
    const clipLength = double ? 100 : 50;
    return ((t.length > clipLength) ? (t.slice(0, clipLength).concat('...')) : t);
  };

  return (
    <FortuneWrapper onClick={() => viewFortune(i)}>
      <Fortune className={isActive ? 'selected' : 'inactive'}>
        {isActive && (
          <CloseView onClick={() => setActiveFortune(null)}>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 0C6.7335 0 0 6.7335 0 15C0 23.2665 6.7335 30 15 30C23.2665 30 30 23.2665 30 15C30 6.7335 23.2665 0 15 0ZM11.5605 9.43945L15 12.8789L18.4395 9.43945C18.9606 8.9116 19.9296 8.81526 20.5605 9.43945C21.1462 10.0252 21.1462 10.9748 20.5605 11.5605L17.1211 15L20.5605 18.4395C21.1462 19.0252 21.1462 19.9748 20.5605 20.5605C19.9748 21.1462 19.0252 21.1462 18.4395 20.5605L15 17.1211L11.5605 20.5605C10.9748 21.1462 10.0252 21.1462 9.43945 20.5605C8.85382 19.9748 8.85382 19.0252 9.43945 18.4395L12.8789 15L9.43945 11.5605C8.85382 10.9748 8.85382 10.0252 9.43945 9.43945C10.0718 8.84691 10.9053 8.81517 11.5605 9.43945Z" fill="white" />
            </svg>
          </CloseView>
        )}
        <FortuneText>{isActive ? text : clippedText(text, isWide)}</FortuneText>
        <FortuneDate>{new Date(date).toDateString().split(' ').slice(1).join(' ')}</FortuneDate>
      </Fortune>
    </FortuneWrapper>
  );
}

FortuneCard.propTypes = {
  i: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isWide: PropTypes.bool.isRequired,
  isActive: PropTypes.bool.isRequired,
  viewFortune: PropTypes.func.isRequired,
  setActiveFortune: PropTypes.func.isRequired,
};

const FortuneText = styled.p`
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
    cursor: pointer;
    &:active {
      transform: scale(0.97);
      transition: transform 0.05s ease-in-out;
    }
  }
  transition: transform 0.1s ease-in-out;
  border-radius: 20px;
`;

const FortuneWrapper = styled.article`
  min-width: 150px;
  flex: 1;
  height: 162px;
  margin: 2px;
  position: relative;
`;

export default FortuneCard;
