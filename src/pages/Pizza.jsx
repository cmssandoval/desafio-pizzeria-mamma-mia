import React, { useEffect, useState } from 'react';
import CardPizza from '../components/CardPizza';
import Row from 'react-bootstrap/Row';

const Pizza = () => {
    const [pizzaData, setPizzaData] = useState([]);

    useEffect(() => {
        getDataPizza();
    }, [])

    const getDataPizza = async () => {
        const apiURL = 'http://localhost:5000/api/pizzas/p001';
        const response = await fetch(apiURL);
        const data = await response.json();
        setPizzaData(data);
    }

    return (

        <div className='container'>
            <Row className='justify-content-center my-3'>
                <CardPizza
                    img={pizzaData.img}
                    name={pizzaData.name}
                    price={pizzaData.price}
                    ingredients={pizzaData.ingredients}
                    desc={pizzaData.desc}
                    key={pizzaData.id}
                />
            </Row>
        </div>
    );
};

export default Pizza;