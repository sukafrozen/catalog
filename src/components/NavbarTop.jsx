const NavbarTop = () => {
  return (
    <section className="fp__topbar">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-8">
            <ul className="fp__topbar_info d-flex flex-wrap">
              <li>
                <a href="mailto:example@gmail.com">
                  <i className="fas fa-envelope"></i> cs@sukafrozen.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6289644439032?text=Hallo%20suka%20frozen%20saya%20ingin%20memesan%20.%20.%20.%20."
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-whatsapp"></i>+62896123456
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xl-6 col-md-4 d-none d-md-block">
            <ul className="topbar_icon d-flex flex-wrap">
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>{" "}
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>{" "}
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>{" "}
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-behance"></i>
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavbarTop;
