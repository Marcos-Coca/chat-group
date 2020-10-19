import Search from 'components/Icons/Search'
import UserRoomsList from 'components/UserRoomsList'
import CreateRoomButton from 'components/CreateRoomButton'

function HomeAside ({ changeAside }) {
  return (
    <div className="Aside-Content-Container">
      <div className="Aside-Top">
        Rooms
        <CreateRoomButton/>
      </div>

      <form>
        <button>
          <Search fill="var(--font-main-color)" height="20px" width="20px" />
        </button>
        <input type="text" placeholder="Search" />
      </form>

      <UserRoomsList changeAside={changeAside}/>

      <style jsx>{`
        .Aside-Top {
          display: flex;
          padding: 0 1rem;
          justify-content: space-between;
        }


        form {
          width: 100%;
          display: flex;
          padding: 0 5px;
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
