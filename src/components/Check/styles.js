import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 20px;

  @media only screen and (max-width: 630px) {
    margin-right: 10px;
  }
`;

export const Checkmark = styled.span`
  position: absolute;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 5px;
  border: 1px solid black;

  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })``;

export const Container = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 17px;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked ~ ${Checkmark} {
      &:after {
        display: block;
      }
    }
  }

  input {
    &:checked ~ ${Checkmark} {
      background-color: ${props => props.colour};
    }
  }

  &:hover {
    ${Checkmark} {
      background-color: #ccc;
    }
  }

  ${Checkmark} {
    &:after {
      left: 9px;
      top: 4px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
`;

