import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { Close } from '../../../styles/Modal';

import { ModalContainer, ImgComponent, ButtonClose } from './styles';

function ModalGame1({ url, onClose }) {
  return (
    <ModalContainer>
      <ImgComponent src={url} />
      <ButtonClose>
        <Close onClick={() => onClose()}>
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </Close>
      </ButtonClose>
    </ModalContainer>
  );
}

ModalGame1.propTypes = {
  onClose: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
};

export default ModalGame1;
