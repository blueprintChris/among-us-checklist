import styled from 'styled-components';
import { hex2rgba } from '../../helpers/hex2Rgba';

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid grey;
  width: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
  position: relative;
  background-color: #cccccc;
  /* background: linear-gradient(90deg, ${props => hex2rgba(props.colour, 0.8)} 0%, #cccccc 40%, #cccccc 100%); */

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
  top: 0;
  left: 0;
  cursor: pointer;

  ${props => !props.isActive && `opacity: 0.5;`}

  @media only screen and (max-width: 630px) {
    height: 100%;
  }
`
export const Strikethrough = styled.div`
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(197,9,9,1) 10%, rgba(197,9,9,1) 90%, rgba(197,9,9,0) 100%);
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 9999;
  border-radius: 100%;
`;