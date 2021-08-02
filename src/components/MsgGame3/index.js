import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  MsgComponent,
  MsgTitle,
  MsgText,
  ButtonContainer,
  ButtonMsg,
} from './styles';

function MsgGame3({ onClick, msg, title }) {
  return (
    <Container>
      <MsgComponent>
        <MsgTitle>{title}</MsgTitle>
        <MsgText>{msg}</MsgText>
      </MsgComponent>
      <ButtonContainer>
        <ButtonMsg onClick={onClick}>Continuar</ButtonMsg>
      </ButtonContainer>
    </Container>
  );
}

MsgGame3.propTypes = {
  onClick: PropTypes.func.isRequired,
  msg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MsgGame3;
