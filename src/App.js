import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "font-awesome/css/font-awesome.min.css";
import {Alert, Button} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <h1 className="container"><i className="fa fa-home"></i>Hello React Components</h1>
      <p className="container">Lorem ipsum dolor sit amet, consectetur adip</p>
      <div className="container"><Button variant="success" className="bitn">Bootstrap</Button>
      <Alert variant="danger">Lorem ipsum dolor sit amet, con</Alert>
      </div>
      
      
      
    </div>
  );
}

export default App;
