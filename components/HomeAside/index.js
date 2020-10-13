import Search from 'components/Icons/Search'
function HomeAside () {
  return (
    <div className="Aside-Content-Container">
      <div className="Aside-Top">
        Rooms
        <button>+</button>
      </div>

      <form>
        <button>
          <Search fill="var(--font-main-color)" height="20px" width="20px" />
        </button>
        <input type="text" placeholder="Search" />
      </form>

      <style jsx>{`
        .Aside-Top {
          display: flex;
          padding: 0 1rem;
          justify-content: space-between;
        }

        .Aside-Top button {
          width: 30px;
          border: none;
          height: 30px;
          cursor: pointer;
          border-radius: 10px;
          font-size: 1.25rem;
          color: var(--font-main-color);
          background: var(--second-color);
        }

        form {
          width: 100%;
          display: flex;
          overflow:hidden;
          margin-top: 1rem;
          align-items:center;
          border-radius: 10px;
          background: var(--third-color);
        }

        form input[type='text'] {
          padding: 10px;
          max-width:100%;
          background: transparent;
        }

        form button {
          border: none;
          background: transparent;
        }
      `}</style>
    </div>
  )
}

export default HomeAside
