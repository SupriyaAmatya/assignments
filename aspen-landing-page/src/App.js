import React from 'react';
import Navbar from './components/layout/Navbar';
import './styles/styles.css'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Footer from './components/layout/Footer';
import Products from './components/Products';
import Resources from './components/Resources';
import About from './components/About';
// import Footer from './components/layout/Footer';

class App extends React.Component {
  render() {
    return (
      <Router basename="/">
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products-services" component={Products} />
            <Route exact path="/resources" component={Resources} />
            <Route exact path="/about-us" component={About} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }

}

export default App;
