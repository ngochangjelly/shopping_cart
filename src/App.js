import React, { Component } from "react";
import { Header } from "./components/Header";
import { Cart } from "./components/Cart";
import { Footer } from "./components/Footer";
import { Products } from "./components/Products";
import { Message } from "./components/Message";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main id="mainContainer">
          <div class="container">
            <Products/>
            <Message/>
            <Cart />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
