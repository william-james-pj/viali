import styled from 'styled-components';
import * as color from '../../../config/colors';
import * as fonts from '../../../config/fonts';
import { respondToDown } from '../../../config/respondTo';

export const ModalContainer = styled.div`
  width: 70vw;
  height: 85vh;

  max-width: 600px;
  max-height: 400px;

  overflow: hidden;
  position: relative;
  background: ${color.white2};
  border-radius: 20px;
  padding: 20px;

  display: grid;
  grid-template-columns: 0.6fr 1.4fr;
  grid-template-rows: 1.4fr 0.6fr;
  gap: 0px 0px;
  grid-template-areas:
    'ImgContainer TextContainer'
    'PlayContainer PlayContainer';

  ${respondToDown.sm`
    grid-template-columns: 0.8fr 1.2fr;
    padding: 10px;
    width: 95vw;
  `}
`;

export const ImgContainer = styled.div`
  grid-area: ImgContainer;
  border-radius: 10px;
  overflow: hidden;
`;

export const ImgStyle = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TextContainer = styled.div`
  grid-area: TextContainer;
  padding: 10px 10px 10px 20px;

  ${respondToDown.sm`
    padding: 5px 5px 5px 10px;
  `}
`;

export const Header = styled.div`
  height: auto;
  display: grid;
  grid-template-columns: 1.5fr 0.5fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: 'Title Close';
`;

export const Title = styled.div`
  grid-area: Title;
  align-self: center;
  color: ${color.colorGreen2};
  font-weight: 700;
  font-size: ${fonts.md};

  ${respondToDown.sm`
    font-size: ${fonts.sm};
  `}
`;

export const Text = styled.div`
  margin-top: 30px;
  color: ${color.blackText};
  font-size: ${fonts.normal};
  line-height: 1.5;

  ${respondToDown.sm`
    font-size: ${fonts.sm};
  `}
`;

export const CloseContainer = styled.div`
  grid-area: Close;
  align-self: start;
  justify-self: end;
`;

export const PlayContainer = styled.div`
  grid-area: PlayContainer;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ButtonPlay = styled.div`
  width: 120px;
  height: 50px;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${color.white};
  font-weight: 700;
  cursor: pointer;

  background: ${(props) =>
    props.active ? color.colorGreen1 : color.colorGreen2};
  box-shadow: ${(props) =>
    props.active ? '' : '1px 4px 4px 1px rgba(0, 0, 0, 0.25)'};
  -webkit-tap-highlight-color: transparent;

  :hover {
    opacity: 0.8;
  }

  ${respondToDown.sm`
    width: 100px;
    font-size: ${fonts.sm};
  `}
`;

export const ProgressContainer = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  ${respondToDown.sm`
    
  `}
`;

export const ProgressText = styled.div`
  color: ${color.blackText};
  padding-inline: 10px;
`;
