import styled from 'styled-components';
import bg from './img/bg.png';
import { MainLayout } from './styles/Layouts';
import Orb from './components/Orb/orb';
import Navigation from './components/Navigation/Navigation';
import { useState } from 'react';
function App() {
  const [active, setActive] = useState(1);

  return (
    <AppStyled bg={bg} className="App">
      <Orb></Orb>
      <MainLayout>
        <Navigation
          active={active}
          setActive={setActive}
        ></Navigation>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  backgound-image: url(${(props) => props.bg});
  position: relative;
`;
export default App;
