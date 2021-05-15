import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Loading from '../Loading/index';

import {
  Container,
  AvatarContainer,
  AvatarBorder,
  Avatar,
  Img,
  TextName,
  TextDescription,
} from './styles';

function TeamUser({ name, description, urlImg }) {
  const [isImgLoading, setImgLoading] = useState(true);

  return (
    <Container>
      <AvatarContainer>
        <AvatarBorder>
          <Avatar>
            {isImgLoading && <Loading active={isImgLoading} />}
            <Img
              src={urlImg}
              style={{ display: isImgLoading ? 'none' : 'block' }}
              onLoad={() => setImgLoading(false)}
            />
          </Avatar>
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
  urlImg: PropTypes.string.isRequired,
};

export default TeamUser;
