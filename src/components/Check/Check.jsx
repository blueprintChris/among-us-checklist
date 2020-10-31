import React from 'react';
import { Wrapper, Container, Checkbox, Checkmark } from './styles';

const Check = (props) => {
  const { label } = props;

  return (
    <Wrapper>
      <Container>{label}
        <Checkbox />
        <Checkmark />
      </Container>
    </Wrapper>
  );
}

export default Check;