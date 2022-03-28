import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
const containerHeader = () =>{
    return<>
    <Navbar bg="light" variant="light" className='row'>
    <Container className='col-8'>    
      <Nav className='ms-auto'>
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#projects">Projects</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
    </>
}

export default containerHeader