import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  MsgComponent,
  MsgText,
  ButtonContainer,
  ButtonMsg,
} from './styles';

function MsgStatus({ onClick, right }) {
  if (right) {
    return (
      <Container right={right}>
        <MsgComponent>
          <MsgText titleProps={true}>Parabéns!!</MsgText>
          <MsgText>{'Você é dez :)'}</MsgText>
        </MsgComponent>
        <ButtonContainer>
          <ButtonMsg right={true} onClick={onClick}>
            Próxima
          </ButtonMsg>
        </ButtonContainer>
      </Container>
    );
  }

  return (
    <Container right={right}>
      <MsgComponent>
        <MsgText titleProps={true}>Ops...</MsgText>
        <MsgText>{'Não foi dessa vez, tente novamente!'}</MsgText>
      </MsgComponent>
      <ButtonContainer>
        <ButtonMsg right={false} onClick={onClick}>
          Novamente
        </ButtonMsg>
      </ButtonContainer>
    </Container>
  );
}

MsgStatus.propTypes = {
  onClick: PropTypes.func.isRequired,
  right: PropTypes.bool.isRequired,
};

export default MsgStatus;
