function HomeAside () {
  return (
    <div className="Aside-Content-Container">
      <div className="Aside-Top">
        Rooms
        <button>+</button>
      </div>

      <form>
        <input type="text" placeholder="Search"/>
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
          cursor:pointer; 
          border-radius:10px;
          font-size: 1.25rem;
          color: var(--font-main-color);
          background: var(--second-color);
        }

        input[type='text']{
            margin-top:1rem;
            padding: 10px;
            border-radius:10px;
            background:var(--third-color);
        }
      `}</style>
    </div>
  )
}

export default HomeAside
