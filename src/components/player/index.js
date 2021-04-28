import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';
import { Container, Button, FeatureButton, Overlay, Inner, Close } from './styles/player';

export const PlayerContext = createContext();

export default function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}

Player.Video = function PlayerVideo({ src, ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay onClick={() => setShowPlayer(false)} {...restProps}>
          <Inner>
            <video id='netflix-player' controls autoPlay='autoplay'>
              <source src={src} type='video/mp4' />
            </video>
          </Inner>
          <Close />
        </Overlay>,
        document.body
      )
    : null;
};

Player.Button = function PlayerButton({ ...restProps }) {
  // eslint-disable-next-line no-unused-vars
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return (
    <Button {...restProps} onClick={() => setShowPlayer((showPlayer) => !showPlayer)}>
      Play
    </Button>
  );
};

Player.FeatureButton = function PlayerFeatureButton({ ...restProps }) {
  // eslint-disable-next-line no-unused-vars
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return (
    <FeatureButton {...restProps} onClick={() => setShowPlayer((showPlayer) => !showPlayer)}>
      Play Now
    </FeatureButton>
  );
};
