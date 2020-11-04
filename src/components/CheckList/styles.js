import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  font-weight: 600;
  justify-content: space-between;
`;


export const Name = styled.input`
  max-height: 20px;
  border-radius: 5px;
  border: 1px solid grey;
  padding: 5px;
  line-height: 1.2rem;
  font-family: 'Joffrey';
  font-size: 25px;  
  max-width: 100px;

  &:enabled {
    background-color: rgba(0,0,0,0);
    &::placeholder  {
      color: black;
    }
  }

  @media only screen and (max-width: 630px) {
    display: none;
  }
`;

export const Note = styled.input`
  max-height: 20px;
  border-radius: 5px;
  border: 1px solid grey;
  padding: 5px;
  line-height: 1.2rem;
  font-family: 'Joffrey';
  font-size: 25px;

  @media only screen and (max-width: 630px) {
    display: none;
  }
`;