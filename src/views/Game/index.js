import React, { useState, useEffect } from 'react';
import { db, storage } from '../../services/firestore';

import Modal from '@material-ui/core/Modal';
import ModalGame1 from './ModalGame1/index';
import ModalGame2 from './ModalGame2/index';
import ModalGame3 from './ModalGame3/index';
import { ModalPosition } from '../../styles/Modal';

import MyHeader from '../../components/MyHeader/index';
import ImgPath from '../../assets/img/play-game.svg';
import Loading from '../../components/Loading/index';

import { Container, Text, GalleryContainer } from './styles';
import {
  Gallery,
  ItemsContainer,
  Item,
  ImgList,
  Override,
  Title,
} from '../../styles/GalleryStyles';

function Game() {
  const [isLoading, setLoading] = useState(true);
  const [isImgLoading, setImgLoading] = useState(true);
  const [firebaseData, setFirebaseData] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalOpe, setModalOpe] = useState('');

  const handleModal = () => {
    setModal(!modal);
  };

  const fetchData = async () => {
    try {
      let items = [];
      const response = db.collection('Games');
      const data = await response.get();
      data.docs.forEach((documentSnapshot) => {
        items.push({
          title: documentSnapshot.data().title,
          urlImg: documentSnapshot.data().img,
        });
      });
      await fetchImg(items);
      setFirebaseData(items);
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
          let starsRef = storage.ref('GamesImg/' + item.urlImg);
          await starsRef
            .getDownloadURL()
            .then((url) => {
              item.urlImg = url;
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
    fetchData();
  }, []);

  if (isLoading)
    return (
      <Container>
        <Loading active={isLoading} />
      </Container>
    );

  return (
    <Container>
      <MyHeader
        title={'Olá! Seja bem-vindo (a) aos'}
        text={'Jogos'}
        imgPath={ImgPath}
      />
      <Text>Populares</Text>
      <GalleryContainer>
        <Gallery space={firebaseData.length >= 3 ? true : false}>
          {firebaseData.length > 0 &&
            firebaseData.map((item) => {
              return (
                <ItemsContainer key={item.title} horizontal={true}>
                  <Item
                    onClick={() => {
                      setModalOpe(item.title);
                      handleModal();
                    }}
                  >
                    {isImgLoading && <Loading active={isImgLoading} />}
                    <ImgList
                      src={item.urlImg}
                      style={{ display: isImgLoading ? 'none' : 'block' }}
                      onLoad={() => setImgLoading(false)}
                    />
                    <Title>{item.title}</Title>
                    <Override></Override>
                  </Item>
                </ItemsContainer>
              );
            })}
        </Gallery>
      </GalleryContainer>
      <Modal open={modal} onClose={handleModal}>
        {
          <ModalPosition>
            {modalOpe === 'De quem é o híbrido?' ? (
              <ModalGame1 onClose={handleModal} />
            ) : modalOpe === 'Baralho dos seres vivos' ? (
              <ModalGame2 onClose={handleModal} />
            ) : (
              <ModalGame3 onClose={handleModal} />
            )}
          </ModalPosition>
        }
      </Modal>
    </Container>
  );
}

export default Game;
