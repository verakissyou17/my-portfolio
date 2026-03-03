import styled from "styled-components";

export const FooterStyled = styled.footer`
  /* width: 100%;
  max-width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between; */
  padding: 1rem;

  a {
    align-self: center;
    text-decoration: none;
  }

  .icon {
    font-size: 3rem;
    color: var(--light-blue);
    padding: 0.25rem;
  }

  .icon:is(:hover) {
    box-shadow:
      3px 3px 3px var(--light-blue),
      -3px -3px 3px var(--light-blue);
    transform: scale(1.2);
  }

  .icons:is(:focus) {
    color: var(--light-grey);
  }



  .skills {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 450px;
  }

  .subtitle {
    color: var(--teal-dark);
    font-weight: bold;
  }

  .subtitle.dark-mode {
    color: var(--teal-light);
  }
`;
