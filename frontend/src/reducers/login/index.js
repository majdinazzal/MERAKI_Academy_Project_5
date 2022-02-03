const initialState = {
    token: localStorage.getItem("token") || "",
    isLoggedIn: localStorage.getItem("token") ? true : false,
  };
  















//action
  export const login = (token) => {
    return { type: "LOG_IN", payload: token };
  };
  
  export const logout = () => {
    return { type: "LOG_OUT" };
  };
  