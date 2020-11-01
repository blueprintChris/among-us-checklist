import styled from 'styled-components';

export const Wrapper = styled.div`
background: url('images/space-tile.gif');
  display: flex;
  justify-content: center;
  min-width: 330px;
  padding: 20px;
  height: calc(100vh - 40px);
`;

export const Content = styled.div`
  width: 100%;
  border: 1px solid black;
  max-width: 720px;
  display: flex;
  flex-direction: column;
`;