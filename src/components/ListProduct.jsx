import { useState, useEffect } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { categoryProduct } from "../constants";
import { daftarProduct } from "../constants";
import ModalProduk from "./ModalProduk";

const ListProduct = () => {
  const title = [
    { id: 0, category: "all" },
    { id: 1, category: "nugget" },
    { id: 2, category: "sosis" },
    { id: 3, category: "kentang" },
  ];
  const [active, setActive] = useState(0);
  const [products] = useState(daftarProduct);
  const [listProduct, setListProduct] = useState([]);

  const activeTab = (id, cat) => {
    setActive(id);
    const productData = products.filter((item) => item.kategori === cat);
    if (id === 0) {
      setListProduct(products);
    } else {
      setListProduct(productData);
    }
  };

  useEffect(() => {
    setActive(0);
    setListProduct(daftarProduct);
  }, []);
  return (
    <>
      <section className="fp__menu mb_95 xs_mb_65">
        <div className="container">
          <div className="row wow fadeInUp" data-wow-duration="1s">
            <div className="col-md-8 col-lg-7 col-xl-6 m-auto text-center">
              <div className="fp__section_heading mb_25">
                <h4>List Product</h4>
                <h2>Our Delicious Product</h2>

                <p>
                  Objectively pontificate quality models before intuitive information. Dramatically recaptiualize
                  multifunctional materials.
                </p>
              </div>
            </div>
          </div>

          <div className="row wow fadeInUp" data-wow-duration="1s">
            <div className="col-12">
              <div className="menu_filter d-flex flex-wrap justify-content-center ">
                {title.map((item, index) => (
                  <button
                    key={index}
                    className={`mt-3 ${active == index ? "active" : ""}`}
                    onClick={() => activeTab(item.id, item.category)}
                  >
                    {item.category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="row grid ">
            {listProduct.map((product) => (
              <div
                key={product.id}
                className="col-xl-3 col-6 col-lg-4 wow fadeInUp d-flex align-items-stretch"
                data-wow-duration="1s"
              >
                <div className="fp__menu_item">
                  <div className="fp__menu_item_img">
                    <img src={product.imgURL} alt="menu" className="img-fluid w-100" />
                    <a className="category" href="#">
                      {product.kategori}
                    </a>
                  </div>
                  <div className="fp__menu_item_text">
                    <a className="title" href="" data-bs-toggle="modal" data-bs-target={`#${product.key}`}>
                      {product.merk} <br />
                      {product.nama}
                    </a>
                    <h5 className="price">{product.harga}</h5>
                    <ul className="d-flex flex-wrap justify-content-center">
                      <li>
                        <a href="#" data-bs-toggle="modal" data-bs-target={`#${product.key}`}>
                          Detail <i className="far fa-eye ms-1"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ModalProduk />
    </>
  );
};

export default ListProduct;
