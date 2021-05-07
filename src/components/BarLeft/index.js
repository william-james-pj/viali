import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faMicrophoneAlt,
  faGamepad,
  faBrain,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

import { Container, Menu, MenuItem, Item } from './styles';

function BarLeft() {
  return (
    <Container>
      <Menu>
        <MenuItem>
          <Item active={true}>
            <FontAwesomeIcon icon={faHome} size="lg" />
          </Item>
        </MenuItem>
        <MenuItem>
          <Item active={false}>
            <FontAwesomeIcon icon={faMicrophoneAlt} size="lg" />
          </Item>
        </MenuItem>
        <MenuItem>
          <Item active={false}>
            <FontAwesomeIcon icon={faGamepad} size="lg" />
          </Item>
        </MenuItem>
        <MenuItem>
          <Item active={false}>
            <FontAwesomeIcon icon={faBrain} size="lg" />
          </Item>
        </MenuItem>
        <MenuItem>
          <Item active={false}>
            <FontAwesomeIcon icon={faUsers} size="lg" />
          </Item>
        </MenuItem>
      </Menu>
    </Container>
  );
}

export default BarLeft;
