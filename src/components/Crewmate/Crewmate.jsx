import React, { useContext } from 'react'
import CrewContext from '../../context/CrewContext';
import CheckList from '../CheckList'
import { Wrapper, Avatar } from './styles';

const Crewmate = (props) => {
  const { crewList, setCrewList } = useContext(CrewContext);
  const { crewmate } = props;
  const { src, colour } = crewmate;

  const handleActiveCrewmate = () => {
    const newCrewmate = { ...crewmate };
    newCrewmate.isActive = !newCrewmate.isActive;

    const newCrewList = [...crewList];
    const index = newCrewList.indexOf(crewmate);
    newCrewList.splice(index, 1, newCrewmate)

    setCrewList(newCrewList);
  };

  return (
    <Wrapper colour={colour} isActive={crewmate.isActive}>
      <Avatar src={src} onClick={handleActiveCrewmate} />
      <CheckList />
    </Wrapper>
  );
}

export default Crewmate;