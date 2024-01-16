import { useSelector,useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import {show,select} from '../redux/daganganSlice.jsx'
import DetailProduct from './DetailProduct.jsx';
// import Cart from './Cart.jsx'


const ProductCard = ({ product }) => {
  const produkTerpilih = useSelector((state)=>state.dagang.selectedProduct)
  const dispatch = useDispatch()

  
  const setShow = (e) => {
    dispatch(select(e.target.dataset.id))
    console.log("render produkTerpilih", produkTerpilih);
    dispatch(show())
  }

  

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={product.image} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">{product.nama}</h5>
        <p className="card-text">{product.deskripsi} - {product.harga}</p>
        <Button className="btn btn-primary" onClick={setShow} data-id={product.id}>Go somewhere</Button>
      </div>

      <DetailProduct/>
      {/* <Cart/> */}

     
    </div>
  );
}

export default ProductCard;


