import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import { Container, List, Items, ImgList, Left, Right } from './styles';
import ImgPath from '../../assets/img/virus.png';

const items = [
  {
    imgUrl: ImgPath,
  },
  {
    imgUrl: ImgPath,
  },
  {
    imgUrl: ImgPath,
  },
  {
    imgUrl: ImgPath,
  },
  {
    imgUrl: ImgPath,
  },
  {
    imgUrl: ImgPath,
  },
  {
    imgUrl: ImgPath,
  },
  {
    imgUrl: ImgPath,
  },
  {
    imgUrl: ImgPath,
  },
  {
    imgUrl: ImgPath,
  },
];

function Slide() {
  const [scrollX, setScrollX] = useState(30);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) x = 30;
    setScrollX(x);
  };

  const handRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = 150 * (items.length + 1);
    if (window.innerWidth - listW > x) x = window.innerWidth - listW - 60;
    setScrollX(x);
  };

  return (
    <Container>
      <Left onClick={handleLeftArrow}>
        <FontAwesomeIcon icon={faChevronLeft} size="3x" />
      </Left>
      <Right onClick={handRightArrow}>
        <FontAwesomeIcon icon={faChevronRight} size="3x" />
      </Right>
      <List style={{ marginLeft: scrollX, width: 150 * (items.length + 1) }}>
        {items.length > 0 &&
          items.map((item, key) => {
            return (
              <Items key={key}>
                <ImgList src={item.imgUrl} />
              </Items>
            );
          })}
      </List>
    </Container>
  );
}

export default Slide;
