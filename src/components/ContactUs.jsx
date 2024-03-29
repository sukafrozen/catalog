const ContactUs = () => {
  return (
    <>
      <section className="fp__breadcrumb mt_65 mb_65">
        <div className="fp__breadcrumb_overlay">
          <div className="container">
            <div className="fp__breadcrumb_text">
              <h1>
                Ada yang ingin anda tanyakan? <br /> silakan hubungi kami
              </h1>
            </div>
            <div className="text-center mt-4">
              <a
                href="https://wa.me/6289654980569?text=Hallo%20suka%20frozen%20saya%20ingin%20memesan%20.%20.%20.%20."
                target="_blank"
                rel="noreferrer"
                className="btn btn btn-light"
              >
                <i className="fab fa-whatsapp me-1"></i> +62 8965 4980 569
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="fp__menu mt_65 xs_mt_35 ">
        <div className="container">
          <div className="row wow fadeInUp" data-wow-duration="1s">
            <div className="col-md-8 col-lg-7 col-xl-6 m-auto text-center">
              <div className="fp__section_heading mb_25">
                <h2>Kontak Kami</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fp__contact mb-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-md-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
              <div className="fp__contact_info">
                <span>
                  <i className="fab fa-whatsapp"></i>
                </span>
                <div className="text">
                  <h3>WhatsApp</h3>
                  <p>+62 8965 4980 569</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
              <div className="fp__contact_info">
                <span>
                  <i className="fal fa-envelope"></i>
                </span>
                <div className="text">
                  <h3>mail</h3>
                  <p>admin@sukafrozen.my.id</p>
                  <p>cs@sukafrozen.my.id</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
              <div className="fp__contact_info">
                <span>
                  <i className="fas fa-street-view"></i>
                </span>
                <div className="text">
                  <h3>location</h3>
                  <p>Harmony Residence 2 Blok E no 7, Kasemen Serang - Banten</p>
                </div>
              </div>
            </div>
          </div>
          <div className="fp__contact_form_area mt_100 xs_mt_70">
            <div className="row mt_100 xs_mt_70">
              <div className="col-xl-12 wow fadeInUp" data-wow-duration="1s">
                <div className="fp__contact_map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15869.334042242548!2d106.1515542!3d-6.0856903!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e418bd46aae685d%3A0x7b96d98799d96f1e!2sSuka%20Frozen%20Food%20Serang!5e0!3m2!1sen!2sid!4v1706464775486!5m2!1sen!2sid"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="fp__footer_bottom d-flex flex-wrap">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="fp__footer_bottom_text d-flex flex-wrap justify-content-between">
                  <p>
                    Copyright &copy; {new Date().getFullYear()} <b>SukaFrozen</b> All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactUs;
