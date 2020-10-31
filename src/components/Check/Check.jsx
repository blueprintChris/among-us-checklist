import React from 'react';
import { Wrapper, Container, Checkbox, Checkmark } from './styles';

const Check = (props) => {
  const { label, colour } = props;

  return (
    <Wrapper>
      <Container colour={colour}>{label}
        <Checkbox />
        <Checkmark />
      </Container>
    </Wrapper>
  );
}

export default Check;