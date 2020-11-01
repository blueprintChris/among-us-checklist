import React from 'react';
import { Wrapper, Note } from './styles';
import Check from '../Check';
import { checklist } from '../../data';

const CheckList = (props) => {
  const { isActive } = props;

  return (
    <Wrapper>
      {checklist.map(check =>
        <Check key={check.label} label={check.label} isActive={isActive} colour={check.colour} />
      )}
      <Note placeholder="Notes..." disabled={!isActive} />
    </Wrapper>
  );
}

export default CheckList;