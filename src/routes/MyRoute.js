import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

function MyRoute({ component: Component, isClosed, ...rest }) {
  if (isClosed) {
    return (
      <Redirect
        to={{ pathname: '/', state: { prevPath: rest.location.pathname } }}
      />
    );
  }

  return <Route {...rest} component={Component} />;
}

MyRoute.defaultProps = {
  isClosed: false,
};

MyRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isClosed: PropTypes.bool,
};

export default MyRoute;