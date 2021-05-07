/* eslint-disable react/prop-types */
import React from 'react';
import { useLocation } from 'react-router-dom';
import history from '../../services/history';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faMicrophoneAlt,
  faGamepad,
  faBrain,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

import { Container, Menu, MenuItem, Item } from './styles';

function BarLeft(props) {
  const location = useLocation();

  return (
    <Container>
      <Menu>
        <MenuItem>
          <Item
            active={location.pathname == '/' ? true : false}
            onClick={() => {
              history.push('/');
              props.menuClick();
            }}
          >
            <FontAwesomeIcon icon={faHome} size="lg" />
          </Item>
        </MenuItem>
        <MenuItem>
          <Item
            active={location.pathname == '/podcast' ? true : false}
            onClick={() => {
              history.push('/podcast');
              props.menuClick();
            }}
          >
            <FontAwesomeIcon icon={faMicrophoneAlt} size="lg" />
          </Item>
        </MenuItem>
        <MenuItem>
          <Item
            active={location.pathname == '/game' ? true : false}
            onClick={() => {
              history.push('/game');
              props.menuClick();
            }}
          >
            <FontAwesomeIcon icon={faGamepad} size="lg" />
          </Item>
        </MenuItem>
        <MenuItem>
          <Item
            active={location.pathname == '/mentalmap' ? true : false}
            onClick={() => {
              history.push('/mentalmap');
              props.menuClick();
            }}
          >
            <FontAwesomeIcon icon={faBrain} size="lg" />
          </Item>
        </MenuItem>
        <MenuItem>
          <Item
            active={location.pathname == '/aboutus' ? true : false}
            onClick={() => {
              history.push('/aboutus');
              props.menuClick();
            }}
          >
            <FontAwesomeIcon icon={faUsers} size="lg" />
          </Item>
        </MenuItem>
      </Menu>
    </Container>
  );
}

export default BarLeft;
