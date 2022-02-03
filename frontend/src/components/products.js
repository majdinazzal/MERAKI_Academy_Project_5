const iniaialState = {
  products: [],
};

export const setProducts = (products) => {
  return { type: "SET_PRODUCTS", payload: products };
};

export const addProducts = (products) => {
  return { type: "ADD_PRODUCTS", payload: products };
};
export const updateProduct = (products) => {
  return { type: "UPDATE_PRODUCT", payload: products };
};
