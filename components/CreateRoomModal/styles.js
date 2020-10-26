import css from 'styled-jsx/css'

export default css`
  form {
    width: 90%;
    margin: auto;
  }
  textarea {
    height: 100px;
  }
  .button {
    margin-left: 80%;
  }
  input,
  textarea {
    width: 100%;
    border: none;
    resize: none;
    border: none;
    outline: none;
    padding: 0.5rem;
    font-size: 1.25rem;
    border-radius: 8px;
    margin-bottom: 1rem;
    color: var(--font-main-color);
    background: var(--third-color);
    font-family: Arial, Helvetica, sans-serif;
  }
  input::placeholder,
  textarea::placeholder {
    color: var(--font-second-color);
  }
  .Modal-Content {
    min-height: 300px;
    border-radius: 1rem;
    padding: 1.5rem 2.5rem;
    background: var(--dark-main-color);
  }
`
