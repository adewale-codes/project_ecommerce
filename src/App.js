import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart"
import Login from "./Pages/Login"
// import ProductPage from "./components/ProductPage";
import Footer from "./components/Footer"
import ProductList from "./Pages/ProductList"
import Register from "./Pages/Register"
const App = () => {
  return(
    <>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/ProductList" element={<ProductList />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Cart" element={<Cart />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;