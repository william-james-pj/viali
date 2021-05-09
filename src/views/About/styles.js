import styled from 'styled-components';
// import * as color from '../../config/colors';
// import * as fonts from '../../config/fonts';
import { respondToDown } from '../../config/respondTo';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 30px;
`;

export const TeamContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 30px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  ${respondToDown.md`
    flex-direction: column;
    align-items: space-around;
    justify-content: center;
  `}
`;
