import { backgroundImage } from "../assets/images";
import logo from "../assets/images/logo.png";

const BanerTop = () => {
  return (
    <section
      className="fp__breadcrumb mt_10 xs_mt_20 mb_85 xs_mb_55"
      style={{ backgroundImage: `url("${backgroundImage} ")` }}
    >
      <div className="fp__breadcrumb_overlay">
        <div className="container">
          <div className="fp__breadcrumb_text baner d-flex flex-column align-items-center justify-content-center">
            <img src={logo} alt="" className="logo-frozen" />
            <p className="text-white text-center fw-semibold">
              Selamat datang di website Suka Frozen Food, <br /> nikmati kemudahan belanja frozen food dengan harga
              terbaik di tempat kami 👻
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BanerTop;
