import styled from "styled-components";

export const HeaderStyled = styled.header`
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  background-color: var(--white);
  transition: background-color 0.5s ease-in;

  body.dark-mode & {
    background-color: var(--dark-gray);
  }

  .hamburger {
    position: relative;
    width: 30px;
    height: 22px;
    cursor: pointer;

    & .bar {
      position: absolute;
      left: 0;
      width: 100%;
      height: 3px;
      background: var(--teal-dark);
      transition: all 0.3s ease;

      body.dark-mode & {
        background-color: var(--teal-light);
      }
    }

    .bar:nth-child(1) {
      top: 0;
    }

    .bar:nth-child(2) {
      top: 50%;
      transform: translateY(-50%);
    }

    .bar:nth-child(3) {
      bottom: 0;
    }
  }

  .hamburger.closed .bar:nth-child(1) {
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
  }

  .hamburger.closed .bar:nth-child(2) {
    opacity: 0;
  }

  .hamburger.closed .bar:nth-child(3) {
    top: 50%;
    transform: translateY(-50%) rotate(-45deg);
  }

  .navbar {
    .nav-list {
      list-style: none;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      gap: 1rem;

      & li a {
        background: linear-gradient(
          145deg,
          var(--light-grey),
          var(--teal-dark)
        );
        color: var(--white);
        padding: 0 0.5em;
        font-family: inherit;
        font-weight: 500;
        font-size: 1rem;
        text-decoration: none;
        border: none;
        outline: none;
        border-radius: 0.25em;
        cursor: pointer;

        body.dark-mode & {
          background: linear-gradient(
            45deg,
            var(--dark-gray) 0%,
            var(--dark-lilac) 95%
          );
          color: var(--teal-light);
        }
      }
    }
  }

  .navbar.hidden {
    display: none;
  }

  .toggle-btn {
    width: 3rem;
    height: 1.5rem;
    margin-left: auto;
    background-color: transparent;
    border: 2px solid var(--teal-dark);
    border-radius: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease;

    body.dark-mode & {
      border: 2px solid var(--teal-light);
    }

    .ball {
      position: absolute;
      width: 50%;
      height: 1.5rem;
      inset: -2px 0 2px 0;
      border-radius: 1.5rem;
      background-color: var(--teal-dark);
      transition: transform 0.3s linear;

      body.dark-mode & {
        transform: translateX(100%);
        background-color: var(--white);
      }
    }

    .icon-sun {
      color: var(--yellow);
      font-size: 1rem;
    }

    .icon-moon {
      color: var(--dark-gray);
      font-size: 1rem;
    }
  }
`;
