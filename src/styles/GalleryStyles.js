import styled from 'styled-components';
import * as color from '../config/colors';
import * as fonts from '../config/fonts';
import { respondToDown } from '../config/respondTo';

export const Gallery = styled.div`
  width: 100%;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: ${(props) => (props.space ? 'space-between' : 'flex-start')};

  ${respondToDown.md`
    justify-content: center;
  `};
`;

export const ItemsContainer = styled.div`
  /* display: inline-block; */
  width: ${(props) => (props.horizontal ? '320px' : '200px')};
  height: ${(props) => (props.horizontal ? '190px' : '300px')};
  cursor: pointer;
  position: relative;

  -webkit-tap-highlight-color: transparent;

  ${respondToDown.md`
    width: ${(props) => (props.horizontal ? '270px' : '150px')};
    height: ${(props) => (props.horizontal ? '140px' : '250px')};
  `}
`;

export const NewIdentifier = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 3;

  width: 45px;
  height: 55px;
  background: ${color.colorRed};
  border-radius: 0 0 0 20px;

  display: ${(props) => (props.active ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;

  ${respondToDown.sm`
    width: 35px;
    height: 45px;
  `}
`;

export const TextNewIdentifier = styled.div`
  color: ${color.white};
  font-weight: 700;
  font-size: ${fonts.sm};

  ${respondToDown.sm`
    font-size: ${fonts.xs};
  `}
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  transition: all ease 0.2s;
  border-radius: 5px;
  box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  position: relative;

  transform: scale(0.9);
  :hover {
    transform: scale(1);
  }
`;

export const Override = styled.div`
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.5;
  z-index: 2;
  position: absolute;
  top: 0;
`;

export const Title = styled.div`
  width: 50%;
  z-index: 3;
  color: ${color.white};
  font-weight: 700;
  font-size: ${fonts.normal};
  position: absolute;
  top: 60%;
  left: 15px;
  user-select: none;
`;

export const ImgList = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
