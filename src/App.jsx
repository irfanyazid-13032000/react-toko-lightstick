import Login from "./component/login/Login.jsx"
import AllProducts from './component/products/AllProducts.jsx';
import { Routes,Route,BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/products" element={<AllProducts/>}></Route>
      </Routes>
    </Router>
     
    </>
  )
}

export default App
