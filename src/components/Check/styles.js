import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-grow: 2;
`;

export const Checkmark = styled.span`
  position: absolute;
  left: 0;
  background-color: #eee;
  border-radius: 5px;
  cursor: pointer;

  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`;

export const Container = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-left: 35px;
  font-size: ${props => props.textSize};
  color: ${props => !props.isActive ? props.textColour : '#666666'};

  input {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;

    &:disabled ~ ${Checkmark} {
      background-color: grey;
      cursor: default;
    }

    &:checked ~ ${Checkmark} {
      background-color: ${props => props.colour};

      &:after {
        display: block;
      }
    }
  }

  ${Checkmark} {
    height: ${props => props.size};
    width: ${props => props.size};
    border: 1px solid ${props => !props.isActive ? '#000000' : '#666666'};

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

export const Checkbox = styled.input.attrs({ type: 'checkbox' })``;