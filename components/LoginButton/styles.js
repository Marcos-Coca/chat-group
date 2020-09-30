import css from 'styled-jsx/css'

export default css`
  button {
    width: 100%;
    margin: auto;
    border: none;
    height: 50px;
    display: flex;
    padding: 12px;
    cursor: pointer;
    min-width: 230px;
    font-weight: 600;
    align-items: center;
    font-size: 1.125rem;
    border-radius: 0.5rem;
    justify-content: center;
  }

  button > span {
    margin-left: 12px;
  }

  button:nth-of-type(1) {
    grid-area: email;
    background: #fff;
  }

  button:nth-of-type(2) {
    grid-area: google;
    background: #fff;
  }
  button:nth-of-type(3) {
    grid-area: twitter;
    background: #00c4f5;
    color: var(--font-main-color);
  }
  button:nth-of-type(4) {
    grid-area: github;
    background: #2b353b;
    color: var(--font-main-color);
  }

  button:nth-of-type(5) {
    grid-area: facebook;
    background: #1877f2;
    color: var(--font-main-color);
  }

  @media (max-width: 650px) {
    button {
      max-width: 300px;
      margin: 10px auto;
    }
  }
`
