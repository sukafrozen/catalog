import { useState } from "react";
import { daftarProduct } from "../constants";
import { FormatRupiah } from "@arismun/format-rupiah";
import Swal from "sweetalert2";

const ModalChekout = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    // 👇️ toggle isActive state on click

    setIsActive((current) => !current);
  };

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
      <div className={isActive ? "fp__menu_cart_area show_mini_cart" : "fp__menu_cart_area"}>
        <div className="fp__menu_cart_boody">
          <div className="fp__menu_cart_header">
            <h5>total item (5)</h5>
            <span className="close_cart" onClick={handleClick}>
              <i className="fal fa-times"></i>
            </span>
          </div>
          <ul>
            {daftarProduct.slice(0, 5).map((produk) => (
              <li key={produk.id}>
                <div className="menu_cart_img">
                  <img src={produk.imgURL} alt="menu" className="img-fluid w-100" />
                </div>
                <div className="menu_cart_text">
                  <a className="title" href="#">
                    {produk.nama}
                  </a>
                  <div className="quentity_btn my-2">
                    <button onClick={() => setQuantity(quantity - 1)} className="btn btn-danger">
                      <i className="fal fa-minus"></i>
                    </button>
                    <input type="text" value={quantity} readOnly />
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
                  <p className="price">
                    <FormatRupiah value={produk.hargaFix} />
                  </p>
                </div>
                <span className="del_icon">
                  <i className="fal fa-times"></i>
                </span>
              </li>
            ))}
          </ul>
          <p className="subtotal">
            sub total <span>Rp 172.000</span>
          </p>
          <a className="checkout" href="check_out.html">
            checkout
          </a>
        </div>
      </div>
    </>
  );
};

export default ModalChekout;
