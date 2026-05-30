import CardPizza from '../components/CardPizza';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import { Link, useParams } from 'react-router-dom';
import { useData } from '../context/DataContext';

const Pizza = () => {
    const { getPizzaById, loading } = useData();
    const { id } = useParams();
    const pizza = getPizzaById(id);

    if (loading) return <div className='fetch-status'><p>Cargando...</p></div>
    if (!pizza) {
        return (
            <div className='fetch-status'>
                <p>No hemos encontrado esta pizza</p>
                <Link
                    to='/desafio-pizzeria-mamma-mia/'
                    className='text-decoration-none text-white'
                >
                    <Button className='btn-dark my-2'>
                        Ver Pizzas🍕
                    </Button>
                </Link>
            </div>
        )
    }

    return (

        <div className='container'>
            <Row className='justify-content-center my-3'>
                <CardPizza
                    img={pizza.img}
                    name={pizza.name}
                    price={pizza.price}
                    ingredients={pizza.ingredients}
                    desc={pizza.desc}
                    key={pizza.id}
                    showToken={false}
                />
            </Row>
        </div>
    );
};

export default Pizza;