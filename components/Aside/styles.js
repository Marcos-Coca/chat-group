import css from 'styled-jsx/css'

export default css`
  aside {
    flex: 0 0 310px;
    position: relative;
    background: var(--dark-main-color);
    transition: 0.4s ease;
  }

  .Aside-Content {
    width: 85%;
    height: 90%;
    margin: auto;
  }
  .Hamburger {
    top: 15px;
    left: 30px;
    display:none;
    cursor: pointer;
    z-index: 300000;
    position: absolute;
    background: transparent;
  }

  .Hamburger > div {
    width: 25px;
    height: 3px;
    margin: 4px 0;
    transition: 0.4s;
    background-color: var(--font-main-color);
  }
  #btnControl {
    display: none;
  }
  #btnControl:checked + label .bar1 {
    transform: rotate(-45deg) translate(-4px, 4px);
  }

  #btnControl:checked + label .bar2 {
    opacity: 0;
  }

  #btnControl:checked + label .bar3 {
    transform: rotate(45deg) translate(-6px, -6px);
  }

  @media (max-width: 765px) {
    aside {
      left: -100%;
      height: 100%;
      z-index: 30000;
      position: absolute;
      flex-basis: 1 1 90%;
    }
    .Hamburger{
      display: inline-block;
    }
    #btnControl:checked + label{
      top:10px;
      left:90%;
      padding:4px;
      border-radius:10px;
      background:var(--third-color);
    }
    #btnControl:checked + label + aside {
      left: 0;
    }
  }
`
