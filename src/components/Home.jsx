import Row from 'react-bootstrap/Row';
import Header from "./Header";
import CardPizza from "./CardPizza";
import { useEffect, useState } from 'react';
// import { pizzas } from "../pizzas";

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
                <Row className='my-2 px-3 g-3'>
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