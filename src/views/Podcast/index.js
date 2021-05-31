import React, { useState, useEffect } from 'react';
import { db, storage } from '../../services/firestore';

import Modal from '@material-ui/core/Modal';
import ModalPodcast from './ModalPodcast/index';
import { ModalPosition } from '../../styles/Modal';

import MyHeader from '../../components/MyHeader/index';
import ImgPath from '../../assets/img/podcast.svg';
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

function Podcast() {
  const [isLoading, setLoading] = useState(true);
  const [isImgLoading, setImgLoading] = useState(true);
  const [firebaseData, setFirebaseData] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalObj, setModalObj] = useState({});

  const handleModal = (obj) => {
    setModalObj(obj);
    setModal(!modal);
  };

  const fetchData = async () => {
    try {
      let items = [];
      const response = db.collection('Podcasts');
      const data = await response.get();
      await data.docs.forEach((documentSnapshot) => {
        items.push({
          title: documentSnapshot.data().title,
          urlImg: documentSnapshot.data().img,
          description: documentSnapshot.data().description,
          audio: documentSnapshot.data().audio,
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
          let starsRef = storage.ref('PodcastsImg/' + item.urlImg);
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
        text={'Podcasts'}
        imgPath={ImgPath}
      />
      <Text>Originais ViALi</Text>
      <GalleryContainer>
        <Gallery>
          {firebaseData.length > 0 &&
            firebaseData.map((item) => {
              return (
                <ItemsContainer key={item.title} horizontal={false}>
                  <Item onClick={() => handleModal({ ...item })}>
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
            <ModalPodcast onClose={handleModal} item={modalObj} />
          </ModalPosition>
        }
      </Modal>
    </Container>
  );
}

export default Podcast;
