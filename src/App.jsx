import { useState } from 'react';
import CrewContext from './context/CrewContext';
import CrewList from './components/CrewList';
import Header from './components/Header';
import { Wrapper, Content } from './styles';
import { crew } from './data'

function App() {
  const [crewList, setCrewList] = useState(crew);
  const [imposterList, setImposterList] = useState(crew);

  return (
    <Wrapper>
      <CrewContext.Provider value={{ crewList, setCrewList, imposterList, setImposterList }}>
        <Content>
          <Header />
          <CrewList crew={crewList} />
        </Content>
      </CrewContext.Provider>
    </Wrapper>
  );
}

export default App;
