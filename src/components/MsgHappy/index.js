import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Container, Title, Text, Button, Img } from './styles';

import ImgPath from '../../assets/img/winner.png';
import Loading from '../Loading/index';

function MsgHappy({ onClose }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Container>
      {isLoading && <Loading active={isLoading} />}
      <Title>Uau, você é muito inteligente!!!</Title>
      <Img
        src={ImgPath}
        style={{ display: isLoading ? 'none' : 'block' }}
        onLoad={() => setLoading(false)}
      />
      <Text>Parabéns, você acertou todas as perguntas.</Text>
      <Button onClick={() => onClose()}>Fechar</Button>
    </Container>
  );
}

MsgHappy.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default MsgHappy;
