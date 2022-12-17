import { Col, Container, Row } from 'react-bootstrap';
import UserTable from './components/UserTable/UserTable';

function App() {
  return (
    <Container className='py-5'>
      <h1>Users Table</h1>
      <Row>
        <Col md={12}>
          <UserTable />
        </Col>
      </Row>

    </Container>

  );
}

export default App;
