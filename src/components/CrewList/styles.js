import styled from 'styled-components';

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const Label = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  font-size: 25px;
  color: white;
  margin: 10px 0 5px 0;
`;

export const Subtext = styled.div`
  font-size: 1rem;
`;
