import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  font-weight: 600;

  @media only screen and (max-width: 630px) {
    flex-wrap: wrap;
  }
`;

export const Note = styled.input`
  height: 20px;
  flex: 1;
  border-radius: 5px;
  border: 1px solid grey;
  padding: 5px;
  line-height: 1.2rem;
  min-width: 200px;
  font-family: 'Joffrey';
  font-size: 25px;

  @media only screen and (max-width: 630px) {
    display: none;
  }
`;