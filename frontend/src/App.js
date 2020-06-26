import React from 'react';
import CategoriesList from './categories/CategoriesList';
import CategoriesForm from './categories/CategoriesForm';
import ProductsList from './products/ProductsList';
import ProductForm from './products/ProductForm';
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="menu">
        <div className="menuLink">
          <Link to={`/`}>Produtos</Link>
        </div>
        <div className="menuLink">
          <Link to={`/categories/`}>Categorias</Link>
        </div>
      </div>
      <Route exact path="/" component={ProductsList}/>
      <Route exact path="/categories" component={CategoriesList}/>
      <Route exact path="/categories/novo" component={CategoriesForm}/>
      <Route exact path="/categories/edit/:id" component={CategoriesForm}/>
      <Route exact path="/products/novo" component={ProductForm}/>
      <Route exact path="/products/edit/:id" component={ProductForm}/>
    </div>
  );
}

export default App;
