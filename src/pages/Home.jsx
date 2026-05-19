import Row from 'react-bootstrap/Row';
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { useData } from '../context/DataProvider';

function Home() {
    const { pizzas, loading, error } = useData();

    if (loading) return <div className='fetch-status'><p>Cargando Pizzas...</p></div>
    if (error) return <div className='fetch-status'><p>Error: {error}</p></div>

        return (
            <>
                <Header />
                <main className='container'>
                    <Row className='my-4 px-3'>
                        {pizzas.map((element, index) => (
                            <CardPizza
                                id={element.id}
                                key={element.id}
                                img={element.img}
                                name={element.name}
                                price={element.price}
                                ingredients={element.ingredients}
                                showToken={true}
                            />
                        ))}
                    </Row>
                </main>
            </>
        );
}

export default Home;