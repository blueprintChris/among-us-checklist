import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  border: 1px solid grey;
  width: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
  position: relative;
  background-color: ${props => props.isActive ? '#cccccc' : 'grey'};

  @media only screen and (max-width: 630px) {
    padding: 5px 10px;
  }
`;

export const ImgWrapper = styled.div`
  height: 100%;
  width: 30px;
  position: relative;
  margin-right: 20px;

  @media only screen and (max-width: 630px) {
    margin-right: 30px;
    margin-top: -5px;
    width: 20px;
  }
`;

export const Avatar = styled.img`
  height: 100%;
  position: absolute;
  cursor: pointer;

  ${props => !props.isActive && `opacity: 0.5;`}

  @media only screen and (max-width: 630px) {
    height: 100%;
  }
`;