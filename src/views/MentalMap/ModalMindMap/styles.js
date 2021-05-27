import styled from 'styled-components';
// import * as color from '../../../config/colors';
// import * as fonts from '../../../config/fonts';
// import { respondToDown } from '../../../config/respondTo';

export const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 930px;
  max-height: 570px;

  border-radius: 5px;
  overflow: hidden;
  position: relative;
`;

export const ButtonClose = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const ImgComponent = styled.img`
  width: 100%;
  height: auto;
`;
