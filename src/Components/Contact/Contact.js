import React, { useRef } from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";

import { BsWhatsapp } from "react-icons/bs";
// email service
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y0j04ze",
        "template_odiobap",
        form.current,
        "bLmxD9GfLQSF_hLTv"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("current is", form.current);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const Alert = ()=>{
   alert("Successfuly received! -Harsh Patel")
  }

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option_icons" />
            <h4>Email</h4>
            <h5>harshpatel29301@gmail.com</h5>
            <a href="mailto:harshpatel29301@gmail.com?subject=subject text">
              Send a Mail
            </a>
            
          </article>
          <article className="contact__option">
            <FiInstagram className="contact__option_icons" />
            <h4>Instagram</h4>
            <h5>harsh.React</h5>

            <a
              href="https://www.instagram.com/harshpatel200624/"
              target="_blank"
            >
              drop a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option_icons" />
            <h4>Whatsapp</h4>
            <h5>+91 9104072604</h5>
            <a
              href="https://api.whatsapp.com/send?+919104072604 "
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder='"Enter Your Full Name'
            required
          />
          <input type="email" placeholder="Your Email" required />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button onClick={Alert} type="submit" className="btn btn-primary">
            Send Message
            
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
