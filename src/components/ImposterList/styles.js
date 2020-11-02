import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 10px;

  @media only screen and (max-width: 630px) {
    margin-top: 5px;
  }
`;

export const Label = styled.div`
  font-size: 25px;
  color: white;
  margin-right: 20px;
`;


