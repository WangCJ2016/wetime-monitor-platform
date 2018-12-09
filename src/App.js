import React, { Component } from 'react';
import { Button } from 'antd'
import { 
  BrowserRouter, 
  Link,
  Route
} from 'react-router-dom'
import './App.css';
import './App.less'

import Frame from './frame'
import Home from './pages/Home'
import About from './pages/About'



class App extends Component {

  
  render() {
    return (
      <BrowserRouter
        basename="/"
      >
      <Frame>
        <Link to='/' >
          <Button type='default'>
            go to home
          </Button>
        </Link>
        <Link to='/about'>
          <Button type='default'>
            go to about
          </Button>
        </Link>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Frame>
      </BrowserRouter>
    );
  }
}

export default App;
