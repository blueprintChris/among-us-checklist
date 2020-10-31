import { useState } from 'react';
import CrewContext from './context/CrewContext';
import CrewList from './components/CrewList';
import Header from './components/Header';
import { crew } from './data';
import { Wrapper, Content } from './styles';


function App() {
  const [activeCrew, setActiveCrew] = useState(crew);
  const [inactiveCrew, setInactiveCrew] = useState([])

  return (
    <Wrapper>
      <CrewContext.Provider value={{ activeCrew, inactiveCrew, setActiveCrew, setInactiveCrew }}>
        <Content>
          <Header />
          <CrewList label="Active Crewmates" crew={activeCrew} />
          <CrewList label="Inactive Crewmates" crew={inactiveCrew} />
        </Content>
      </CrewContext.Provider>
    </Wrapper>
  );
}

export default App;
