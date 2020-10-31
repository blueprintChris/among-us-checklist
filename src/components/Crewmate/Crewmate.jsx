import React, { useState, useContext } from 'react'
import CrewContext from '../../context/CrewContext';
import CheckList from '../CheckList'
import { Wrapper, Avatar } from './styles';

const Crewmate = (props) => {
  const { activeCrew, inactiveCrew, setActiveCrew, setInactiveCrew } = useContext(CrewContext)
  const { crewmate } = props;
  const { src, colour } = crewmate;

  const handleActiveCrewmate = () => {

    const newCrew = activeCrew.filter(item => item !== crewmate);
    setActiveCrew(newCrew);

    inactiveCrew.push(crewmate);
    // setInactiveCrew(inactiveCrew)
  };

  return (
    <Wrapper colour={colour}>
      <Avatar src={src} onClick={handleActiveCrewmate} />
      <CheckList />
    </Wrapper>
  );
}

export default Crewmate;