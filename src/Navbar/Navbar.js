import './Navbar.css';
import { Navbar, Container, Nav } from 'react-bootstrap';


function Navbarre() {
    return (

        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className="navy" href="#home"><h1 className="title">Ma To Do list, en React Js</h1></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Formulaire</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>

    );


}

export default Navbarre;