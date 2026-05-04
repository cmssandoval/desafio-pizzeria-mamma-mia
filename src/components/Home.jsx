import Row from 'react-bootstrap/Row';
import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "../pizzas";

function Home() {
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