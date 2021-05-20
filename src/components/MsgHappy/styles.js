import styled from 'styled-components';
import * as color from '../../config/colors';
import * as fonts from '../../config/fonts';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;

  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  background: ${color.colorGreen2};
`;

export const Title = styled.div`
  color: ${color.white};
  font-size: ${fonts.md};
  font-weight: 700;
  user-select: none;
  text-align: center;
`;

export const Text = styled.div`
  color: ${color.white};
  font-size: ${fonts.md};
  user-select: none;
  text-align: center;
`;

export const Img = styled.img`
  height: 40%;
  width: auto;
`;

export const Button = styled.div`
  width: 180px;
  height: 60px;
  border-radius: 20px;
  background: ${color.primaryColor};
  color: ${color.secondColor};
  font-size: ${fonts.normal};
  font-weight: 700;
  user-select: none;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  :hover {
    opacity: 0.7;
  }

  -webkit-tap-highlight-color: transparent;
`;
