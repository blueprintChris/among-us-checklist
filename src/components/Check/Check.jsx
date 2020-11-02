import React, { useContext } from 'react';
import CrewContext from '../../context/CrewContext';
import { Wrapper, Container, Checkbox, Checkmark } from './styles';

const Check = (props) => {
  const { crewmate, state, isActive } = props;
  const { crewList, setCrewList } = useContext(CrewContext);

  const handleOnChange = (e) => {
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
      <Container colour={crewmate.states[state].colour}>{crewmate.states[state].name}
        <Checkbox disabled={!isActive} onChange={handleOnChange} />
        <Checkmark />
      </Container>
    </Wrapper>
  );
}

export default Check;