import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 50px;
  margin-bottom: 10px;

  @media only screen and (max-width: 630px) {
    height: 30px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  height: 100%;
`;

export const Logo = styled.img`
  height: 100%;
`;

export const Label = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: baseline;
  height: 100%;
  font-size: 3.5rem;
  color: white;

  @media only screen and (max-width: 630px) {
    font-size: 2.1rem;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const SubtextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Subtext = styled.div`
  margin-top: 5px;
  align-self: flex-end;
  font-size: 0.8rem;
  color: white;
`;