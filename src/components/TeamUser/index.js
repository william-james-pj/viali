import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  AvatarContainer,
  AvatarBorder,
  Avatar,
  TextName,
  TextDescription,
} from './styles';

function TeamUser({ name, description }) {
  return (
    <Container>
      <AvatarContainer>
        <AvatarBorder>
          <Avatar></Avatar>
        </AvatarBorder>
      </AvatarContainer>
      <TextName>{name}</TextName>
      <TextDescription>{description}</TextDescription>
    </Container>
  );
}

TeamUser.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default TeamUser;
