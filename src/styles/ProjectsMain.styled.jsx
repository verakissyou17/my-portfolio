import styled from "styled-components";

export const ProjectsMainStyled = styled.main`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  }

  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }

  .container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    padding: 1rem;
    width: 100%;
  }

  .main-article {
    max-width: 400px;
    margin: 1em auto;
    background: var(--light-blue);
    padding: 2rem;
    border-radius: 1rem;
    font-family: inherit;
    font-size: 1.5rem;
    color: var(--black);
    line-height: 1.5;
    position: relative;
    transform-style: preserve-3d;
    transform: perspective(5000px) rotateX(var(--rotateX))
      rotateY(var(--rotateY));
  }

  .main .main-article .article-link {
    color: var(--dark-lilac);
    font-style: italic;
    text-decoration: none;
    position: relative;
  }

  .main .main-article .article-link::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    border-radius: 0.1em;
    background: linear-gradient(-45deg, var(--teal-dark), var(--purple));

    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.25ms ease-in-out;
  }

  .main .main-article .article-link:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }

  .main .main-article .article-title {
    color: var(--dark-lilac);
    font-size: 2rem;
  }

  .main .main-article p {
    color: var(--teal-dark);
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

  .main-article::after {
    inset: -1rem;
    background: linear-gradient(-45deg, var(--teal-dark), var(--purple));
    transform: translateZ(-50px);
  }

  .main-article::before {
    inset: 0.75rem;
    background: var(--yellow);
    transform: translateZ(-48px);
    filter: blur(15px);
    opacity: 0.5;
  }
`;
