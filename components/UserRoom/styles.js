import css from 'styled-jsx/css'

export default css`
  .Room-Container{
    cursor:pointer;
  }
  .Room-Logo {
    width: 40px;
    height: 40px;
    font-weight: 500;
    line-height: 40px;
    margin-right: 1rem;
    font-size: 1.25rem;
    text-align: center;
    border-radius: 10px;
    display: inline-block;
    background: var(--second-color);
  }
  .Room-Name {
    font-size: 1.25rem;
    overflow: hidden;
    text-overflow: ellipsis;
    width: calc(100% - 40px - 1rem);
  }
`
