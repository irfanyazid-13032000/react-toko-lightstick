// import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import {unshow} from '../redux/daganganSlice.jsx'

export default function DetailProduct() {

  const dispatch = useDispatch()
  
  const tampilkan = useSelector((state)=>state.dagang.show)
  const produkTerpilih = useSelector((state)=>state.dagang.selectedProduct)
  const hideShow = () => {
    dispatch(unshow())
  }
  return (
    <div>
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
          <img src={produkTerpilih.image} style={{width:"600px"}}></img>
        </Modal.Body>
      </Modal>
    </div>
  )
}
