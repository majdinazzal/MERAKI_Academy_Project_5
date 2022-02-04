import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../reducers/products/index";
const Home = () => {
  const HomeProducts = () => {
    const state = useSelector((state) => {
      return {
        products: state.products.products,
      };
    });
    const dispatch = useDispatch();
    const render = () => {
      dispatch(setProducts(setProducts()));
    };
  };
  return (
    <>
      <p>This is the Home Page</p>
    </>
  );
};

export default Home;
