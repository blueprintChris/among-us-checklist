import React from 'react';
import { Wrapper, Note } from './styles';
import Check from '../Check';

const CheckList = (props) => {
  const { isActive, crewmate } = props;

  return (
    <Wrapper>
      {Object.keys(crewmate.states).map(state =>
        <Check key={crewmate.states[state].name} crewmate={crewmate} state={state} isActive={isActive} />
      )}
      <Note placeholder="Notes..." disabled={!isActive} />
    </Wrapper>
  );
}

export default CheckList;