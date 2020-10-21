import css from 'styled-jsx/css'

export default css`

.messages-container {
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
