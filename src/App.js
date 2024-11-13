import React, {Component} from 'react';
import { Main } from './layout/Main'
import { Header } from './layout/Header'
import { Footer } from './layout/Footer';

class App extends Component {
  render() {
    return(
      <>
        <Header />
        <Main />
        <Footer />
      </>
    )
  }
}

export default App;
