import styled from 'styled-components';
import bg from './img/bg.png';
import { MainLayout } from './styles/Layouts';
import Orb from './Components/Orb/orb';
import Navigation from './Components/Navigation/Navigation';
import { useMemo, useState } from 'react';
function App() {
  const [active, setActive] = useState(1);

  const dispalyData = () => {
    switch (active) {
      case 1:
      //  return <Dashboard />;
    }
  };
  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);
  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <MainLayout>
        <Navigation
          active={active}
          setActive={setActive}
        ></Navigation>
        <main>{dispalyData()}</main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;

    overflow: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;
export default App;
