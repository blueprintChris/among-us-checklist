import React from 'react';
import { Wrapper, Logo, Label, Link } from './styles';

const Header = () => {
  return (
    <Wrapper>
      <Link href="/"><Logo src="images/logo-white.png" /></Link>
      <Label>mong Us: Crewmate Checklist</Label>

    </Wrapper>
  );
}

export default Header;