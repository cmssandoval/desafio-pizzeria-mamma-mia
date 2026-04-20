import Button from 'react-bootstrap/Button';

function CustomButton({text}){
    return <Button  className='btn-dark btn-outline-light mx-1'>{text}</Button>;
}

export default CustomButton;