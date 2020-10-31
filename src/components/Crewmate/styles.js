import styled from 'styled-components';
import { Container, Checkmark } from '../Check/styles';

export const Wrapper = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid grey;
  width: 100%;
  flex: 1;
  padding: 10px 30px;
  box-sizing: border-box;

  ${Container} {
    input {
      &:checked ~ ${Checkmark} {
        background-color: ${props => props.colour};
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media only screen and (max-width: 630px) {
    flex-wrap: wrap;
  }
`;

export const Avatar = styled.img`
  height: 100%;
  width: 30px;
  margin-right: 20px;
`;

export const Note = styled.input`
  height: 100%;

  @media only screen and (max-width: 630px) {
    width: 100%;
    margin-top: 10px;
  }
`;