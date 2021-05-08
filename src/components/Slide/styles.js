import styled from 'styled-components';
import * as color from '../../config/colors';
// import * as fonts from '../../config/fonts';

export const Container = styled.div`
  overflow-x: hidden;
  position: relative;
`;

export const ArrowContainer = styled.div`
  position: absolute;
  width: 40px;
  height: 225px;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: rgba(300, 300, 300, 0.5);
  cursor: pointer;
  opacity: 0;
  transition: all ease 0.3s;
  -webkit-tap-highlight-color: transparent;
  color: ${color.colorGreen2};

  ${Container}:hover & {
    opacity: 1;
  }
`;

export const Left = styled(ArrowContainer)`
  left: 0;
`;

export const Right = styled(ArrowContainer)`
  right: 0;
`;

export const List = styled.div`
  padding-left: 20px;
  transition: all ease 0.5s;
`;

export const Items = styled.div`
  display: inline-block;
  width: 150px;
  height: 225px;
  cursor: pointer;
`;

export const ImgList = styled.img`
  width: 100%;
  height: 100%;
  transform: scale(0.9);
  transition: all ease 0.2s;
  border-radius: 5px;

  :hover {
    transform: scale(1);
  }
`;
