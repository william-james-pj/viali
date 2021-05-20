import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { db } from '../../../services/firestore';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Loading from '../../../components/Loading/index';
import MsgHappy from '../../../components/MsgHappy/index';

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
  RightContainer,
  WrongContainer,
  MsgComponent,
  MsgText,
  ButtonMsg,
} from './styles';

function ModalGame2({ onClose }) {
  const [isLoading, setLoading] = useState(true);
  const [firebaseAllAnswer, setFirebaseAllAnswer] = useState([]);
  const [firebaseAnswer, setFirebaseAnswer] = useState([]);
  const [allAnswer, setAllAnswer] = useState([]);
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [rightOrWeong, setRightOrWeong] = useState([false, false]);
  const [answer, setAnswer] = useState([]);
  const [end, setEnd] = useState(false);

  const handleClick = (indexActive) => {
    let newArray = [...answer];
    newArray[indexActive] = !newArray[indexActive];
    setAnswer(newArray);
  };

  const initAnswer = () => {
    let aux = [];
    for (let i = 0; i < 9; i++) {
      aux.push(false);
    }
    setAnswer(aux);
  };

  const handleClickAgain = () => {
    initAnswer();
    setRightOrWeong([false, false]);
  };

  const handleClickNext = () => {
    if (indexQuestion + 1 === firebaseAnswer.length) {
      setEnd(true);
      return;
    }

    initAnswer();
    setIndexQuestion(indexQuestion + 1);
    addAnswer(firebaseAllAnswer, 9);
    setRightOrWeong([false, false]);
  };

  const handleConfirm = () => {
    let right = 0;
    let wrong = 0;
    answer.forEach((element, index) => {
      if (element) {
        firebaseAnswer[indexQuestion].answer.includes(allAnswer[index])
          ? right++
          : wrong++;
      }
    });
    if (right == 3 && wrong == 0) setRightOrWeong([true, false]);
    else setRightOrWeong([false, true]);
  };

  const addAnswer = (data, maxLength) => {
    let newArray = [];

    for (let i = 0; i < 9; i++) {
      newArray.push('');
    }

    for (let i = 0; i < maxLength; i++) {
      let random = Math.floor(Math.random() * 9);
      let aux = data[Math.floor(Math.random() * data.length)];
      if (newArray[random] === '' && !newArray.includes(aux))
        newArray[random] = aux;
      else i--;
    }

    setAllAnswer(newArray);
  };

  const fetchAnswer = async () => {
    try {
      let items = [];
      const response = db.collection('BSV_Answer');
      const data = await response.get();
      await data.docs.forEach((documentSnapshot) => {
        items.push({
          word: documentSnapshot.data().word,
          answer: documentSnapshot.data().answer,
        });
      });
      setFirebaseAnswer(items);
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };

  const fetchAllAnswer = async () => {
    try {
      let items = [];
      const response = db.collection('BSV_AllAnswer');
      const data = await response.get();
      await data.docs.forEach((documentSnapshot) => {
        items.push(documentSnapshot.data().text);
      });
      addAnswer(items, 9);
      setFirebaseAllAnswer(items);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };

  const getAll = async () => {
    await fetchAnswer();
    await fetchAllAnswer();
  };

  useEffect(() => {
    initAnswer();
    getAll();
  }, []);

  if (isLoading)
    return (
      <ModalContainer>
        <Loading active={isLoading} />
      </ModalContainer>
    );

  if (end)
    return (
      <ModalContainer>
        <MsgHappy onClose={onClose} />
      </ModalContainer>
    );

  return (
    <ModalContainer>
      <Header>
        <Title>Baralho dos seres vivos</Title>
        <Close onClick={() => onClose()}>
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </Close>
      </Header>
      <Content>
        <Question>
          Selecione os grupos que pertencem ao reino{' '}
          {firebaseAnswer[indexQuestion].word}
        </Question>
        <AnswerSquareContainer>
          {allAnswer.length > 8 &&
            allAnswer.map((element, index) => {
              return (
                <AnswerSquare
                  key={index}
                  active={answer[index]}
                  onClick={() => handleClick(index)}
                >
                  {element}
                </AnswerSquare>
              );
            })}
        </AnswerSquareContainer>
        <ButtonContainer>
          <Button onClick={handleConfirm}>Verificar</Button>
        </ButtonContainer>
      </Content>
      {rightOrWeong[0] ? (
        <RightContainer>
          <MsgComponent>
            <MsgText titleProps={true}>Parabéns!!</MsgText>
            <MsgText>{'Você é dez :)'}</MsgText>
          </MsgComponent>
          <ButtonContainer>
            <ButtonMsg right={true} onClick={handleClickNext}>
              Próxima
            </ButtonMsg>
          </ButtonContainer>
        </RightContainer>
      ) : (
        ''
      )}
      {rightOrWeong[1] ? (
        <WrongContainer>
          <MsgComponent>
            <MsgText titleProps={true}>Ops...</MsgText>
            <MsgText>{'Não foi dessa vez, tente novamente!'}</MsgText>
          </MsgComponent>
          <ButtonContainer>
            <ButtonMsg right={false} onClick={handleClickAgain}>
              Novamente
            </ButtonMsg>
          </ButtonContainer>
        </WrongContainer>
      ) : (
        ''
      )}
    </ModalContainer>
  );
}

ModalGame2.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalGame2;
