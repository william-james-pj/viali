import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Slider from '@material-ui/core/Slider';

import { Close } from '../../../styles/Modal';

import {
  ModalContainer,
  ImgContainer,
  ImgStyle,
  TextContainer,
  Header,
  Title,
  CloseContainer,
  Text,
  PlayContainer,
  ButtonPlay,
  ProgressContainer,
  ProgressText,
} from './styles';

function ModalGame1({ item, onClose }) {
  const [play, setPlay] = useState(false);
  const [progress, setProgress] = useState(0);
  const [start, setStart] = useState('00:00');
  const [end, setEnd] = useState('00:00');
  const [seeking, setSeeking] = useState(false);
  const playedRef = useRef({});

  const formartDate = (seconds) => {
    let date = new Date(0);
    date.setSeconds(seconds);
    return date.toISOString().substr(14, 5);
  };

  const onProgress = ({ played, playedSeconds }) => {
    if (seeking) return;
    setProgress(played);
    setStart(formartDate(playedSeconds));
  };

  const onDuration = (duration) => {
    setEnd(formartDate(duration));
  };

  const handleSeekChange = (event, newValue) => {
    setSeeking(true);
    if (playedRef.current !== null) {
      playedRef.current.seekTo(newValue);
    }
    setTimeout(() => setSeeking(false), 800);
  };

  return (
    <ModalContainer>
      <ImgContainer>
        <ImgStyle src={item.img} />
      </ImgContainer>
      <TextContainer>
        <Header>
          <Title>{item.title}</Title>
          <CloseContainer>
            <Close onClick={() => onClose()}>
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </Close>
          </CloseContainer>
        </Header>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu
          semper nisi, sit amet euismod dui. Duis vel diam quis ante molestie
          lobortis vitae nec nisi. Morbi ac mollis ligula.
        </Text>
      </TextContainer>
      <PlayContainer>
        <ButtonPlay active={play} onClick={() => setPlay(!play)}>
          {play ? 'Pause' : 'Play'}
        </ButtonPlay>
        <ReactPlayer
          ref={playedRef}
          width={0}
          height={0}
          playing={play}
          onProgress={onProgress}
          onDuration={onDuration}
          url="https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3"
        />
        <ProgressContainer>
          <ProgressText>{start}</ProgressText>
          <Slider
            min={0}
            max={0.999999}
            step={0.03}
            value={progress}
            onChange={handleSeekChange}
            aria-labelledby="continuous-slider"
          />
          <ProgressText>{end}</ProgressText>
        </ProgressContainer>
      </PlayContainer>
    </ModalContainer>
  );
}

ModalGame1.propTypes = {
  onClose: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

export default ModalGame1;
