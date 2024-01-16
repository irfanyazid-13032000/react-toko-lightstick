// import React from 'react'
import { useDispatch } from "react-redux";
import { Link,Outlet } from "react-router-dom";
import { tampilKeranjang } from "./redux/keranjangSlice.jsx";
import Cart  from "./products/Cart.jsx";

export default function Nav() {
  const dispatch = useDispatch()

  const lihatKeranjang = () => {
    console.log("yadu");
    dispatch(tampilKeranjang())
  }

  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Boku No Hero Academia</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/login">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/products">Heroes</Link>
            </li>
           
          </ul>
          <button className="btn btn-primary" onClick={lihatKeranjang}>
            Cart
          </button>
        </div>
      </div>
    </nav>
    <Outlet></Outlet>

    <Cart/>


    </div>
  )
}
