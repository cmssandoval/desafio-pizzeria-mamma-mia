import Row from 'react-bootstrap/Row';
import Header from "./Header";
import CardPizza from "./CardPizza";
import pizza1 from "../assets/pizza-1.jpg";
import pizza2 from "../assets/pizza-2.jpg";
import pizza3 from "../assets/pizza-3.jpg";

function Home() {
    return (
    <>
        <Header />
        <main className='container'>
            <Row className='my-2 g-3'>
                <CardPizza
                    img={pizza1}
                    name='Napolitana'
                    price={5950}
                    ingredients={["mozzarella", "tomates" , "jamón", "orégano",]}
                />
                <CardPizza
                    img={pizza2}
                    name='Española'
                    price={6950}
                    ingredients={["mozzarella", "gorgonzola" , "parmesano", "provolone",]}
                />
                <CardPizza
                    img={pizza3}
                    name='Pepperoni'
                    price={6950}
                    ingredients={["mozzarella", "pepperoni", "orégano",]}
                />
            </Row>
        </main>
    </>
    );
}

export default Home;