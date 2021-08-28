import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import NavBar from './components/Navbar/NavBar';
import AddQuote from './components/AddQuote/AddQuote';
import Links from './components/Links/Links';
import AllQuotes from './components/AllQuotes/AllQuotes';
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
            <Route exact path='/' component={AllQuotes} />
            <Route path='/add-quote' component={AddQuote} />
            <Route path='/quotes/name' component={AllQuotes} />
          </Col>
        </Row>
      </Router>
    </div>
  );
}

export default App;
