import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import LinearProgress from '@material-ui/core/LinearProgress';

import {
  ModalContainer,
  Header,
  Title,
  Close,
  Content,
} from '../../../styles/Modal';

import {
  ProgressContainer,
  Question,
  AnswerSquare,
  AnswerSquareContainer,
} from './styles';

function ModalGame1({ onClose }) {
  const [answer, setAnswer] = useState([false, false, false, false]);
  // eslint-disable-next-line no-unused-vars
  const [progress, setProgress] = React.useState(0);

  const handleClick = (indexActive) => {
    let newArray = [false, false, false, false];
    newArray[indexActive] = !newArray[indexActive];
    setAnswer(newArray);
  };

  return (
    <ModalContainer>
      <Header>
        <Title>De quem é o híbrido?</Title>
        <Close onClick={() => onClose()}>
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </Close>
      </Header>
      <Content>
        <ProgressContainer>
          <LinearProgress
            variant="determinate"
            value={progress}
            style={{
              borderRadius: 20,
              background:
                'linear-gradient(90deg, #00A46C 33%, #FCFF77 33%, #FCFF77 70%, #FF2E2E 70%)',
            }}
          />
        </ProgressContainer>
        <Question>Palavra 1 + Palavra 2 = ?</Question>
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
        </AnswerSquareContainer>
      </Content>
    </ModalContainer>
  );
}

ModalGame1.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalGame1;
