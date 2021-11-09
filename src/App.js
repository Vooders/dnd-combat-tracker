import './App.css';
import Character from './Character'
import { Container, Col, Row } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
      <Row>
        <Col>
        <div className="App">
          <header className="App-header">
            <Character name='Ork 1' hp={30}/>
            <Character name='Ork 2' hp={40}/>
          </header>
        </div>
        </Col>
      </Row>
    </Container>
    
  );
}

export default App;
