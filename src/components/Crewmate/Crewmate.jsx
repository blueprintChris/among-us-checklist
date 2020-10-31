import React, { useState } from 'react'
import { Wrapper, Avatar } from './styles';
import CheckList from '../CheckList'

const Crewmate = (props) => {
  const [isActive, setIsActive] = useState(true);
  const { src, colour } = props;

  const handleActiveCrewmate = () => {
    setIsActive(!isActive)
  };

  return (
    <Wrapper colour={colour} isActive={isActive}>
      <Avatar src={src} onClick={handleActiveCrewmate} />
      <CheckList isActive={isActive} />
    </Wrapper>
  );
}

export default Crewmate;