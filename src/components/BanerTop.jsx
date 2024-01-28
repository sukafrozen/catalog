import { backgroundImage } from "../assets/images";

const BanerTop = () => {
  return (
    <section
      className="fp__breadcrumb mt_95 xs_mt_85 mb_35 xs_mb_35"
      style={{ backgroundImage: `url("${backgroundImage} ")` }}
    >
      <div className="fp__breadcrumb_overlay">
        <div className="container">
          <div className="fp__breadcrumb_text baner">
            <h1>Suka Frozen</h1>
            <p className="text-white text-center fw-semibold">Menyediakan Frozen Food Pilihan</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BanerTop;
