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

  background: ${(props) =>
    props.right ? color.successColor : color.errorColor};
`;

export const MsgComponent = styled.div`
  width: 100%;
  height: 55%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
`;

export const MsgText = styled.div`
  font-weight: ${(props) => (props.titleProps ? '700' : '400')};
  color: ${color.white2};
  font-size: ${fonts.md};
  user-select: none;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  user-select: none;

  ${respondToDown.sm`
    margin-top: 10px;
  `}
`;

export const ButtonMsg = styled.div`
  width: 450px;
  height: 70px;
  background: ${color.primaryColor};

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  cursor: pointer;

  -webkit-tap-highlight-color: transparent;

  font-weight: 700;
  color: ${(props) => (props.right ? color.successColor : color.errorColor)};
  font-size: ${fonts.md};
  user-select: none;

  ${respondToDown.sm`
    width: 350px;
    height: 50px;
    font-size: ${fonts.sm};
  `}

  :hover {
    opacity: 0.6;
  }
`;
