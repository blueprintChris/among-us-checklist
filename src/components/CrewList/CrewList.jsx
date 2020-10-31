import React from 'react'
import { Wrapper, Label } from './styles';
import Crewmate from '../Crewmate';

const CrewList = (props) => {
  const { label, crew } = props;

  return (
    <Wrapper>
      <Label>{label}</Label>
      {crew.map(crewmate =>
        <Crewmate key={crewmate.name} crewmate={crewmate} />
      )}
    </Wrapper>
  );
}

export default CrewList;