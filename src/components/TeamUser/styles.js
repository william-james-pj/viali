import styled from 'styled-components';
import * as color from '../../config/colors';
import * as fonts from '../../config/fonts';
import { respondToDown } from '../../config/respondTo';

export const Container = styled.div`
  width: 240px;
  height: 300px;
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${respondToDown.md`
    margin-bottom: 30px;
  `}
`;

export const AvatarContainer = styled.div`
  width: 65%;
  height: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AvatarBorder = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${color.white2};
  border: 7px solid ${color.colorGreen2};
  border-radius: 50%;
  box-sizing: border-box;
`;

export const Avatar = styled.div`
  width: 90%;
  height: 90%;
  background: gray;
  border-radius: 50%;
`;

export const TextName = styled.div`
  width: 100%;
  margin-top: 20px;
  text-align: center;
  font-size: ${fonts.normal};
  font-weight: 700;
`;

export const TextDescription = styled.div`
  width: 100%;
  margin-top: 15px;
  text-align: center;
  font-size: ${fonts.normal};
`;
