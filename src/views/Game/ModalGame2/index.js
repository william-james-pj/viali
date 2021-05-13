import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import {
  ModalContainer,
  Header,
  Title,
  Close,
  Content,
} from '../../../styles/Modal';

import {
  Question,
  AnswerSquare,
  AnswerSquareContainer,
  ButtonContainer,
  Button,
} from './styles';

function ModalGame2({ onClose }) {
  const [answer, setAnswer] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleClick = (indexActive) => {
    let newArray = [...answer];
    newArray[indexActive] = !newArray[indexActive];
    setAnswer(newArray);
  };

  return (
    <ModalContainer>
      <Header>
        <Title>Baralho dos seres vivos</Title>
        <Close onClick={() => onClose()}>
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </Close>
      </Header>
      <Content>
        <Question>Selecione os grupos que pertencem ao reino ReinoX</Question>
        <AnswerSquareContainer>
          <AnswerSquare active={answer[0]} onClick={() => handleClick(0)}>
            RESPOSTA
          </AnswerSquare>
          <AnswerSquare active={answer[1]} onClick={() => handleClick(1)}>
            RESPOSTA
          </AnswerSquare>
          <AnswerSquare active={answer[2]} onClick={() => handleClick(2)}>
            RESPOSTA
          </AnswerSquare>
          <AnswerSquare active={answer[3]} onClick={() => handleClick(3)}>
            RESPOSTA
          </AnswerSquare>
          <AnswerSquare active={answer[4]} onClick={() => handleClick(4)}>
            RESPOSTA
          </AnswerSquare>
          <AnswerSquare active={answer[5]} onClick={() => handleClick(5)}>
            RESPOSTA
          </AnswerSquare>
          <AnswerSquare active={answer[6]} onClick={() => handleClick(6)}>
            RESPOSTA
          </AnswerSquare>
          <AnswerSquare active={answer[7]} onClick={() => handleClick(7)}>
            RESPOSTA
          </AnswerSquare>
          <AnswerSquare active={answer[8]} onClick={() => handleClick(8)}>
            RESPOSTA
          </AnswerSquare>
        </AnswerSquareContainer>
        <ButtonContainer>
          <Button>Verificar</Button>
        </ButtonContainer>
      </Content>
    </ModalContainer>
  );
}

ModalGame2.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalGame2;
