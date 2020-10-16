import css from 'styled-jsx/css'

export default css`

 
 
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
