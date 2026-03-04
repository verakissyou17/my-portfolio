import styled from "styled-components";

export const HomeMainStyled = styled.main`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 1rem;

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
      transition: all 5s ease;
      text-align: center;
    }

    @keyframes textclip {
      to {
        background-position: 200% center;
      }
    }

    .about-me__image {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-block: 2rem;

      .profile-image {
        border-radius: 50%;
        max-width: 35%;
        box-shadow: 5px 5px 5px hsla(0, 0%, 0%, 0.3);
      }
    }

    .about-me__text {
      text-align: justify;
      margin-block: 2rem;

      body.dark-mode & {
        color: var(--white);
      }

      p {
        font-style: italic;
        margin-top: 1rem;
        line-height: 1.5;
      }
    }
  }

  .skills {

    .skills-subtitle {
      margin-bottom: 1rem;
    }

    .skills-list {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1rem;

      li .icon {
        font-size: 2.5rem;
        font-weight: bold;
        padding: 0.5rem;
        background-color: var(--light-grey);
        border-radius: 0.25rem;
        box-shadow: 2px 2px 4px  var(--teal-dark);

        body.dark-mode & {
          background-color: var(--white);
        }
      }

      li .icon:hover {
        transform: scale(1.2);
        transition: transform 0.5s ease;
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
`;
