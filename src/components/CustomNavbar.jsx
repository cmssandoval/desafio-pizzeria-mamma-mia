import Container from 'react-bootstrap/Container';
import CustomButton from './CustomButton';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CustomNavbar() {
    const total = 25000;
    const token = false;

    return (
        <Navbar
            expand="sm"
            className="bg-custom text-white"
            variant='dark'
            data-bs-theme="dark"
        >
            <Container fluid className='ps-2 pe-3 mx-0'>
                <Navbar.Brand className='ms-2' href="#Home">
                    <h1 className='fs-4'>Pizzería Mamma Mía!</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Container fluid className='d-flex justify-content-end px-0'>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="py-auto ms-0 align-items-center">
                            <CustomButton text='🍕Home' />
                            {token == true
                                ?
                                    <>
                                        <CustomButton text='🔓Profile' />
                                        <CustomButton text='🔒Logout' />
                                    </>
                                :
                                    <>
                                        <CustomButton text='🔐Login' />
                                        <CustomButton text='🔐Register' />
                                    </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                    <Button className='btn-dark btn-outline-info'>🛒Total: ${total.toLocaleString('es-CL')}</Button>
                </Container>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;