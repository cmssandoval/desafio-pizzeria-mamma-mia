import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

function CardPizza({img, name, price, ingredients}) {

    return (
        <Col className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-4'>
            <Card className='w-100 h-100 mx-1'>
                <Card.Img className='card-img-top' variant='top' src={img}/>
                <Card.Body className='d-flex align-items-center'>
                    <Card.Title className='mb-3'>Pizza {name}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group list-group-flush text-center">
                    <li className="list-group-item">
                        <h5 className='fw-light'>Ingredientes:</h5>
                        <p>🍕 {ingredients.join(", ")}</p>
                    </li>
                    <li className="list-group-item">
                        <h4>Precio: ${price.toLocaleString('es-CL')}</h4>
                        <div className='d-flex justify-content-between mx-3 py-4'>
                            <Button className='btn-light btn-outline-dark'>Ver Más👀</Button>
                            <Button className='btn-dark'>Añadir🛒</Button>
                        </div>
                    </li>
                </ListGroup>
            </Card>
        </Col>
    );
}

export default CardPizza;