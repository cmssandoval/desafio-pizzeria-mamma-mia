import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CustomNavbar from './components/CustomNavbar';
import Cart from './components/Cart';
import Home from './components/Home';
import Pizza from './components/Pizza';
import Footer from './components/Footer';
// import RegisterForm from './components/RegisterForm';
// import LoginForm from './components/LoginForm';


function App() {

  return (
    <div className='d-flex flex-column min-vh-100'>
      <CustomNavbar />
      {/* <Cart /> */}
      {/* <Home /> */}
      {/* <RegisterForm /> */}
      {/* Separador temporal para la evaluación del Hito 2 */}
      {/* <hr className='m-0'/> */}
      {/* <LoginForm /> */}
      <Pizza />
      <Footer />
    </div>
  )
}

export default App