import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "font-awesome/css/font-awesome.min.css";
import {Alert, Button} from "react-bootstrap";
import Product from './Components/Product';

function App() {
  const addToCart = (title) => {
        alert('Item has been added successfully ' +title);
    }
  return (
    <div className="App">
      <h1 className="container"><i className="fa fa-home"></i>Hello React Components</h1>
      <p className="container">Lorem ipsum dolor sit amet, consectetur adip</p>
      <div className="container"><Button variant="success" className="bitn">Bootstrap</Button>
      <Alert variant="danger">Lorem ipsum dolor sit amet, con</Alert>
      
      </div>
      <Product title="Suzuki" price="600" onAddToCart={addToCart}/>
      <Product title="Honda" price="200" onAddToCart={addToCart}/>
      <Product title="Toyota" price="900" onAddToCart={addToCart} />
      <Product title="Audi" price="300" onAddToCart={addToCart}/>
      
      
    </div>
  );
}

export default App;
