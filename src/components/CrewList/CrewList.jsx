import React from 'react'
import { Wrapper, List, ListWrapper, Label, Subtext } from './styles';
import Crewmate from '../Crewmate';
import ImposterList from '../ImposterList';

const CrewList = (props) => {
  const { crew } = props;

  return (
    <Wrapper>
      {crew.find(crewmate =>
        crewmate.isActive) &&
        <ListWrapper>
          <Label>Active Crewmates<Subtext>&nbsp;(Click on crewmate to remove from game)</Subtext></Label>
          <List>
            {crew.map(crewmate =>
              crewmate.isActive && <Crewmate key={crewmate.name} crewmate={crewmate} />
            )}
          </List>
        </ListWrapper>
      }
      <ImposterList />
      {crew.find(crewmate =>
        !crewmate.isActive) &&
        <ListWrapper>
          <Label>Inactive Crewmates</Label>
          <List>
            {crew.map(crewmate =>
              !crewmate.isActive && <Crewmate key={crewmate.name} crewmate={crewmate} />
            )}
          </List>
        </ListWrapper>
      }
    </Wrapper>
  );
}

export default CrewList;