import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import { storage } from '../../../services/firestore';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCog } from '@fortawesome/free-solid-svg-icons';
import Slider from '@material-ui/core/Slider';
import Loading from '../../../components/Loading/index';

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
  SpeedContainer,
  ButtonSpeed,
  ProgressContainer,
  ProgressText,
} from './styles';

function ModalGame1({ item, onClose }) {
  const [isLoading, setLoading] = useState(true);
  const [play, setPlay] = useState(false);
  const [progress, setProgress] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [start, setStart] = useState('00:00');
  const [end, setEnd] = useState('00:00');
  const [seeking, setSeeking] = useState(false);
  const playedRef = useRef({});

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSpeed = (value) => {
    setPlaybackRate(value);
  };

  const fetchImg = async () => {
    try {
      let starsRef = storage.ref('PodcastsAudio/' + item.audio);
      await starsRef
        .getDownloadURL()
        .then((url) => {
          item.audio = url;
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
          return null;
        });
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImg();
  }, []);

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

  if (isLoading)
    return (
      <ModalContainer>
        <Loading active={isLoading} />
      </ModalContainer>
    );

  return (
    <ModalContainer>
      <ImgContainer>
        <ImgStyle src={item.urlImg} />
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
        <Text>{item.description}</Text>
      </TextContainer>
      <PlayContainer>
        <ButtonPlay active={play} onClick={() => setPlay(!play)}>
          {play ? 'Pause' : 'Play'}
        </ButtonPlay>
        <SpeedContainer>
          <ButtonSpeed onClick={handleClick}>
            <FontAwesomeIcon icon={faCog} size="lg" />
          </ButtonSpeed>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: 40 * 4.5,
                width: '8ch',
              },
            }}
          >
            <MenuItem
              selected={playbackRate === 1}
              onClick={() => {
                handleClose();
                handleSpeed(1);
              }}
            >
              {'1x'}
            </MenuItem>
            <MenuItem
              selected={playbackRate === 1.5}
              onClick={() => {
                handleClose();
                handleSpeed(1.5);
              }}
            >
              {'1.5x'}
            </MenuItem>
            <MenuItem
              selected={playbackRate === 2}
              onClick={() => {
                handleClose();
                handleSpeed(2);
              }}
            >
              {'2x'}
            </MenuItem>
          </Menu>
        </SpeedContainer>
        <ReactPlayer
          ref={playedRef}
          width={0}
          height={0}
          playing={play}
          onProgress={onProgress}
          playbackRate={playbackRate}
          onDuration={onDuration}
          url={item.audio}
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
