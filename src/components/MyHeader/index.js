import React from 'react';
import PropTypes from 'prop-types';

import { Container, TextContainer, Text, ImgContainer, Img } from './styles';

function MyHeader({ title, text, imgPath }) {
  return (
    <Container>
      <TextContainer>
        <Text>{title}</Text>
        <Text style={{ marginTop: '10px' }}>{text}</Text>
      </TextContainer>
      <ImgContainer>
        <Img alt="test" src={imgPath} />
      </ImgContainer>
    </Container>
  );
}

MyHeader.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imgPath: PropTypes.string.isRequired,
};

export default MyHeader;
