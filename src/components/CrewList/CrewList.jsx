import React from 'react'
import { Wrapper } from './styles';
import Crewmate from '../Crewmate';
import { crew } from '../../data';

const CrewList = () => {
  return (
    <Wrapper>
      { crew.map(crewMate =>
        <Crewmate key={crewMate.name} src={crewMate.src} colour={crewMate.colour} />
      )}

    </Wrapper>
  );
}

export default CrewList;