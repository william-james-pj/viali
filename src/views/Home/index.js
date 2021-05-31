import React, { useState, useEffect } from 'react';
import { db, storage } from '../../services/firestore';

import MyHeader from '../../components/MyHeader/index';
import ImgPath from '../../assets/img/welcome.svg';
import Loading from '../../components/Loading/index';

import {
  Container,
  TextContainer,
  BoxContainer,
  Box,
  ImgBox,
  TextBox,
  Img,
  Override,
} from './styles';

function Home() {
  const [isLoading, setLoading] = useState(true);
  const [isImgLoading, setImgLoading] = useState(true);
  const [firebaseData, setFirebaseData] = useState([]);

  const fetchData = async () => {
    try {
      let items = [];
      const response = db.collection('Home');
      const data = await response.get();
      await data.docs.forEach((documentSnapshot) => {
        items.push({
          text: documentSnapshot.data().text,
          img: documentSnapshot.data().img,
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
          let starsRef = storage.ref('Home/' + item.img);
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
        title={'Olá! Seja bem-vindo (a) ao'}
        text={'ViALi'}
        imgPath={ImgPath}
      />
      <TextContainer>O que é a ViALi?</TextContainer>
      <BoxContainer>
        {firebaseData.length > 0 &&
          firebaseData.map((item, key) => {
            return (
              <Box key={key}>
                {isImgLoading && <Loading active={isImgLoading} />}
                <ImgBox>
                  <Img
                    src={item.url}
                    style={{ display: isImgLoading ? 'none' : 'block' }}
                    onLoad={() => setImgLoading(false)}
                  />
                </ImgBox>
                <TextBox>{item.text}</TextBox>
                <Override></Override>
              </Box>
            );
          })}
      </BoxContainer>
    </Container>
  );
}

export default Home;
