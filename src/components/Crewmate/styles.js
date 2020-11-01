import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid grey;
  width: 100%;
  flex: 1;
  padding: 10px 20px;
  box-sizing: border-box;
  background-color: ${props => props.isActive ? '#cccccc' : 'grey'};

  @media only screen and (max-width: 630px) {
    padding: 5px 20px;
  }
`;

export const ImgWrapper = styled.div`
  min-width: 40px;
  height: 40px;
  margin-right: 20px;
  cursor: pointer;
  display: flex;
  justify-content: flex;
  align-items: flex;


  @media only screen and (max-width: 630px) {
    width: 30px;
  }
`;

export const Avatar = styled.img`
  height: 100%;
`;