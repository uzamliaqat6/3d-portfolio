import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/abdul-manan-9982903a1"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn —  Abdul Manan
              </a>
            </p>
            <h4>Education</h4>
            <p>
              
              ICS (Intermediate in Computer Science) — Ongoing
            </p>
            <p>
              Matriculation, Global School System — 2025
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            {/* <a
              href="https://github.com/ Abdul Manan"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a> */}
            <a
              href="https://www.linkedin.com/in/abdul-manan-9982903a1"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            {/* <a
              href="https://www.youtube.com/@Leftbraincoder"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              YouTube <MdArrowOutward />
            </a> */}
            <a
              href="https://www.instagram.com/manan.vrs?stkn=eXdlMGpudTZ6eHd4&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designer and Video Editor <br /> by <span>Abdul Manan</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;