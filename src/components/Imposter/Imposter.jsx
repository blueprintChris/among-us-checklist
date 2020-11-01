import React from 'react';
import { Wrapper, Avatar } from './styles';

const Imposter = (props) => {
  const { imposter } = props;

  return (
    <Wrapper>
      <Avatar src={imposter.src} />
    </Wrapper>
  );
}

export default Imposter;