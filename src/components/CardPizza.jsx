import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

import { useCart } from '../context/CartContext';

function CardPizza(props) {
    const { addItem } = useCart();

    return (
        <Col className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 d-flex justify-content-center my-2'>
            <Card style={{ width: '20rem' }}>
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
                        <div className={`d-flex mx-3 py-4 ${props.showToken ? 'justify-content-between' : 'justify-content-center'}`}>
                            {props.showToken && (
                                <Button
                                    className='btn-light btn-outline-dark'
                                >
                                    <Link
                                        to={`/desafio-pizzeria-mamma-mia/pizza/${props.id}`}
                                        className='text-decoration-none text-dark'
                                    >Ver Más 👀</Link>
                                </Button>
                            )}
                            <Button
                                className='btn-dark'
                                onClick={() => addItem(props)}
                            >Añadir🛒</Button>
                        </div>
                    </li>
                </ListGroup>
            </Card>
        </Col>
    );
}

export default CardPizza;