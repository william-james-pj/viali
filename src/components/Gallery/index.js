import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  ItemsContainer,
  Item,
  ImgList,
  Override,
  Title,
} from './styles';

function Gallery({ horizontal, items }) {
  return (
    <Container>
      {items.length > 0 &&
        items.map((item, key) => {
          return (
            <ItemsContainer key={key} horizontal={horizontal}>
              <Item>
                <ImgList src={item.imgUrl} />
                <Title>{item.title}</Title>
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
  items: PropTypes.array.isRequired,
};

export default Gallery;
