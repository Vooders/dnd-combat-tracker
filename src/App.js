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
            <Character hp={30}/>
          </header>
        </div>
        </Col>
      </Row>
    </Container>
    
  );
}

export default App;
