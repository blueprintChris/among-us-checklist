import { Wrapper, Content } from './styles';
import CrewList from './components/CrewList';
import Header from './components/Header';

function App() {
  return (
    <Wrapper>
      <Content>
        <Header />
        <CrewList />
      </Content>
    </Wrapper>
  );
}

export default App;
