import { useState } from "react";

import { daftarProduct } from "../constants";
import { FormatRupiah } from "@arismun/format-rupiah";
import Swal from "sweetalert2";

const NavbarTop = () => {
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
      <section className="fp__topbar d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-around ">
              <div>
                <ul className="fp__topbar_info d-flex">
                  <li className="d-none d-md-block">
                    <a href="mailto:example@gmail.com">
                      <i className="fas fa-envelope"></i> admin@sukafrozen.my.id
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/6289654980569?text=Hallo%20suka%20frozen%20saya%20ingin%20memesan%20.%20.%20.%20." target="_blank" rel="noreferrer">
                      <i className="fab fa-whatsapp"></i>+62 8965 4980 569
                    </a>
                  </li>
                </ul>
              </div>
              <ul className="topbar_icon justify-content-center d-flex">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>{" "}
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>{" "}
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-tiktok"></i>
                  </a>{" "}
                </li>

                {/* Keranjang */}
                {/* <li className="cart_badge">
                  <a className="cart_icon" onClick={handleClick} style={{ cursor: "pointer" }}>
                    <i className="fas fa-shopping-basket"></i> <span>5</span>
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Chekout */}
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

export default NavbarTop;
