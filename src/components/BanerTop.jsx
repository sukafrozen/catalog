import { backgroundImage } from "../assets/images";

const BanerTop = () => {
  return (
    <section
      className="fp__breadcrumb mt_50 xs_mt_50 mb_85 xs_mb_55"
      style={{ backgroundImage: `url("${backgroundImage} ")` }}
    >
      <div className="fp__breadcrumb_overlay">
        <div className="container">
          <div className="fp__breadcrumb_text baner">
            <h1>Suka Frozen</h1>
            <p className="text-white text-center fw-semibold">Menyediakan Frozen Food Pilihan</p>
          </div>
          <div className="mt-3">
          <ul className="topbar_icon justify-content-center d-flex flex-wrap">
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
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BanerTop;
