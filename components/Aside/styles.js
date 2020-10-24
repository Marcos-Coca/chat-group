import css from 'styled-jsx/css'

export default css`
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
  aside {
    flex: 0 0 310px;
    position: relative;
    background: var(--dark-main-color);
  }

  .Aside-Content {
    width: 85%;
    height: 90%;
    margin: auto;
  }

  .Aside-Footer {
    height: 10%;
    padding-top: 3%;
    background: black;
    border-top: 0.5px solid black;
  }
  .Aside-Footer > div {
    width: 80%;
    margin: auto;
    display:flex;
    justify-content:space-between;

  }
  .Aside-Footer > div > button{
    border:none;
    font-size:20px;
    background:transparent;
    color:var(--font-main-color);
  }
`
