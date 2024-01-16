// import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import {tutupKeranjang} from '../redux/keranjangSlice.jsx'

export default function Cart() {

  const dispatch = useDispatch()
  
  const tampilkanKeranjang = useSelector((state)=>state.keranjang.showKeranjang)
  // const produkTerpilih = useSelector((state)=>state.dagang.selectedProduct)
  const hideShow = () => {
    dispatch(tutupKeranjang())
  }
  return (
    <div>
       <Modal
        size="lg"
        show={tampilkanKeranjang}
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
            haduh
          </h1>
        </Modal.Body>
      </Modal>
    </div>
  )
}
