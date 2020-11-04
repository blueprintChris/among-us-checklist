import React from 'react';
import { Wrapper, Container, Checkbox, Checkmark } from './styles';

const Check = (props) => {
  const { colour, name, isActive, handleOnChange, textColour, textSize, size } = props;

  return (
    <Wrapper>
      <Container colour={colour} isActive={!isActive} textColour={textColour} textSize={textSize} size={size}>
        {name}
        <Checkbox disabled={!isActive} onChange={handleOnChange} />
        <Checkmark />
      </Container>
    </Wrapper>
  );
}

export default Check;