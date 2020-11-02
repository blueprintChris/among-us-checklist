import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;

  @media only screen and (max-width: 630px) {
    height: 30px;
  }
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