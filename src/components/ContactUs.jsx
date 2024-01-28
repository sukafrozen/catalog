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
                href="https://wa.me/6289644439032?text=Hallo%20suka%20frozen%20saya%20ingin%20memesan%20.%20.%20.%20."
                target="_blank"
                rel="noreferrer"
                className="btn btn btn-light"
              >
                <i className="fab fa-whatsapp me-1"></i> +62 897 1234 567
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
                  <p>+62 896 7108 5949</p>
                  <p>+62 896 4443 9032</p>
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
                  <p>cs@sukafrozen.co.id</p>
                  <p>example@gmail.com</p>
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
                  <p>Harmony Residence 2 RT.005 RW.003 Kasemen, Serang - Banten</p>
                </div>
              </div>
            </div>
          </div>
          <div className="fp__contact_form_area mt_100 xs_mt_70">
            <div className="row">
              <div className="col-xl-12 wow fadeInUp" data-wow-duration="1s">
                <form className="fp__contact_form">
                  <h3>contact</h3>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <div className="fp__contact_form_input">
                        <span>
                          <i className="fal fa-user-alt"></i>
                        </span>
                        <input type="text" placeholder="Name" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="fp__contact_form_input">
                        <span>
                          <i className="fal fa-envelope"></i>
                        </span>
                        <input type="email" placeholder="Email" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="fp__contact_form_input">
                        <span>
                          <i className="fal fa-phone-alt"></i>
                        </span>
                        <input type="text" placeholder="Phone" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="fp__contact_form_input">
                        <span>
                          <i className="fal fa-book"></i>
                        </span>
                        <input type="text" placeholder="Subject" />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="fp__contact_form_input textarea">
                        <span>
                          <i className="fal fa-book"></i>
                        </span>
                        <textarea rows="8" placeholder="Message"></textarea>
                      </div>
                      <button type="submit">send message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="row mt_100 xs_mt_70">
              <div className="col-xl-12 wow fadeInUp" data-wow-duration="1s">
                <div className="fp__contact_map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.339403634269!2d106.1469528749893!3d-6.084891993901315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e418b1d5d17e3e9%3A0xadb4cd954e4b1bbf!2sHarmony%20Residence%202%20Kasemen!5e0!3m2!1sen!2sid!4v1705912952993!5m2!1sen!2sid"
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
                    Copyright &copy; 2024 <b>SukaFrozen</b> All Rights Reserved.
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
