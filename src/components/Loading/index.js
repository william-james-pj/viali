import React from 'react';
import * as colors from '../../config/colors';

import CircularProgress from '@material-ui/core/CircularProgress';
import { LoaderContainer } from './styles';

function Loading() {
  return (
    <LoaderContainer>
      <CircularProgress style={{ color: colors.colorGreen1 }} />
    </LoaderContainer>
  );
}

export default Loading;
