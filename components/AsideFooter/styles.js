import css from 'styled-jsx/css'

export default css`
  .Aside-Footer {
    height: 10%;
    display: flex;
    background: black;
  }
  .Aside-Footer > div {
    width: 80%;
    margin: auto;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
  }
  .Aside-Footer > div > button {
    width: 30px;
    border: none;
    height: auto;
    font-size: 20px;
    background: transparent;
  }
  .User-Menu {
    right: 0;
    bottom: 65%;
    width: 125px;
    font-weight: 500;
    font-size: 1.25rem;
    position: absolute;
    border-radius: 10px;
    background: var(--third-color);
  }
  .User-Menu > div {
    width: 80%;
    margin: auto;
    height: 60px;
    cursor: pointer;
    line-height: 60px;
    vertical-align: middle;
    border-bottom: 1px solid var(--font-main-color);
  }
  .User-Menu .User-Menu-Logout {
    color: red;
    border: none;
  }
`
