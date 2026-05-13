import Row from 'react-bootstrap/Row';
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { useEffect, useState } from 'react';

function Home() {

    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        getDataPizzas();
    }, []);

    const getDataPizzas = async () => {
        const apiURL = 'http://localhost:5000/api/pizzas';
        const response = await fetch(apiURL);
        const data = await response.json();
        setPizzas(data);
    };

    return (
        <>
            <Header />
            <main className='container'>
                <Row className='my-4 px-3'>
                    {pizzas.map((element, index) => (
                        <CardPizza
                            img={element.img}
                            name={element.name}
                            price={element.price}
                            ingredients={element.ingredients}
                            key={element.id}
                        />
                    ))}
                </Row>
            </main>
        </>
    );
}

export default Home;