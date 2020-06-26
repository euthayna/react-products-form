import React, { Component } from 'react';
import * as Api from '../api/Api';
import { Link } from 'react-router-dom'

class CategoriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      categories: []
    };
  }

  componentWillMount() {
    this.getAllCategories();
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
    console.log(id)
    Api.deleteCategory(id)
    .then(() => this.getAllCategories());
  }

  handleClickUpdate(category_id) {
    this.props.history.push(`/categories/edit/${category_id}`)
  }

  render(){
    return (
      <div>
        <div>
          <div>
            <Link to={`/categories/novo`} className="newButton">Nova Categoria</Link>
          </div>
          <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                { this.state.categories.map((category) => (
                  <tr key={category.id}>
                    <td>{category.name}</td>
                    <td></td>
                    <td></td>
                    <td><button onClick={this.handleClickUpdate.bind(this, category.id)}>Editar</button></td>
                    { category.has_product ?
                      <td></td>
                      :
                      (<td><button onClick={this.handleClickDelete.bind(this, category.id)}>Excluir</button></td>)
                    }
                  </tr>
                ))}
              </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default CategoriesList;
