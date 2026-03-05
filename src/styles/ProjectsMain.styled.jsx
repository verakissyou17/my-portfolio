import styled from "styled-components";

export const ProjectsMainStyled = styled.main`
  padding: 1em;
  gap: 3rem;

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
    margin-bottom: 2rem;
  }

  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }

  .container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
    padding: 1rem;
    width: 100%;

    .main-article {
      max-width: 350px;
      margin: 2rem auto;
      background: var(--white);
      padding: 1rem;
      border-radius: 1rem;
      font-family: inherit;
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      transform-style: preserve-3d;
      transform: perspective(5000px) rotateX(var(--rotateX))
        rotateY(var(--rotateY));
      transition: transform 0.2s ease;

      body.dark-mode & {
        background: transparent;
        border: 2px solid var(--teal-dark);
      }

      .box {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        flex: 1;

        .project-details {
          flex: 1;

          .article-title {
            font-size: 1.5rem;
            color: var(--dark-lilac);
            margin-bottom: 0.5rem;
          }

          .article-link {
            color: var(--dark-lilac);
            font-style: italic;
            text-decoration: none;
            position: relative;
          }

          .article-link::after {
            content: "";
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 100%;
            height: 2px;
            border-radius: 0.1em;
            background: linear-gradient(
              -45deg,
              var(--teal-dark),
              var(--purple)
            );

            transform: scaleX(0);
            transform-origin: right;
            transition: transform 0.25s ease-in-out;
          }

          .article-link:hover::after {
            transform: scaleX(1);
            transform-origin: left;
            z-index: 1;
          }
        }

        img {
          max-width: 10rem;
          border-radius: 1rem;
        }
      }

      p {
        color: var(--teal-dark);
        flex: 1;

        body.dark-mode & {
          color: var(--dark-gray);
        }
      }
    }

    .main-article * {
      text-shadow: 0 0 0.1em currentColor;
    }

    .main-article::before,
    .main-article::after {
      content: "";
      position: absolute;
      border-radius: inherit;
    }

    .main-article::before {
      inset: 0.25rem;
      background: var(--black);
      transform: translateZ(-48px);
      filter: blur(15px);
      opacity: 0.5;

      body.dark-mode & {
        background: var(--white);
      }
    }

    .main-article::after {
      inset: -1rem;
      background: radial-gradient(
        circle,
        var(--purple) 0%,
        var(--light-blue) 50%,
        var(--dark-lilac) 100%
      );
      transform: translateZ(-50px);

      body.dark-mode & {
        background: var(--teal-dark);
        border: 3px solid var(--teal-dark);
      }
    }
  }

  @media (min-width: 48em) {
    .container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
