import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

function CardPizza(props) {

    return (
        <Col className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-2'>
            <Card className='w-100 h-100'>
                <Card.Img className='card-img-top' variant='top' src={props.img} alt='Imagen de Pizza' />
                <Card.Body className='d-flex flex-column align-items-start gap-3 m-2'>
                    <Card.Title className='fw-bold'>Pizza {props.name}</Card.Title>
                    {props.desc ? <p className='text-center'>{props.desc}</p> : null}
                </Card.Body>
                <ListGroup className="list-group list-group-flush text-center">
                    <li className="list-group-item">
                        <h5 className='fw-light'>Ingredientes:</h5>
                        <ul className='list-unstyled'>
                            {props.ingredients.map((ingredient, index) => (
                                <li key={index}>🍕 {ingredient}</li>
                            ))}
                        </ul>
                    </li>
                    <li className="list-group-item">
                        <h4>Precio: ${props.price.toLocaleString('es-CL')}</h4>
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