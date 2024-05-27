import { MdEmail, MdLocalPhone } from "react-icons/md";

import "./contactSection.scss";
const ContactSection = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="section section--contact">
          <div className="headings">
            <h2 className="section__header">Get in Touch</h2>
            <h3 className="section__subheader">
              Contact <span className="accent">me</span>.
            </h3>

            <p className="contact-content">
              I am currently open to full-time, contract or part-time
              opportunities in Web Development.
            </p>
          </div>

          <div className="contact-form">
            <div className="contact-form__intro">
              <div className="title">
                <p>Have an awesome project idea?</p>
                <p className="accent">Let&apos;s discuss.</p>
              </div>
              <div className="contact-details">
                <div className="info phone">
                  <MdLocalPhone />
                  <span className="accent">+1 (868) 472-3716</span>
                </div>
                <div className="info email">
                  <MdEmail />
                  <span className="accent">nathanieladiah@gmail.com</span>
                </div>
              </div>
            </div>
            <form action="" className="contact-form__form">
              <div className="form-control">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter name"
                />
              </div>
              <div className="form-control">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-control">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Enter messsage"
                  rows={4}
                ></textarea>
              </div>
              {/* <Button>Send Message</Button> */}
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
