import React, { useContext } from 'react'
import CrewContext from '../../context/CrewContext';
import CheckList from '../CheckList'
import { Wrapper, Avatar, ImgWrapper } from './styles';

const Crewmate = (props) => {
  const { crewList, setCrewList } = useContext(CrewContext);
  const { crewmate } = props;
  const { src, deadSrc, colour } = crewmate;

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
      {/* {!crewmate.isActive && <Strikethrough />} */}
      <ImgWrapper>
        <Avatar src={!crewmate.states.isDead.state ? src : deadSrc} isActive={crewmate.isActive} onClick={handleActiveCrewmate} />
      </ImgWrapper>
      <CheckList isActive={crewmate.isActive} crewmate={crewmate} />
    </Wrapper>
  );
}

export default Crewmate;