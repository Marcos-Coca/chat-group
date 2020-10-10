import { useRouter } from 'next/router'
// import { getRoom } from 'services/chat'
function Layout ({ children }) {
  const router = useRouter()
  return <div>
    {children}
  </div>
}

export default Layout
