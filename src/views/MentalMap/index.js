import React, { useState, useEffect } from 'react';
import { db, storage } from '../../services/firestore';

import Modal from '@material-ui/core/Modal';
import ModalMindMap from './ModalMindMap/index';
import { ModalPosition } from '../../styles/Modal';

import MyHeader from '../../components/MyHeader/index';
import ImgPath from '../../assets/img/mind-maps.svg';
import Loading from '../../components/Loading/index';

import { Container, Text, GalleryContainer } from './styles';
import {
  Gallery,
  ItemsContainer,
  NewIdentifier,
  TextNewIdentifier,
  Item,
  ImgList,
  Override,
  Title,
} from '../../styles/GalleryStyles';

function MentalMap() {
  const [isLoading, setLoading] = useState(true);
  const [isImgLoading, setImgLoading] = useState(true);
  const [firebaseData, setFirebaseData] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalImg, setModalImg] = useState('');

  const handleModal = (url) => {
    setModalImg(url);
    setModal(!modal);
  };

  const fetchData = async () => {
    try {
      let items = [];
      const response = db.collection('MindMaps');
      const data = await response.get();
      data.docs.forEach((documentSnapshot) => {
        items.push({
          title: documentSnapshot.data().title,
          urlImg: documentSnapshot.data().img,
          new: documentSnapshot.data().new,
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
          let starsRef = storage.ref('MindMapsImg/' + item.urlImg);
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
        title={'Ol??! Seja bem-vindo (a) aos'}
        text={'Mapas Mentais'}
        imgPath={ImgPath}
      />
      <Text>Em alta</Text>
      <GalleryContainer>
        <Gallery space={firebaseData.length >= 3 ? true : false}>
          {firebaseData.length > 0 &&
            firebaseData.map((item) => {
              return (
                <ItemsContainer key={item.title} horizontal={true}>
                  <Item onClick={() => handleModal(item.urlImg)}>
                    <NewIdentifier active={item.new}>
                      <TextNewIdentifier>Novo</TextNewIdentifier>
                    </NewIdentifier>
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
            <ModalMindMap onClose={handleModal} url={modalImg} />
          </ModalPosition>
        }
      </Modal>
    </Container>
  );
}

export default MentalMap;
