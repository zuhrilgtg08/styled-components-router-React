import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyle';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import { productData1, productData2 } from "./components/Products/data";
import Feature from './components/Feature/Feature';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your favorite' data={productData1} />
      <Feature />
      <Products heading='Sweet Treats for You' data={productData2} />
      <Footer />
    </Router>
  );
}

export default App;