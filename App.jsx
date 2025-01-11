import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbarfiles/Navbar'
import Shop from './components/Navbarfiles/pages/Shop'
import Product from './components/Navbarfiles/pages/Products'
import ShopCategory from './components/Navbarfiles/pages/ShopCategories'
import LoginSignUp from './components/Navbarfiles/pages/LoginSignup'
import Cart from './components/Navbarfiles/pages/cart'
import Footer from "./components/Navbarfiles/FooterFiles/Footer"

function App() {
  

  return (
    <Router>
      <Navbar/>
      <Footer/>
      <Routes>
         <Route path='/' element={<Shop/>}/>

        <Route path='/mens' element={<ShopCategory category="men"/>}/>
        <Route path='/womens' element={<ShopCategory category="women"/>}/>
        <Route path='/kids' element={<ShopCategory category="kids"/>}/>
        <Route path='/products' element={<ShopCategory />}>
      <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </Router>
   
  )
}

export default App
