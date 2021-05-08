import React from 'react';
import PropTypes from 'prop-types';

import { Container, ItemsContainer, Item, ImgList, Override } from './styles';
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
];

function Gallery({ horizontal }) {
  return (
    <Container>
      {items.length > 0 &&
        items.map((item, key) => {
          return (
            <ItemsContainer key={key} horizontal={horizontal}>
              <Item>
                <ImgList src={item.imgUrl} />
                <Override></Override>
              </Item>
            </ItemsContainer>
          );
        })}
    </Container>
  );
}

Gallery.propTypes = {
  horizontal: PropTypes.bool.isRequired,
};

export default Gallery;
