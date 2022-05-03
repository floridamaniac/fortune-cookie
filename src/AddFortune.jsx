import { React } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { CloseView, clickable } from './SharedStyles';

function AddFortune({ toggleAddView, handleChange, addFortune }) {
  return (
    <AddView>
      <CloseView onClick={() => toggleAddView()}>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 0C6.7335 0 0 6.7335 0 15C0 23.2665 6.7335 30 15 30C23.2665 30 30 23.2665 30 15C30 6.7335 23.2665 0 15 0ZM11.5605 9.43945L15 12.8789L18.4395 9.43945C18.9606 8.9116 19.9296 8.81526 20.5605 9.43945C21.1462 10.0252 21.1462 10.9748 20.5605 11.5605L17.1211 15L20.5605 18.4395C21.1462 19.0252 21.1462 19.9748 20.5605 20.5605C19.9748 21.1462 19.0252 21.1462 18.4395 20.5605L15 17.1211L11.5605 20.5605C10.9748 21.1462 10.0252 21.1462 9.43945 20.5605C8.85382 19.9748 8.85382 19.0252 9.43945 18.4395L12.8789 15L9.43945 11.5605C8.85382 10.9748 8.85382 10.0252 9.43945 9.43945C10.0718 8.84691 10.9053 8.81517 11.5605 9.43945Z" fill="black" />
        </svg>
      </CloseView>
      <NewFortuneInput onChange={(e) => handleChange(e)} placeholder="Start writing..." />
      <DoneButton onClick={() => addFortune()}>Done</DoneButton>
    </AddView>
  );
}

AddFortune.propTypes = {
  toggleAddView: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  addFortune: PropTypes.func.isRequired,
};

const AddView = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: 800;
`;

const DoneButton = styled.span`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 62px;
  height: 36px;
  bottom: 16px;
  right: 16px;
  padding: 8px 12px;
  border-radius: 12px;
  background-color: black;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #fff;
  ${clickable};
`;

const NewFortuneInput = styled.textarea`
  width: 100%;
  height: 80%;
  padding: 20px;
  margin-top: 50px;
  border: 0;
  outline: none;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: -0.5px;
`;

export default AddFortune;
