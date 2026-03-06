import styled from "styled-components";

export const FormStyled = styled.div`
  .projects {
    margin-bottom: 2rem;

    .projects-title {
      display: block;
      margin-bottom: 1rem;
      color: var(--teal-dark);
      font-weight: bold;

      body.dark-mode & {
        color: var(--white);
      }
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
      cursor: pointer;
    }

    .projects-list option {
      background-color: transparent;
      color: var(--teal-dark);
      border: none;
      outline: none;
    }
  }

  .form-container {
    position: relative;
    width: 100%;
    max-width: 400px;
    min-height: ${({ $message }) => ($message ? "24rem" : "21rem")};
    border-radius: 1rem;
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
      var(--magenta),
      var(--light-blue),
      var(--magenta),
      var(--light-blue)
    );
    transform-origin: bottom right;
    animation: animate 2s linear infinite;
    animation-play-state: running;
    transition: all 0.5s ease;
    z-index: 1;
  }

  .form-container::after {
    animation-delay: -1s;
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
    inset: 5px;
    border-radius: 1rem;
    background: var(--white);
    border: 1px solid var(--dark-gray);
    padding: 1em;
    z-index: 2;
    display: flex;
    flex-direction: column;

    body.dark-mode & {
      background: var(--dark-gray);
      border: 1px solid var(--teal-dark);
    }

    h5 {
      color: var(--black);
      font-size: 1.2rem;
      font-weight: bold;
      text-align: center;
      letter-spacing: 0.1rem;

      body.dark-mode & {
        color: var(--light-blue);
      }
    }

    .inputBox {
      position: relative;
      width: 100%;
      margin-block: 1rem;

      input,
      textarea {
        position: relative;
        width: 100%;
        padding: 0.5em 0.7em;
        background: transparent;
        border: none;
        outline: none;
        box-shadow: none;
        color: var(--white);
        font-size: 0.9rem;
        font-weight: 500;
        transition: all 0.5s ease;
        z-index: 1;
      }

      label {
        position: absolute;
        left: 0;
        padding: 0.5em 0.7em;
        color: var(--black);
        font-size: 0.8rem;
        font-weight: bold;
        transition: all 0.5s ease;

        body.dark-mode & {
          color: var(--light-blue);
        }
      }

      textarea ~ label {
        left: 1rem;
        margin-bottom: 1rem;
      }

      input:valid ~ label,
      textarea:valid ~ label,
      input:focus ~ label,
      textarea:focus ~ label {
        font-size: 0.75rem;
        transform: translateX(-13px) translateY(-28px);
      }

      i {
        position: absolute;
        left: 0;
        bottom: 0;
        background: var(--dark-lilac);
        width: 100%;
        height: 3px;
        border-radius: 5px;
        overflow: hidden;
        transition: all 0.5s ease;
        pointer-events: none;
      }

      input:valid ~ i,
      input:focus ~ i,
      textarea:focus ~ i {
        height: 100%;
      }
    }

    button {
      border: none;
      outline: none;
      color: var(--light-blue);
      background: transparent;
      padding: 0.5rem 0.7rem;
      font-size: 1.2rem;
      font-family: inherit;
      letter-spacing: 0.1rem;
      width: 50%;
      align-self: center;
      margin-bottom: 1rem;
      font-weight: 500;
      cursor: pointer;
    }

    .message {
      display: block;
      margin-block: 1rem;
      text-align: center;
      color: var(--teal-dark);
      font-weight: bold;
    }

    .closed {
      display: none;
    }
  }

  @media (min-width: 48em) {
    display: flex;
    justify-content: space-evenly;
    gap: 2rem;
    padding: 2rem;
  }
`;
