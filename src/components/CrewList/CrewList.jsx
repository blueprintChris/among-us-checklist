import React from 'react'
import { Wrapper, Label } from './styles';
import Crewmate from '../Crewmate';

const CrewList = (props) => {
  const { crew } = props;

  return (
    <Wrapper>
      {crew.find(crewmate =>
        crewmate.isActive) && <Label>Active Crewmates</Label>
      }
      {crew.map(crewmate =>
        crewmate.isActive && <Crewmate key={crewmate.name} crewmate={crewmate} />
      )}
      {crew.find(crewmate =>
        !crewmate.isActive) && <Label>Inactive Crewmates</Label>
      }
      {crew.map(crewmate =>
        !crewmate.isActive && <Crewmate key={crewmate.name} crewmate={crewmate} />
      )}
    </Wrapper>
  );
}

export default CrewList;