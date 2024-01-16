// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Login from "./component/login/Login.jsx"
import AllProducts from './component/products/AllProducts.jsx';
import { Routes,Route,BrowserRouter as Router } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0)

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
