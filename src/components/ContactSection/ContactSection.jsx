import { MdEmail, MdLocalPhone } from "react-icons/md";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { toast } from "react-toastify";
import { db } from "../../firebase.config";
import "./contactSection.scss";
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();

    const formDataCopy = {
      ...formData,
      timestamp: serverTimestamp(),
    };

    // const docRef = await addDoc(collection(db, "messages"), formData);
    await addDoc(collection(db, "messages"), formDataCopy);

    toast.success("Message sent");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const onMutate = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="contact" id="contact">
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
            <form className="contact-form__form" onSubmit={onSubmit}>
              <div className="form-control">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter name"
                  required
                  value={name}
                  onChange={onMutate}
                />
              </div>
              <div className="form-control">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={onMutate}
                  required
                  pattern=".+@.+\..+"
                />
              </div>
              <div className="form-control">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Enter messsage"
                  rows={4}
                  value={message}
                  onChange={onMutate}
                  required
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
