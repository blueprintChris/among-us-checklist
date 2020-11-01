import React, { useContext } from 'react';
import CrewContext from '../../context/CrewContext';
import Imposter from '../Imposter';
import { Wrapper, Label } from './styles';

const ImposterList = (props) => {
  const { imposterList } = useContext(CrewContext);

  return (
    <Wrapper>
      <Label>Potential Imposter(s): </Label>
      {imposterList.map(imposter =>
        <Imposter imposter={imposter} key={imposter.name} />
      )}
    </Wrapper>
  );
}

export default ImposterList;