import { FormStyled } from "../styles/Form.styled";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Form() {
  const formRef = useRef();
  const [message, setMessage] = useState("");

  function showProject(e) {
    let url = e.target.value;

    if (!url) return;

    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.click();
  }

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_u4t1zjt",
        "template_7ngkh55",
        formRef.current,
        "zI_I2wJaCitUKV0hO",
      );

      setMessage("Message sent successfully!");
      e.target.reset();

      setTimeout(() => {
        setMessage("");
      }, 4000);
    } catch {
      setMessage("Something went wrong. Try again!");
    }
  };

  return (
    <FormStyled $message={message}>
      <div className="projects">
        <label htmlFor="projects-list" className="projects-title">
          Projects
        </label>
        <select
          className="projects-list"
          id="projects-list"
          onChange={showProject}
        >
          <option value="">Select project</option>
          <option value="https://riviana-dolce.vercel.app/">
            Riviana Dolce
          </option>
          <option value="https://verakissyou17.github.io/random-quote-app/">
            Random Quote App
          </option>
          <option value="https://verakissyou17.github.io/myPlayer/">
            My Player
          </option>
          <option value="https://verakissyou17.github.io/time-tracking-dashboard-main/#">
            Time Tracking Dashboard
          </option>
          <option value="https://verakissyou17.github.io/age-calculator-app-main/">
            Age Calculator App
          </option>
          <option value="https://verakissyou17.github.io/javascript-amazon-project-main/">
            Amazon Project
          </option>
          <option value="https://verakissyou17.github.io/smoking-tracking-app/">
            Smoking Tracking App
          </option>
          <option value="https://verakissyou17.github.io/mortgage-repayment-calculator-main/">
            Mortgage Repayment Calculator
          </option>
          <option value="https://verakissyou17.github.io/ecommerce-product-page-main/">
            E-commerce product page
          </option>
        </select>
      </div>
      <div className="form-container">
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="my-form"
          id="contact"
        >
          <h5>Contact me</h5>
          <div className="inputBox">
            <input id="name" name="name" type="text" required />
            <label htmlFor="name">Name</label>
            <i></i>
          </div>
          <div className="inputBox">
            <input id="email" name="email" type="email" required />
            <label htmlFor="email">Email Address</label>
            <i></i>
          </div>
          <div className="inputBox">
            <textarea id="textarea" name="message" type="text"></textarea>
            <label htmlFor="textarea">Message</label>
            <i></i>
          </div>
          <button type="submit">Submit</button>
          {message && <p className={message === "" ? "closed" : "message"}>{message}</p>}
        </form>
      </div>
    </FormStyled>
  );
}

export default Form;
