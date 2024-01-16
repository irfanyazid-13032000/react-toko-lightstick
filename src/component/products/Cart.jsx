// import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import {tutupKeranjang} from '../redux/keranjangSlice.jsx'
// import {useEffect} from 'react'


export default function Cart() {
  const dispatch = useDispatch()
  
  const tampilkanKeranjang = useSelector((state)=>state.keranjang.showKeranjang)
  const dalamKeranjang = useSelector((state)=>state.keranjang.isiKeranjang)
  

  // let produkTerpilih = useSelector((state)=>state.dagang.selectedProduct)
  const hideShow = () => {
    dispatch(tutupKeranjang())
    console.log(dalamKeranjang);
  }

  // useEffect(() => {
  //   console.log("render produkTerpilih", produkTerpilih);
  //   dispatch(masukKeranjang(produkTerpilih))
  //   console.log("render produkTerpilih", produkTerpilih);
    

  // }, [produkTerpilih]);

  
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
            Cart
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className="table">
            <thead>
            <tr>
              <th>no</th>
              <th>nama barang</th>
              <th>harga satuan</th>
              <th>qty</th>
              <th style={{textAlign:"right"}}>total harga</th>
              <th>action</th>
            </tr>
            </thead>
            <tbody>
            {dalamKeranjang.length == 0 ? (
                <tr>
                  <td colSpan="6">data tidak ada</td>
                </tr>
            ) : null}
              
              {dalamKeranjang.map((isi)=>(
            <tr key={isi.id}>
                <td>1</td>
                <td>{isi.nama}</td>
                <td>{isi.harga}</td>
                <td><span className='badge bg-primary'>-</span> 1 <span className='badge bg-success'>+</span></td>
                <td style={{textAlign:"right"}}>100.000</td>
                <td><button className='btn btn-danger' data-id={isi.id}>delete</button></td>
            </tr>
              ))}
            <tr>
              <td colSpan="4" style={{textAlign:"left",backgroundColor:"yellow"}}> total semua</td>
              <td style={{textAlign:"right",backgroundColor:"yellow"}}>100.000</td>
              <td style={{textAlign:"right",backgroundColor:"yellow"}}></td>
            </tr>
            </tbody>
          </table>
        </Modal.Body>
      </Modal>
    </div>
  )
}
