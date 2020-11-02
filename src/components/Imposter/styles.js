import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 30px;
  width: 30px;
  margin: 0 5px;
  margin-bottom: 5px;

  @media only screen and (max-width: 630px) {
    margin: 0 2px;
    margin-bottom: 2px;
  }
`;

export const Avatar = styled.img`
  height: 100%;
`;