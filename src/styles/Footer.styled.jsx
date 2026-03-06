import styled from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  a {
    text-decoration: none;
    color: var(--light-blue);
  }

  .footer-nav {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .icon {
    font-size: 2rem;
    color: var(--light-blue);
    padding: 0.25rem;
  }

  .icon:is(:hover) {
    box-shadow:
      3px 3px 3px var(--light-blue),
      -3px -3px 3px var(--light-blue);
    transform: scale(1.2);
    cursor: pointer;
  }

  .icons:is(:focus) {
    color: var(--light-grey);
  }

  body.dark-mode & {
    color: var(--white);
  }
`;
