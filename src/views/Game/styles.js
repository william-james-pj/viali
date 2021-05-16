import styled from 'styled-components';
import * as color from '../../config/colors';
// import * as fonts from '../../config/fonts';
import { respondToDown } from '../../config/respondTo';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
`;

export const Text = styled.div`
  width: 100%;
  font-weight: 700;
  margin-top: 35px;
  margin-bottom: 20px;
  color: ${color.blackText};
`;

export const GalleryContainer = styled.div`
  width: 100%;
  height: auto;

  ${respondToDown.md`
    margin-bottom: 50px;
  `}
`;
