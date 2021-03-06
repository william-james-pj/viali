import styled from 'styled-components';
// import * as color from '../../config/colors';
// import * as fonts from '../../config/fonts';
import { respondToDown } from '../../config/respondTo';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 30px;
  overflow-x: hidden;
`;

export const TeamContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 30px;

  display: flex;
  align-items: flex-start;
  justify-content: space-around;

  ${respondToDown.md`
    flex-direction: column;
    align-items: space-around;
    justify-content: center;
    margin-bottom: 80px;
  `}
`;
