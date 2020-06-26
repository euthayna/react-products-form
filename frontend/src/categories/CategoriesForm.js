import React, { Component } from 'react';
import * as Api from '../api/Api';

class CategoriesForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.match.params.id,
      name: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    if (this.state.id) {
      Api
        .getCategory(this.state.id)
        .then(data => {
          this.setState({
            name: data.name
          })
      })
    }
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    if (this.state.id) {
      Api.updateCategory(this.state.id, this.state.name)
        .then(() => {
          this.props.history.push('/categories')
        })
    } else {
      Api.postCategory(this.state.name)
        .then(() => this.props.history.push('/categories'))
    }
    event.preventDefault();
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
        	<div>
            <h2 className="title">Nova Categoria</h2>
            <div>
          		<input value={this.state.name} onChange={this.handleChange} />
            </div>
        	</div>
        	<button className="saveButton">Salvar</button>
        </form>
      </div>
    )
  }
}

export default CategoriesForm;
