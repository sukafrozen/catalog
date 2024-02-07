import ModalChekout from "./ModalChekout";

const NavbarTop = () => {
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
                    <a
                      href="https://wa.me/6289654980569?text=Hallo%20suka%20frozen%20saya%20ingin%20memesan%20.%20.%20.%20."
                      target="_blank"
                      rel="noreferrer"
                    >
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

                {/* <li style={{ cursor: "pointer" }}>
                  <a className="position-relative">
                    <i className="fas fa-shopping-basket"></i>
                    <span
                      className="position-absolute top-0 start-99 translate-middle badge p-1 bg-white border border-light rounded-circle"
                      style={{ color: "#f86f03" }}
                    >
                      99
                      <span className="visually-hidden">New alerts</span>
                    </span>
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Chekout */}
      <ModalChekout />
    </>
  );
};

export default NavbarTop;
