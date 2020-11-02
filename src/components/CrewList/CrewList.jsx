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
          <List>
            <Label>Active Crewmates<Subtext>&nbsp;(Click on crewmate to remove from game)</Subtext></Label>
            {crew.map(crewmate =>
              crewmate.isActive && <Crewmate key={crewmate.name} crewmate={crewmate} />
            )}
            <ImposterList />
            {crew.find(crewmate =>
              !crewmate.isActive) &&
              <Label>Inactive Crewmates</Label>
            }
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