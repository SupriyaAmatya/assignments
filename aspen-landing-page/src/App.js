import React from 'react';
import Navbar from './components/layout/Navbar';
import './styles/styles.css'
import { BrowserRouter } from 'react-router-dom';
// import Footer from './components/layout/Footer';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
