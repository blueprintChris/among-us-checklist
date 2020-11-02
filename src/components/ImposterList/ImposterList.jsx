import React, { useContext } from 'react';
import CrewContext from '../../context/CrewContext';
import Imposter from '../Imposter';
import { Wrapper, Label } from './styles';

const ImposterList = () => {
  const { crewList } = useContext(CrewContext);
  console.log(crewList)

  return (
    <Wrapper>
      <Label>Potential Imposter(s): </Label>
      {crewList.map(imposter =>
        imposter.isActive && !imposter.states.isDead.state && !imposter.states.isSafe.state && <Imposter imposter={imposter} key={imposter.name} />
      )}
    </Wrapper>
  );
}

export default ImposterList;