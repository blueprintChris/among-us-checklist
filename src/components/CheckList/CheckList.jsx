import React, { useContext } from 'react';
import CrewContext from '../../context/CrewContext';
import { Wrapper, Note, Name } from './styles';
import Check from '../Check';

const CheckList = (props) => {
  const { isActive, crewmate } = props;
  const { crewList, setCrewList } = useContext(CrewContext);

  const handleOnChange = (e, state) => {
    const newState = { ...crewmate.states[state] }
    newState.state = e.target.checked;

    const updatedCrewmate = { ...crewmate };
    updatedCrewmate.states[state] = newState;

    const newCrewList = [...crewList];
    const index = newCrewList.indexOf(crewmate);

    if (updatedCrewmate.states.isDead.state) {
      newCrewList.push(newCrewList.splice(index, 1)[0])
    }

    setCrewList(newCrewList);
  };

  return (
    <Wrapper>
      <Name placeholder={crewmate.name} disabled={!isActive} />
      {Object.keys(crewmate.states).map(state =>
        <Check
          key={crewmate.states[state].name}
          colour={crewmate.states[state].colour}
          name={crewmate.states[state].name}
          isActive={isActive}
          handleOnChange={(e) => handleOnChange(e, state)}
          textSize="1.5rem"
          size="25px"
        />
      )}
      <Note placeholder="Notes..." disabled={!isActive} />
    </Wrapper>
  );
}

export default CheckList;