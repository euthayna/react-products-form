import React, { Component } from 'react';
import * as Api from '../api/Api';
import { Link } from 'react-router-dom'

class ProductsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      categories: []
    }
  }

  componentWillMount() {
    this.getAllCategories();
    this.getAllProducts();
  }

  getAllProducts() {
    Api.getAllProducts()
     .then(response => response.json())
     .then(data => {
       this.setState({
         products: data['rows']
       })
     })
  }

  getAllCategories() {
    Api.getAllCategories()
     .then(response => response.json())
     .then(data => {
       this.setState({
         categories: data['rows']
       })
     })
  }

  handleClickDelete(id) {
    Api.deleteProduct(id)
    .then(() => this.getAllProducts());
  }

  handleClickUpdate(category_id) {
    this.props.history.push(`/products/edit/${category_id}`)
  }

  render(){
    return (
      <div>
        <div>
          <Link to={`/products/novo/`} className="newButton">Adicionar produto</Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Categoria</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { this.state.products.map((product) => (
              <tr key={product.id}>
                <td>{product.description}</td>
                <td>{product.category_name}</td>
                <td><button onClick={this.handleClickUpdate.bind(this, product.id)}>Editar</button></td>
                <td><button onClick={this.handleClickDelete.bind(this, product.id)}>Excluir</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default ProductsList;
