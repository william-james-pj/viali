import styled from 'styled-components';
import * as color from '../../config/colors';

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  z-index: 999;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  left: 0;
  background: ${color.white2};
`;
