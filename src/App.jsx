import RootRoutes from '@/routes';
import Header from '@/components/Header';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Header />
        <Body>
          <RootRoutes />
        </Body>
      </BrowserRouter>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  margin: 0;
`;

const Body = styled.div`
  padding: 10px;
`;
