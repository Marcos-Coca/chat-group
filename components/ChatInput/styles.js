import css from 'styled-jsx/css'

export default css`
  form {
    top: 90vh;
    width: 100%;
    height: 50px;
    display: flex;
    overflow: hidden;
    position: absolute;
    align-items: center;
    padding-right: 10px;
    border-radius: 10px;
    background: var(--third-color);
  }
  form input[type='text'] {
    width: 100%;
    padding: 1rem;
    font-size: 1.25rem;
    background: transparent;
  }

  form button {
    width: 40px;
    height: 40px;
    border: none;
    display: grid;
    cursor: pointer;
    border-radius: 5px;
    place-items: center;
    background: transparent;
    background: var(--font-main-color);
  }
`
