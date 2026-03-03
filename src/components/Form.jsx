import { FormStyled } from "../styles/Form.styled";

function Form() {
  return (
    <FormStyled>
      <div className="projects">
        <label htmlFor="projects-list" className="subtitle">
          Projects
        </label>
        <select className="projects-list" id="projects-list">
          <option value="" defaultValue={"https://verakissyou17.github.io/random-quote-app/"}>
            Select a project
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
        </select>
      </div>
      <div className="my-form" id="contact">
        <h2>Contact me</h2>
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
        <p className="message"></p>
      </div>
    </FormStyled>
  );
}

export default Form;
