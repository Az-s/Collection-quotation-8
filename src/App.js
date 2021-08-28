import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import AddQuote from './components/AddQuote/AddQuote';
import Links from './components/Links/Links';
import { Row , Col} from 'react-bootstrap';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Row>
          <Col sm={2}>
            <Links />
          </Col>
          <Col sm={10}>
          </Col>
        </Row>
        <Route exact path='/' component={AddQuote} />
      </Router>
    </div>
  );
}

export default App;
