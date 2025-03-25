import React from 'react';
// import image1 from './assets/clothing.jpg';
import {assets} from './assets/assets.js';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Cart from './pages/Cart.jsx';
import Collection from './pages/Collection.jsx';
import Contact from './pages/Contact.jsx';
import Login from './pages/Login.jsx';
import Order from './pages/Order.jsx';
import Product from './pages/Product.jsx';
import PlaceOrder from './pages/PlaceOrder.jsx';
import Footer from './components/Footer.jsx';




function App() {
  return (
   <div className='px-4 sm:px-[4vw] md:px-[6vw]  lg:px-[8vw]'>
    {/* <h1>App component</h1> */}
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='./about' element={<About/>}/>
      <Route path='./cart' element={<Cart/>}/>
      <Route path='./collection' element={<Collection/>}/>
      <Route path='./contact' element={<Contact/>}/>
      <Route path='./login' element={<Login/>}/>
      <Route path='./order' element={<Order/>}/>
      <Route path='./product' element={<Product/>}/>
      <Route path='./placeOrder' element={<PlaceOrder/>}/>
    </Routes>
    <Footer/>
   </div>
  )
}

export default App
