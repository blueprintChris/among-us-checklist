import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 30px;
  margin-right: 5px;

  @media only screen and (max-width: 420px) {
    margin-right: 5px;
    height: 20px;
  }

  @media only screen and (max-width: 380px) {
    margin-right: 4px;
    height: 16px;
  }
`;

export const Avatar = styled.img`
  height: 100%;
`;