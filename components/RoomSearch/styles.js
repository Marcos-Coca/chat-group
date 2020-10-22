import css from 'styled-jsx/css'

export default css`
  form {
    width: 100%;
    display: flex;
    padding: 0 8px;
    overflow: hidden;
    margin-top: 1rem;
    align-items: center;
    border-radius: 10px;
    background: var(--third-color);
  }

  form input[type='text'] {
    padding: 10px;
    max-width: 100%;
    background: transparent;
  }

  form button {
    border: none;
    background: transparent;
  }
  .Test{
      background:red;
      position:absolute;
      color:var(--font-main-color);
  }
`
