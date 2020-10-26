import styles from './styles'

function Loader () {
  return (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default Loader
