import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Navbar } from "./components/Navbar"
import { Products } from "./pages/Products"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<Products />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App
