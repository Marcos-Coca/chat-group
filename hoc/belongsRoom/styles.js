import css from 'styled-jsx/css'

export default css`
  h3 {
    font-size: 1.6rem;
    font-weight: normal;
  }
  span {
    font-size: 1.25rem;
  }
  .NotBelongs-Container {
    width: 100%;
    height: 100vh;
    display: flex;
  }
  .NotBelongs-Container > div {
    width: 50%;
    margin: auto;
    max-width: 576px;
    border-radius: 10px;
    text-align: center;
    background: var(--main-color);
  }

  .buttons > * {
    margin: 1.5rem 10px;
  }
  .loader{
    width:100%;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
  }

  @media (max-width: 650px) {
    .NotBelongs-Container > div {
      width: 100%;
    }
    .NotBelongs-Container {
      background: var(--main-color);
    }
  }
`
