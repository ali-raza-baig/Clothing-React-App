import { Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import AboutPage from "./Pages/AboutPage"
import ProductsPage from "./Pages/ProductsPage"
import ProductDetails from "./Pages/ProductDetails"
import LoginPage from "./Pages/LoginPage"


function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/product-detail" element={<ProductDetails />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}

export default App
