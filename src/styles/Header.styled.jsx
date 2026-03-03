import styled from "styled-components";

export const HeaderStyled = styled.header`
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  background-color: var(--white);
  transition: background-color 0.5s ease-in;

  .header.dark-mode {
    background-color: var(--dark-gray);
  }

  .hamburger {
    width: 2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .bar {
    width: 100%;
    height: 0.3em;
    margin: 0.2em 0;
    background-color: var(--teal-dark);
    transition: transform 1s ease;
  }

  .hamburger.closed .bar:first-child {
    transform-origin: right top;
    transform: rotate(-50deg);
  }

  .hamburger.closed .bar:last-child {
    transform-origin: right bottom;
    transform: rotate(50deg);
  }

  .hamburger.closed .bar:nth-child(2) {
    transform-origin: right center;
    transform: translateX(-100px);
  }

  .nav-list {
    list-style: none;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .nav-list.closed {
    display: none;
  }

  .nav-list li a {
    background: linear-gradient(145deg, var(--light-grey), var(--teal-dark));
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
  }

  .nav-list li a.dark-mode {
    background: linear-gradient(
      45deg,
      var(--dark-gray) 0%,
      var(--dark-lilac) 95%
    );
    color: var(--teal-light);
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
  }

  .toggle-btn.dark-mode {
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
  }

  .ball.dark-mode {
    transform: translateX(100%);
    background-color: var(--white);
  }

  .fa-moon {
    color: var(--dark-gray);
    font-size: 1rem;
  }

  .fa-sun {
    color: var(--yellow);
    font-size: 1rem;
  }
`;
