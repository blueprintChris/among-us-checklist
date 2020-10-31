import React from 'react'
import { Wrapper, Avatar, Note, Content } from './styles';
import Check from '../Check';

const Crewmate = (props) => {
  const { src, colour } = props;
  return (
    <Wrapper colour={colour}>
      <Avatar src={src} />
      <Content>
        <Check label="Safe" />
        <Check label="Sus" />
        <Check label="Dead" />
        <Note placeholder="Notes.." />
      </Content>
    </Wrapper>
  );
}

export default Crewmate;