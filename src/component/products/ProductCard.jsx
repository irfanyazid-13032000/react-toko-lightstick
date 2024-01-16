import { useSelector,useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {show,unshow,select} from '../redux/daganganSlice.jsx'


const ProductCard = ({ product }) => {
  const tampilkan = useSelector((state)=>state.dagang.show)
  const produkTerpilih = useSelector((state)=>state.dagang.selectedProduct)
  const dispatch = useDispatch()

  
  const setShow = (e) => {
    dispatch(select(e.target.dataset.id))
    console.log("render produkTerpilih", produkTerpilih);
    dispatch(show())
  }

  const hideShow = () => {
    dispatch(unshow())
  }

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={product.image} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">{product.nama}</h5>
        <p className="card-text">{product.deskripsi} - {product.harga}</p>
        <Button className="btn btn-primary" onClick={setShow} data-id={product.id}>Go somewhere</Button>
      </div>

      <Modal
        size="lg"
        show={tampilkan}
        onHide={() => hideShow()}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Detail Product
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>
            {produkTerpilih.deskripsi}
          </h1>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ProductCard;


