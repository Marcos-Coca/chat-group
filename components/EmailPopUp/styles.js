import css from 'styled-jsx/css'

export default css`
  .modal {
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    position: fixed;
    background: rgba(9, 10, 11, 0.75);
  }
  .modal-content {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    margin: auto;
    padding: 2.5rem;
    max-width: 600px;
    text-align: left;
    position: absolute;
    height: fit-content;
    font-size: 1.125rem;
    background: var(--main-color);
  }

  .modal-return {
    top: 0;
    right: 3%;
    cursor: pointer;
    position: absolute;
  }

  .modal-return:after {
    font-size: 40px;
    content: '${'\\00D7'}';
  }

  .modal-buttons {
    margin: 2rem 0;
    text-align: right;
  }
  .Wrong-Message {
    margin: auto;
    color: red;
    font-weight: bold;
    vertical-align: middle;
  }

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.8rem;
  }
  h3 {
    margin: 0;
    font-size: 23px;
    margin-bottom: 11px;
  }

  p {
    margin-bottom: 23px;
  }
  input {
    width: 100%;
    height: 50px;
    font-size: 18px;
    overflow: hidden;
    border-radius: 6px;
    margin-bottom: 1rem;
    padding: 0.6rem 0.56rem;
    color: var(--font-main-color);
    background-color: var(--dark-main-color);
    border: 1px solid var(--font-second-color);
  }

  input:focus {
    border-color: var(--main-color);
  }

  @media(max-width:650px){
      .modal-content{
          height:100vh;
      }

  }
`
