const iniaialState = {
  products: [],
};

const products = (state = iniaialState, { type, payload }) => {
  switch (type) {
    case "SET_PRODUCTS":
      return { ...state, products: products };
    case "add_PRODUCTS":
      return { ...state, payload };
    case "UPDATE_PRODUCT":
      return {
        ...state,
        products: state.products.map((element) => {
          if (payload.id === element.id) {
            return element;
          }
        }),
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter((element) => {
          return element.id != payload;
        }),
      };
  }
};

export const setProducts = (products) => {
  return { type: "SET_PRODUCTS", payload: products };
};

export const addProducts = (products) => {
  return { type: "ADD_PRODUCTS", payload: products };
};
export const updateProduct = (updatedProduct) => {
  return { type: "UPDATE_PRODUCT", payload: updatedProduct };
};

export const deletePorduct = (id) => {
  return { type: "DELETE_PRODUCT", payload: id };
};