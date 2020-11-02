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
    height: 130%;
  }
`
export const Strikethrough = styled.div`
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(197,9,9,1) 15%, rgba(197,9,9,1) 85%, rgba(197,9,9,0) 100%);
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 9999;
  border-radius: 100%;
`;