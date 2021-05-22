/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { db, storage } from '../../../services/firestore';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Loading from '../../../components/Loading/index';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import MsgStatus from '../../../components/MsgStatus/index';
import MsgHappy from '../../../components/MsgHappy/index';

import {
  ModalContainer,
  Header,
  Title,
  Close,
  Content,
} from '../../../styles/Modal';

import {
  ProgressContainer,
  QuestionContainer,
  QuestionSquare,
  Question,
  AnswerSquare,
  AnswerSquareContainer,
  Img,
} from './styles';

const CustomSlider = withStyles({
  thumb: {
    backgroundColor: '#24292E',
  },
  rail: {
    backgroundImage:
      'linear-gradient(90deg, #00A46C 33%, #FCFF77 33%, #FCFF77 66%, #FF2E2E 66%)',
    opacity: 1,
  },
  track: {
    color: 'transparent',
  },
})(Slider);

function ModalGame1({ onClose }) {
  const [isLoading, setLoading] = useState(true);
  const [isImgLoading, setImgLoading] = useState(true);
  const [firebaseAnswer, setFirebaseAnswer] = useState([]);
  const [firebaseAllAnswer, setFirebaseAllAnswer] = useState([]);
  const [allAnswer, setAllAnswer] = useState([]);
  const [answer, setAnswer] = useState([]);
  const [question, setQuestion] = useState([]);
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [rightOrWeong, setRightOrWeong] = useState([false, false]);
  const [progress, setProgress] = React.useState(1);
  const [allLoading, setAllLoading] = React.useState(0);
  const [end, setEnd] = useState(false);

  const handleClick = (indexActive) => {
    let newArray = [false, false, false, false];
    newArray[indexActive] = !newArray[indexActive];
    setAnswer(newArray);

    if (
      firebaseAnswer[indexQuestion].answer.includes(allAnswer[indexActive].img)
    ) {
      setRightOrWeong([true, false]);
      setIndexQuestion(indexQuestion + 1);
    } else setRightOrWeong([false, true]);
  };

  const handleLoaderImg = () => {
    setAllLoading(allLoading + 1);
    if (allLoading == 4) {
      setImgLoading(false);
    }
  };

  const initAnswer = () => {
    let aux = [];
    for (let i = 0; i < 4; i++) {
      aux.push(false);
    }
    setAnswer(aux);
  };

  const handleClickAgain = () => {
    initAnswer();
    setRightOrWeong([false, false]);
  };

  const handleClickNext = () => {
    if (indexQuestion === firebaseAnswer.length) {
      setEnd(true);
      return;
    }
    setProgress(progress + 1);
    setAllLoading(0);
    setImgLoading(true);
    initAnswer();
    addQuestion(firebaseAllAnswer, firebaseAnswer);
    addAnswer(firebaseAllAnswer, firebaseAnswer[indexQuestion], 3);
    setRightOrWeong([false, false]);
  };

  const addQuestion = (all, questionProps) => {
    let aux = [];
    all.map((item) => {
      if (
        item.img === questionProps[indexQuestion].answer[0] ||
        item.img === questionProps[indexQuestion].answer[1]
      ) {
        aux.push(item.url);
      }
    });
    setQuestion(aux);
  };

  const addAnswer = (all, questionProps, maxLength) => {
    let newArray = [];

    for (let i = 0; i < 4; i++) {
      newArray.push('');
    }

    for (let i = 0; i < maxLength; i++) {
      let random = Math.floor(Math.random() * 4);
      let aux = all[Math.floor(Math.random() * all.length)];
      if (
        newArray[random] === '' &&
        !newArray.includes(aux) &&
        aux.img !== questionProps.answer[0] &&
        aux.img !== questionProps.answer[1] &&
        aux.img !== questionProps.answer[2]
      )
        newArray[random] = aux;
      else i--;
    }

    let aux = all.find((element) => element.img === questionProps.answer[2]);
    let index = newArray.findIndex((element) => element == '');
    newArray[index] = aux;

    setAllAnswer(newArray);
  };

  const fetchAnswer = async () => {
    try {
      let items = [];
      const response = db.collection('DQH_Answer');
      const data = await response.get();
      await data.docs.forEach((documentSnapshot) => {
        items.push({
          difficulty: documentSnapshot.data().difficulty,
          answer: documentSnapshot.data().answer,
        });
      });
      setFirebaseAnswer(items);
      return items;
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };

  const fetchAllAnswer = async () => {
    try {
      let items = [];
      const response = db.collection('DQH_AllAnswer');
      const data = await response.get();
      await data.docs.forEach((documentSnapshot) => {
        items.push({ img: documentSnapshot.data().img });
      });
      await fetchImg(items);
      setFirebaseAllAnswer(items);
      setLoading(false);
      return items;
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };

  const fetchImg = async (items) => {
    try {
      await Promise.all(
        items.map(async (item) => {
          let starsRef = storage.ref('DQHImg/' + item.img);
          await starsRef
            .getDownloadURL()
            .then((url) => {
              item.url = url;
            })
            .catch((error) => {
              console.log(error);
              return null;
            });
        }),
      );
    } catch (error) {
      console.log(error);
    }
  };

  const getAll = async () => {
    if (firebaseAnswer.length === 0) {
      const question = await fetchAnswer();
      const all = await fetchAllAnswer();
      addQuestion(all, question);
      addAnswer(all, question[indexQuestion], 3);
    }
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
      {isImgLoading && <Loading active={isImgLoading} />}
      <Header>
        <Title>De quem é o híbrido?</Title>
        <Close onClick={() => onClose()}>
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </Close>
      </Header>
      <Content>
        <ProgressContainer>
          <CustomSlider
            value={progress}
            aria-labelledby="continuous-slider"
            min={0}
            max={6}
            style={{
              borderRadius: 20,
            }}
          />
        </ProgressContainer>
        <QuestionContainer>
          <QuestionSquare>
            {question.length > 0 && (
              <Img
                src={question[0]}
                style={{ display: isImgLoading ? 'none' : 'block' }}
                onLoad={() => handleLoaderImg()}
              />
            )}
          </QuestionSquare>
          <Question>+</Question>
          <QuestionSquare>
            {question.length > 0 && (
              <Img
                src={question[1]}
                style={{ display: isImgLoading ? 'none' : 'block' }}
                onLoad={() => handleLoaderImg()}
              />
            )}
          </QuestionSquare>
          <Question>{'= ?'}</Question>
        </QuestionContainer>
        <AnswerSquareContainer>
          {allAnswer.length > 0 &&
            allAnswer.map((element, index) => {
              return (
                <AnswerSquare
                  key={index}
                  active={answer[index]}
                  onClick={() => handleClick(index)}
                >
                  <Img
                    src={element.url}
                    style={{ display: isImgLoading ? 'none' : 'block' }}
                    onLoad={() => handleLoaderImg()}
                  />
                </AnswerSquare>
              );
            })}
        </AnswerSquareContainer>
      </Content>
      {rightOrWeong[0] && <MsgStatus onClick={handleClickNext} right={true} />}
      {rightOrWeong[1] && (
        <MsgStatus onClick={handleClickAgain} right={false} />
      )}
    </ModalContainer>
  );
}

ModalGame1.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalGame1;
