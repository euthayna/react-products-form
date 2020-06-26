const api = 'http://localhost:5000'

export const postCategory = (name) => {
  let body = JSON.stringify({ name: name });
  return fetch(`${api}/categories`, {
    method: 'POST',
    body: body, headers: { 'Content-Type': 'application/json' }
  })
}

export const getAllCategories = () => {
  return fetch(`${api}/categories`)
}

export const getCategory = (id) => {
  return fetch(`${api}/categories/${id}`)
    .then(res => res.json())
}

export const updateCategory = (id, name) => {
  return fetch(`${api}/categories/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: name })
  })
}

export const deleteCategory = (id) => {
  return fetch(`${api}/categories/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

//products

export const postProduct = (description, category_id) => {
  let body = JSON.stringify({ description: description, category_id: category_id });
  console.log("Request body", body);
  return fetch(`${api}/products`, {
    method: 'POST',
    body: body,
    headers: { 'Content-Type': 'application/json' }
  })
}

export const getAllProducts = () => {
  return fetch(`${api}/products`)
}

export const getProduct = (id) => {
  console.log('Entrou no metodo da Api.js')
  return fetch(`${api}/products/${id}`)
    .then(res => res.json())
}

export const updateProduct = (id, description, category_id ) => {
  return fetch(`${api}/products/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ description: description, category_id: category_id })
  })
}

export const deleteProduct = (id) => {
  return fetch(`${api}/products/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
