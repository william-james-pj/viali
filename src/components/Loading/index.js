import React from 'react';
import PropTypes from 'prop-types';
import * as colors from '../../config/colors';

import { useLoading, BallTriangle } from '@agney/react-loading';
import { LoaderContainer } from './styles';

function Loading({ active }) {
  const { containerProps, indicatorEl } = useLoading({
    loading: active,
    loaderProps: {
      style: { color: colors.colorGreen1 },
    },
    indicator: <BallTriangle width="50" />,
  });

  return <LoaderContainer {...containerProps}>{indicatorEl}</LoaderContainer>;
}

Loading.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default Loading;
