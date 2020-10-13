import css from 'styled-jsx/css'

export default css`
  .chat-room {
    width: 100%;
    position: relative;
  }
  .chat-room-top {
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    z-index: 3000;
    display: flex;
    padding-left: 10%;
    font-weight: 500;
    position: absolute;
    align-items: center;
    background: var(--second-color);
    box-shadow: -1px 2px 3px 0px rgba(0, 0, 0, 0.55);
  }
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
    border: none;
    padding: 1rem;
    outline: none;
    font-size: 1.25rem;
    background: transparent;
    color: var(--font-main-color);
  }
  form input[type='text']::placeholder {
    color: var(--font-second-color);
  }
  form button {
    width: 40px;
    height: 40px;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 5px;
    background: transparent;
    background: var(--font-main-color);
  }
  .chat {
    width: 85%;
    margin: auto;
    height: 85vh;
    position: relative;
  }
  .chat > div {
    height: 100%;
    overflow-y: scroll;
  }
  .messages-top {
    min-height: 50px;
  }
  .messages-top > .loader {
    height: 25px;
    display: flex;
    padding: 100px;
    align-items: center;
    justify-content: center;
  }
`
