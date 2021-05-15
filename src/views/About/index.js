import React, { useState, useEffect } from 'react';
import { db, storage } from '../../services/firestore';

import MyHeader from '../../components/MyHeader/index';
import ImgPath from '../../assets/img/team.svg';
import TeamUser from '../../components/TeamUser/index';
import Loading from '../../components/Loading/index';

import { Container, TeamContainer } from './styles';

function About() {
  const [isLoading, setLoading] = useState(true);
  const [firebaseData, setFirebaseData] = useState([]);

  const fetchData = async () => {
    try {
      let items = [];
      const response = db.collection('Team');
      const data = await response.get();
      await data.docs.forEach((documentSnapshot) => {
        items.push({
          name: documentSnapshot.data().name,
          description: documentSnapshot.data().description,
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
          let starsRef = storage.ref('TeamImg/' + item.urlImg);
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
      <MyHeader title={'Conheça nosso'} text={'Time'} imgPath={ImgPath} />
      <TeamContainer>
        {firebaseData.length > 0 &&
          firebaseData.map((item) => {
            return (
              <TeamUser
                key={item.name}
                name={item.name}
                description={item.description}
                urlImg={item.urlImg}
              />
            );
          })}
      </TeamContainer>
    </Container>
  );
}

export default About;
