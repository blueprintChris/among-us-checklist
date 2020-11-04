import React from 'react';
import { Wrapper, Logo, Label, Link, Subtext, HeaderWrapper, SubtextWrapper } from './styles';

const Header = () => {
  return (
    <Wrapper>
      <SubtextWrapper>
        <HeaderWrapper>
          <Link href="/"><Logo src="images/logo-white.png" /></Link>
          <Label>mong Us: Crewmate Checklist</Label>
        </HeaderWrapper>
        <Subtext>by blueprintchris</Subtext>
      </SubtextWrapper>
    </Wrapper>
  );
}

export default Header;