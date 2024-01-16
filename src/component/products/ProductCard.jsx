import { useSelector,useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import {show,select} from '../redux/daganganSlice.jsx'
import DetailProduct from './DetailProduct.jsx';
import { masukKeranjang } from '../redux/keranjangSlice.jsx';
// import Cart from './Cart.jsx'


const ProductCard = ({ product }) => {
  let produkTerpilih = useSelector((state)=>state.dagang.selectedProduct)
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
        <p className="card-text">deskripsi : {product.deskripsi}</p>
        <p className="card-text">harga : {product.harga}</p>

        <Button className="btn btn-primary" onClick={setShow} data-id={product.id}>Detail</Button>
        <Button className="btn btn-danger" onClick={()=>{dispatch(masukKeranjang(product))}} style={{marginLeft:"5px"}}>Add to Cart</Button>
      </div>

      <DetailProduct/>

     
    </div>
  );
}

export default ProductCard;


