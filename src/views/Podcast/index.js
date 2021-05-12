import React, { useState, useEffect } from 'react';
import { db, storage } from '../../services/firestore';

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

  const fetchData = async () => {
    try {
      let items = [];
      const response = db.collection('Podcasts');
      const data = await response.get();
      await data.docs.forEach((documentSnapshot) => {
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
        title={'Olá seja bem-vindo ao'}
        text={'Podcast'}
        imgPath={ImgPath}
      />
      <Text>Originais ViALi</Text>
      <GalleryContainer>
        <Gallery>
          {firebaseData.length > 0 &&
            firebaseData.map((item) => {
              return (
                <ItemsContainer key={item.title} horizontal={false}>
                  <Item>
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
    </Container>
  );
}

export default Podcast;
