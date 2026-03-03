import styled from "styled-components";

export const FormStyled = styled.form`
  border: 3px solid green;
  margin-top: 20rem;
  /* .projects {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: auto;
    width: 100%;
    max-width: 450px;
  }

  .projects-list {
    border: 3px dotted var(--dark-lilac);
    background: linear-gradient(
      to bottom right,
      var(--dark-lilac),
      var(--light-blue)
    );
    border-radius: 0.5em;
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--white);
    cursor: pointer;
  }

  .projects-list option {
    background-color: var(--light-grey);
  }

  .projects-list option:checked {
    background-color: var(--dark-lilac);
  }

  .form-container {
    position: relative;
    width: 100%;
    max-width: 400px;
    height: 22em;
    border-radius: 10px;
    overflow: hidden;
    z-index: 1;
  }

  .form-container::before,
  .form-container::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    inset: -50%;
    background: conic-gradient(
      from 90deg,
      var(--light-blue),
      var(--magenta),
      var(--light-blue),
      var(--magenta)
    );
    transform-origin: bottom right;
    animation: animate 4s linear infinite;
    animation-play-state: running;
    transition: all 0.5s ease;
    z-index: 1;
  }

  .form-container::after {
    animation-delay: -2s;
  }

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .my-form {
    position: absolute;
    inset: 2px;
    border-radius: 10px;
    background: var(--light-grey);
    padding: 1em;
    z-index: 2;
    display: flex;
    flex-direction: column;
  }

  .my-form.dark-mode {
    background: var(--black);
  }

  .my-form h2 {
    color: #45f3ff;
    font-size: 1.2rem;
    font-weight: 500;
    text-align: center;
    letter-spacing: 0.1rem;
  }

  .inputBox {
    position: relative;
    width: 100%;
    margin-top: 1.5em;
  }

  .inputBox input,
  .inputBox textarea {
    position: relative;
    width: 100%;
    padding: 0.5em 0.7em;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    color: #23242a;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.05em;
    transition: all 0.5s ease;
    z-index: 1;
  }

  .inputBox label {
    position: absolute;
    left: 0;
    padding: 0.5em 0.7em;
    color: var(--dark-lilac);
    font-size: 0.8rem;
    font-weight: bold;
    letter-spacing: 0.05em;
    transition: all 0.5s ease;
  }

  .inputBox label.dark-mode {
    color: var(--teal-light);
  }

  .inputBox textarea ~ label {
    left: 15px;
  }

  .inputBox input:valid ~ label,
  .inputBox textarea:valid ~ label,
  .inputBox input:focus ~ label,
  .inputBox textarea:focus ~ label {
    font-size: 0.75rem;
    transform: translateX(-13px) translateY(-28px);
  }

  .inputBox i {
    position: absolute;
    left: 0;
    bottom: 0;
    background: #45f3ff;
    width: 100%;
    height: 2px;
    border-radius: 5px;
    overflow: hidden;
    transition: all 0.5s ease;
    pointer-events: none;
  }

  .inputBox input:valid ~ i,
  .inputBox input:focus ~ i,
  .inputBox textarea:focus ~ i {
    height: 100%;
  }

  input[type="submit"] {
    border: none;
    outline: none;
    color: var(--light-blue);
    background: transparent;
    padding: 0.5em 0.7em;
    font-size: 1.2rem;
    font-family: inherit;
    letter-spacing: 0.1rem;
    width: 100%;
    margin-top: 1.2em;
    border-radius: 5px;
    font-weight: 500;
    cursor: pointer;
  }

  input[type="submit"]:hover {
    box-shadow:
      2px 2px 3px var(--light-blue),
      -2px -2px 3px var(--light-blue);
  }

  input[type="submit"]:active {
    opacity: 0.8;
  }

  .form-container.dark-mode {
    background: var(--black);
    color: var(--teal-light);
  } */

  /* .message {
    text-align: center;
    color: var(--light-blue);
    margin-top: 1rem;
    font-size: 1.1rem;
    font-weight: 500;
  } */
`;
