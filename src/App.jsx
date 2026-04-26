import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CustomNavbar from './components/CustomNavbar';
import Home from './components/Home';
import Footer from './components/Footer';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';


function App() {

  return (
    <>
      <CustomNavbar />
      {/* <Home /> */}
      <RegisterForm />
      {/* Separador temporal para la evaluación del Hito 2 */}
      <hr className='m-0'/>
      <LoginForm />
      <Footer />
    </>
  )
}

export default App