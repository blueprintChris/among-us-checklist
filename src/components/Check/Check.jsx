import React from 'react';
import { Wrapper, Container, Checkbox, Checkmark } from './styles';

const Check = (props) => {
  const { label, colour, isActive } = props;

  return (
    <Wrapper>
      <Container colour={colour} >{label}
        <Checkbox disabled={!isActive} />
        <Checkmark />
      </Container>
    </Wrapper>
  );
}

export default Check;