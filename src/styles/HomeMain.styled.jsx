import styled from "styled-components";

export const HomeMainStyled = styled.main`
  /* display: flex;
  flex-direction: row-reverse;
  gap: 5rem; */
  border: 2px solid red;
  padding: 1rem;

  .title {
    font-size: clamp(2rem, 0.944rem + 4.507vw, 5rem);
    background-image: linear-gradient(
      -225deg,
      var(--teal-dark) 0%,
      var(--magenta) 30%,
      var(--black) 70%,
      var(--light-blue) 100%
    );
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200% auto;
    color: #fff;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 5s linear infinite;
    transition: all 5s ease;
    text-align: center;
  }

  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }

  .about-me {
    /* display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 100%;
    line-height: 1.5; */
    border: 2px solid blue;
  }

  .about-me__text {
    text-align: justify;
  }

  .about-me__text p {
    font-style: italic;
    margin-top: 1em;
  }

  .about-me__text.dark-mode {
    color: var(--white);
  }

  .about-me__image {
    border-radius: 50%;
    box-shadow: 5px 5px 5px hsla(0, 0%, 0%, 0.3);
    max-width: 35%;
    display: inline-block;
  }

  .profile-image {
    border-radius: 50%;
  }

  .skills-list {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .skills-list .icon {
    font-size: 2rem;
    padding: 0.5rem;
    background-color: var(--dark-gray);
    border-radius: 0.25rem;
    box-shadow: 2px 2px 4px var(--teal-dark);
  }

  .skills-list li:nth-child(1) i {
    color: red;
  }

  .skills-list li:nth-child(2) i {
    color: green;
  }

  .skills-list li:nth-child(3) i {
    color: yellow;
  }

  .skills-list li:nth-child(4) i {
    color: purple;
  }

  .skills-list li:nth-child(5) i {
    color: var(--teal-dark);
  }

  .skills-list li:nth-child(6) i {
    color: orange;
  }
`;
