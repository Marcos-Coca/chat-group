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
    z-index: 300;
    display: flex;
    padding-left: 10%;
    font-weight: 500;
    position: absolute;
    align-items: center;
    background: var(--second-color);
    box-shadow: -1px 2px 3px 0px rgba(0, 0, 0, 0.55);
  }
  .chat {
    width: 85%;
    margin: auto;
    height: 85vh;
    position: relative;
  }

  @media(max-width:765px){
    .chat-room-top{
      padding-left:80px;
    }
  }

`
