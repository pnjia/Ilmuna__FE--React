import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-logo">
          <h1>Ilmuna logo</h1>
        </div>
        <div className="footer-office">
          <h3>Office</h3>
          <p>
            Jln. Raya Cibolang Cisaat - Sukabumi No. 21, Cibolang Kaler, Kec.
            Cisaat, Kabupaten Sukabumi, Jawa Barat 43152
          </p>
          <p>info@gmail.com</p>
          <p>05858XXXXXXX</p>
        </div>
        <div className="footer-sosmed">
          <h3>Follow us</h3>
        </div>
        <div className="footer-copyright">
        <p style={{textAlign: "center"}}>&copy; 2025 Copyright. All rights reserved.  </p>

        </div>
      </div>
    </>
  );
};
