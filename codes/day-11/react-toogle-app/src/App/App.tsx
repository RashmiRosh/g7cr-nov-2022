import React from 'react';
import './App.css';
import Editor from '../components/editor/Editor';
import ProductList from '../components/product-list/ProductList';

function App() {
  return (
    <div>
      <Editor />
      <br />
      <br />
      <ProductList />
    </div>
  );
}

export default App;
