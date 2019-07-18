import React, { Component } from "react";
import { Header } from "./components/Header";
import CartContainer from './containers/CartContainer'
import { Footer } from "./components/Footer";
import ProductsContainer from "./containers/ProductsContainer";
import { Message } from "./components/Message";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main id="mainContainer">
          <div className="container">
            <ProductsContainer />
            <Message />
            <CartContainer/>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
