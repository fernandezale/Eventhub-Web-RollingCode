import { Routes, Route } from "react-router"
import Layout from "../components/Layout"
import Home from "../pages/Home"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* demás rutas */}
      </Route>
    </Routes>
  )
}