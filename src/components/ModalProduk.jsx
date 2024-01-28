import { useState } from "react";
import { daftarProduct } from "../constants";
import Swal from "sweetalert2";
import { FormatRupiah } from "@arismun/format-rupiah";

const ModalProduk = () => {
  const [quantity, setQuantity] = useState(1);

  if (quantity < 1) {
    Swal.fire({
      title: "Quantity minimal 1",
      icon: "warning",
      confirmButtonText: "OK!",
    });
    setQuantity(1);
  }

  return (
    <>
      {daftarProduct.map((produk) => (
        <div key={produk.id} className="fp__cart_popup">
          <div className="modal fade" id={produk.key} tabIndex="-1" aria-hidden="true" data-bs-backdrop="static">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body">
                  <button type="button" onClick={() => setQuantity(1)} className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    <i className="fa fa-times"></i>
                  </button>
                  <div className="fp__cart_popup_img">
                    <img src={produk.imgURL} alt="menu" className="img-fluid w-100 rounded" />
                  </div>
                  <div className="fp__cart_popup_text">
                    <a href="#" className="title">
                      {produk.nama}
                    </a>
                    <h4 className="price">{produk.harga}</h4>

                    <div className="details_size">
                      <h5>Deskripsi Produk</h5>
                      <p>Merk : {produk.merk}</p>
                      <p>Kondisi Penyimpanan : {produk.kondisi}</p>
                      <p>Jenis Makanan : {produk.jenis}</p>
                      <p>Masa Penyimpanan : {produk.masaPenyimpanan}</p>
                      <p>Stok : {produk.stok}</p>
                      <p>Berat Bersih : {produk.berat}</p>
                    </div>

                    <div className="details_quentity">
                      <h5>select quantity</h5>
                      <div className="quentity_btn_area d-flex flex-wrapa align-items-center">
                        <div className="quentity_btn">
                          <button onClick={() => setQuantity(quantity - 1)} className="btn btn-danger">
                            <i className="fal fa-minus"></i>
                          </button>
                          <input type="text" value={quantity} />
                          <button
                            onClick={() => {
                              setQuantity(quantity + 1);
                              quantity + 1 > produk.stok ? setQuantity(produk.stok) : "";
                            }}
                            className="btn btn-success"
                          >
                            <i className="fal fa-plus"></i>
                          </button>
                        </div>

                        <h3>
                          <FormatRupiah value={produk.hargaFix * quantity} />
                        </h3>
                      </div>
                    </div>

                    {produk.stok >= 1 ? (
                      <ul className="details_button_area d-flex flex-wrap justify-content-center">
                        <li>
                          <a
                            className="common_btn"
                            href={`https://wa.me/6289671087959/?text=Halo%20suka%20frozen%2C%20saya%20ingin%20memesan%20produk%20%0ANama%20Saya%20%3A...%20%0AAlamat%20saya%20%3A...%20%20%0AProduk%20%3A%20${
                              produk.nama
                            }%0AQuantity%20%3A%20${quantity}%0ATotal%20harga%20%3A%20Rp ${produk.hargaFix * quantity}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            beli produk
                          </a>
                        </li>
                      </ul>
                    ) : (
                      <ul className="details_button_area d-flex flex-wrap justify-content-center">
                        <li>
                          <button disabled className="common_btn bg-secondary">
                            Produk Habis
                          </button>
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ModalProduk;
