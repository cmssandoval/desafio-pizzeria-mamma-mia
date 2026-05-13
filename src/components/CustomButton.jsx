import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function CustomButton({ text, route }) {
    return (
        <>
            <Button
                className='btn-dark btn-outline-light mx-1'
            >
                <Link
                    className='text-decoration-none text-white'
                    to={route}
                >{text}</Link>
            </Button>
        </>
    );
}

export default CustomButton;