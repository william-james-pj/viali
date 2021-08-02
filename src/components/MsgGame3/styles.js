import styled from 'styled-components';
import * as color from '../../config/colors';
import * as fonts from '../../config/fonts';
import { respondToDown } from '../../config/respondTo';

export const Container = styled.div`
  width: 100%;
  height: 50%;

  position: absolute;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;

  background: ${color.successColor};

  ${respondToDown.sm`
     padding: 10px;
     justify-content: center;
  `}
`;

export const MsgComponent = styled.div`
  width: 100%;
  height: 55%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px;

  ${respondToDown.sm`
     padding: 10px;
  `}
`;

export const MsgTitle = styled.div`
  font-weight: 700;
  color: ${color.white2};
  font-size: ${fonts.md};
  user-select: none;
  text-align: center;
`;

export const MsgText = styled.div`
  color: ${color.white2};
  font-size: ${fonts.normal};
  user-select: none;
  text-align: center;

  margin-top: 15px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  user-select: none;

  ${respondToDown.sm`
    margin-top: 30px;
  `}
`;

export const ButtonMsg = styled.div`
  width: 300px;
  height: 50px;
  background: ${color.primaryColor};

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  cursor: pointer;

  -webkit-tap-highlight-color: transparent;

  font-weight: 700;
  color: ${color.successColor};
  font-size: ${fonts.normal};
  user-select: none;

  ${respondToDown.sm`
    width: 200px;
    height: 40px;
    font-size: ${fonts.sm};
  `}

  :hover {
    opacity: 0.6;
  }
`;
