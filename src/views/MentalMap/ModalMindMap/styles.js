import styled from 'styled-components';
// import * as color from '../../../config/colors';
// import * as fonts from '../../../config/fonts';
import { respondToDown } from '../../../config/respondTo';

export const ModalContainer = styled.div`
  width: 70vw;
  height: 85vh;
  max-width: 930px;
  max-height: 570px;

  border-radius: 20px;
  overflow: hidden;
  position: relative;

  ${respondToDown.sm`
    width: 90vw;
    height: auto;
  `}
`;

export const ButtonClose = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const ImgComponent = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
