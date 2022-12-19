import { Col, Container, Row } from 'react-bootstrap';
import User from './components/User/User';
// import UserTable from './components/UserTable/UserTable';

function App() {
  return (
    <Container className='py-5'>
      <h1>Users Table</h1>
      <Row>
        <Col md={12}>
          {/* <UserTable /> */}
          <User></User>
        </Col>
      </Row>

    </Container>

  );
}

export default App;
