import React, { useState, useEffect } from 'react';
import { db } from '../../services/firestore';

import MyHeader from '../../components/MyHeader/index';
import ImgPath from '../../assets/img/play-game.svg';
import Loading from '../../components/Loading/index';

import { Container, Text, GalleryContainer } from './styles';
import {
  Gallery,
  ItemsContainer,
  Item,
  // ImgList,
  Override,
  Title,
} from '../../styles/GalleryStyles';

function Game() {
  const [isLoading, setLoading] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [firebaseData, setFirebaseData] = useState([]);

  const fetchData = async () => {
    try {
      let items = [];
      const response = db.collection('Games');
      const data = await response.get();
      data.docs.forEach((documentSnapshot) => {
        items.push({
          title: documentSnapshot.data().title,
        });
      });
      setFirebaseData(items);
      setLoading(false);
    } catch (error) {
      setLoading(true);
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
        text={'Jogos'}
        imgPath={ImgPath}
      />
      <Text>Populares</Text>
      <GalleryContainer>
        <Gallery>
          {firebaseData.length > 0 &&
            firebaseData.map((item) => {
              return (
                <ItemsContainer key={item.title} horizontal={true}>
                  <Item>
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

export default Game;
