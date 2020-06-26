import React, { Component } from 'react';
import * as Api from '../api/Api';

class ProductsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.match.params.id,
      name: '',
      category_id: '',
      categories: []
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleChangeCategoryId = this.handleChangeCategoryId.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    if (this.state.id) {
      Api
        .getProduct(this.state.id)
        .then(data => {
            console.log("DATAA", data)
          this.setState({
            name: data.description,
            category_id: data.category_id
          })
        })
    }
    this.getAllCategories()
      .then(data => {
        if (data[0]) {
          console.log("After loading all categories, get first", data[0]);
          let initialCategoryId = data[0]['id']
          this.setState({
            category_id: initialCategoryId
          })
        }
      })
  }

  getAllCategories() {
    return Api.getAllCategories()
     .then(response => response.json())
     .then(data => {
       this.setState({
         categories: data['rows']
       })
       return data['rows'];
     })
  }

  handleChangeInput(event) {
    this.setState({ name: event.target.value })
  }

  handleChangeCategoryId(event) {
    this.setState({ category_id: event.target.value })
  }

  handleSubmit(event) {
    console.log("handleSubmit", this.state.name, this.state.category_id);
    if (this.state.id) {
      // update
      console.log("updating");
      Api.updateProduct(this.state.id, this.state.name, this.state.category_id)
        .then(() => {
          this.props.history.push('/')
        })
    } else {
      // create
      Api.postProduct(this.state.name, this.state.category_id)
        .then(() => this.props.history.push('/'))
    }
    event.preventDefault();
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
        	<div>
            <h2 className="title">Novo Produto</h2>
            <div>
          		<input value={this.state.name} onChange={this.handleChangeInput} />
            </div>
            <div>
              <select name="category_id" value={this.state.category_id} onChange={this.handleChangeCategoryId}>
                { this.state.categories.map((category) => (
                  <option value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>
        	</div>
          <div>
            <button>Salvar</button>
          </div>
        </form>
      </div>
    )
  }
}

export default ProductsForm;
