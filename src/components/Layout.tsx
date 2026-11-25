import { Outlet } from "react-router"

const Layout = () => {
  return (
    <div>
      {/* Navbar o Header*/}
      <main>
        <Outlet />
      </main>
      {/* Footer */}
    </div>
  )
}

export default Layout