import styled from 'styled-components';
import { hex2rgba } from '../../hex2Rgba'

export const Wrapper = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid grey;
  width: 100%;
  flex: 1;
  padding: 10px 20px;
  box-sizing: border-box;
  background-color: ${props => props.isActive ? hex2rgba(props.colour, 0.2) : 'grey'};

  @media only screen and (max-width: 630px) {
    padding: 5px 20px;
  }
`;


export const Avatar = styled.img`
  width: 30px;
  margin-right: 20px;
  cursor: pointer;

  @media only screen and (max-width: 630px) {
    width: 30px;
  }
`;