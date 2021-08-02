import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { db, storage } from '../../../services/firestore';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Loading from '../../../components/Loading/index';
import MsgGame3 from '../../../components/MsgGame3';
import MsgHappy from '../../../components/MsgHappy';
import MsgStatus from '../../../components/MsgStatus';

import {
  ModalContainer,
  Header,
  Title,
  Close,
  Content,
} from '../../../styles/Modal';

import * as S from './styles';

function ModalGame3({ onClose }) {
  const [isLoading, setLoading] = useState(true);
  const [isImgLoading, setImgLoading] = useState(true);
  const [allLoading, setAllLoading] = React.useState(0);
  const [rightOrWeong, setRightOrWeong] = useState([false, false]);
  const [firebaseImg, setFirebaseImg] = useState([]);
  const [firebaseText, setFirebaseText] = useState([]);
  const [answerSelect, setAnswerSelect] = useState([false, false, false]);
  const [imgSelect, setImgSelect] = useState([false, false, false]);
  const [itemSelect, setItemSelect] = useState({});
  const [right, setRight] = useState([false, false, false]);
  const [end, setEnd] = useState(false);

  const handleAnswerSelect = (indexActive) => {
    let newArray = [...answerSelect];

    const selected = newArray.findIndex((item) => item === true);
    if (selected !== -1 && selected !== indexActive) return;

    if (right[indexActive]) return;

    newArray[indexActive] = !newArray[indexActive];
    setAnswerSelect(newArray);
  };

  const handlImgSelect = (indexActive) => {
    let newArray = [...imgSelect];

    const selected = newArray.findIndex((item) => item === true);
    if (selected !== -1 && selected !== indexActive) return;

    if (right[indexActive]) return;

    newArray[indexActive] = !newArray[indexActive];
    setImgSelect(newArray);
  };

  const handleLoaderImg = () => {
    setAllLoading(allLoading + 1);
    if (allLoading === 2) {
      setImgLoading(false);
    }
  };

  const check = () => {
    const selectedText = answerSelect.findIndex((item) => item === true);
    const selectedImg = imgSelect.findIndex((item) => item === true);

    if (selectedText === -1 || selectedImg === -1) return;

    if (selectedImg !== selectedText) {
      setRightOrWeong([false, true]);
      setImgSelect([false, false, false]);
      setAnswerSelect([false, false, false]);
      return;
    }

    const rightCheck = [...right];
    rightCheck[selectedText] = !rightCheck[selectedText];

    setItemSelect(firebaseText.find((x) => x.index == selectedText));
    setRight(rightCheck);
    setRightOrWeong([true, false]);

    setImgSelect([false, false, false]);
    setAnswerSelect([false, false, false]);
  };

  const closeMsg = () => {
    setRightOrWeong([false, false]);
    if (right[0] && right[1] && right[2]) setEnd(true);
  };

  function shuffle(array) {
    var currentIndex = array.length,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const fetch = async () => {
    try {
      let dataImg = [];
      let dataText = [];
      const response = db.collection('OT-All');
      const data = await response.get();
      await data.docs.forEach((documentSnapshot) => {
        dataImg.push({
          img: documentSnapshot.data().img,
          index: documentSnapshot.data().index,
        });
        dataText.push({
          title: documentSnapshot.data().title,
          index: documentSnapshot.data().index,
          msg: documentSnapshot.data().msg,
        });
      });
      await fetchImg(dataImg);
      shuffle(dataImg);
      shuffle(dataText);
      setFirebaseImg(dataImg);
      setFirebaseText(dataText);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };

  const fetchImg = async (items) => {
    try {
      await Promise.all(
        items.map(async (item) => {
          let starsRef = storage.ref('OTImg/' + item.img);
          await starsRef
            .getDownloadURL()
            .then((url) => {
              item.img = url;
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

  useEffect(() => {
    fetch();
    return () => {};
  }, []);

  useEffect(() => {
    check();
    return () => {};
  }, [answerSelect, imgSelect]);

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
        <Title>Os triblásticos</Title>
        <Close onClick={() => onClose()}>
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </Close>
      </Header>
      <Content>
        <S.Row>
          <S.ImgContainer>
            {firebaseImg.map((element) => {
              return (
                <S.ImgDiv
                  key={`${element.index}-img`}
                  onClick={() => handlImgSelect(element.index)}
                  active={imgSelect[element.index]}
                  right={right[element.index]}
                >
                  <S.Img src={element.img} onLoad={() => handleLoaderImg()} />
                </S.ImgDiv>
              );
            })}
          </S.ImgContainer>
          <S.ButtonContainer>
            {firebaseText.map((element) => {
              return (
                <S.Button
                  key={`${element.index}-text`}
                  onClick={() => handleAnswerSelect(element.index)}
                  active={answerSelect[element.index]}
                  right={right[element.index]}
                >
                  {element.title}
                </S.Button>
              );
            })}
          </S.ButtonContainer>
        </S.Row>
      </Content>
      {rightOrWeong[0] ? (
        <MsgGame3
          onClick={closeMsg}
          msg={itemSelect.msg}
          title={itemSelect.title}
        />
      ) : (
        ''
      )}
      {rightOrWeong[1] ? <MsgStatus onClick={closeMsg} right={false} /> : ''}
    </ModalContainer>
  );
}

ModalGame3.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalGame3;
