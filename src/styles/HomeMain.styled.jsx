import styled from "styled-components";

export const HomeMainStyled = styled.main`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 2rem;
  max-width: 80%;
  margin: 0 auto;

  .about-me {
    flex-grow: 1;

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
      text-align: center;
      margin: 5rem auto;
      opacity: 0;
      transform: translateX(-100px);
      transition: all 5s ease;
    }

    @keyframes textclip {
      to {
        background-position: 200% center;
      }
    }

    .title.visible {
      opacity: 1;
      transform: translateX(0);
    }

    .hero {
      width: 100%;
      min-height: 60vh;
      border-radius: 1.2rem;
      background: url("./images/programming-languages.webp");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      position: relative;
      margin: 5rem auto;

      body.dark-mode & {
        background: url("./images/dark-background.webp");
        background-repeat: no-repeat;
        background-size: cover;
      }
    }

    .hero::after {
      content: "";
      position: absolute;
      inset: 2px -2px -2px 2px;
      border-radius: 1.2rem;
      transform: translate(5px, -5px);
      box-shadow:
        2px 2px 10px var(--light-blue),
        -2px -2px 10px var(--teal-light),
        2px 2px 10px var(--light-blue),
        -2px 2px 10px var(--teal-light);
      z-index: -1;
    }

    .about-me__text {
      padding: 1rem;
      margin: 5rem auto;
      box-shadow:
        2px 2px 5px var(--teal-dark-alpha),
        -2px -2px 5px var(--teal-dark-alpha);
      opacity: 0;
      transform: translateX(100px);
      transition: all 2s ease-in-out;

      body.dark-mode & {
        color: var(--white);
        box-shadow:
          2px 2px 5px var(--light-blue),
          -2px -2px 5px var(--light-blue);
      }
    }

    .about-me__text.visible {
      opacity: 1;
      transform: translateX(0);
    }

    .text-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      padding: 1.5rem;
      p {
        font-style: italic;
        line-height: 1.5;
      }
      .about-me__image {
        .profile-image {
          border-radius: 50%;
          box-shadow: 5px 5px 5px hsla(0, 0%, 0%, 0.3);
          max-width: 6rem;
        }
      }
    }
  }

  .skills {
    max-width: 100%;
    margin: 10rem auto;
    padding: 2rem;
    box-shadow:
      2px 2px 5px var(--teal-dark-alpha),
      -2px -2px 5px var(--teal-dark-alpha);
    opacity: 0;
    transform: translateX(-50px);
    transition: all 2s ease-in-out;

    body.dark-mode & {
      box-shadow:
        2px 2px 5px var(--light-blue),
        -2px -2px 5px var(--light-blue);
      color: var(--white);
    }
    .skills-subtitle {
      margin-bottom: 1.5rem;
      text-align: center;
    }

    .skills-list {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-wrap: wrap;
      gap: 1rem;

      li .icon {
        font-size: 2.5rem;
        font-weight: bold;
        padding: 0.5rem;
        background-color: var(--white);
        border-radius: 0.25rem;
        box-shadow: 2px 2px 4px var(--teal-dark);

        body.dark-mode & {
          background-color: var(--white);
        }
      }

      li .icon:hover {
        transform: scale(1.2);
        transition: transform 0.5s ease;
        cursor: pointer;
      }

      li:nth-child(1) .icon {
        color: red;
      }

      li:nth-child(2) .icon {
        color: green;
      }

      li:nth-child(3) .icon {
        color: yellow;
      }

      li:nth-child(4) .icon {
        color: purple;
      }

      li:nth-child(5) .icon {
        color: var(--teal-dark);
      }

      li:nth-child(6) .icon {
        color: orange;
      }
    }
  }

  .skills.visible {
    opacity: 1;
    transform: translateX(0);
  }

  @media (min-width: 48em) {
    .about-me {
      .title {
        transform: translateX(-1000px);
      }

      .about-me__text {
        transform: translateX(500px);

        .text-container {
          flex-direction: row;

          .about-me__image {
            max-width: 5rem;
          }
        }
      }
    }

    .skills {
      transform: translateX(-500px);

      .skills-subtitle {
        text-align: center;
      }
    }
  }
`;
