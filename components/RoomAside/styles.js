import css from 'styled-jsx/css'

export default css`
  .Aside-Top button {
    color: #fff;
    width: 30px;
    height: 25px;
    border: none;
    outline: none;
    cursor: pointer;
    position: relative;
    margin-right: 0.5rem;
    background: transparent;
  }
  .Aside-Top button:after {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    content: '${'\\003C'}';
    font-size: 1.5rem;
    position: absolute;
    font-weight: bold;
  }
  .Aside-Description {
    margin-bottom: 2.5rem;
  }
`
