import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css'
import NavBar from './components/navBar';

import HotSales from './components/Hotsales';
import Aboutus from './components/Aboutus';
import Joinus from './components/Joinus';

import ItemInfo from './components/iteminfo';

import SearchBar from './components/searchBar';
import CartBtn from './components/cartbtn';
import BttBtn from './components/backtotopbtn';

import p1 from './image/p1.png'
import p2 from './image/p2.png'
import p3 from './image/p3.png'
import p4 from './image/p4.png'
import p5 from './image/p5.png'
import p6 from './image/p6.png'
import p7 from './image/p7.png'
import p8 from './image/p8.png'
import p9 from './image/p9.png'
import p10 from './image/p10.png'

function App() {
  const [visible, setVisible] = useState(false)
  const [blurValue, setblurValue] = useState(0)

  const allItems = [
    { id: 1, price: 20000, rating: 3, image: p1, name: 'Anime Hoodie' },
    { id: 2, price: 15000, rating: 3, image: p2, name: 'Plain Shoes' },
    { id: 3, price: 8000, rating: 2, image: p3, name: 'Plate Chain' },
    { id: 4, price: 12000, rating: 4, image: p4, name: 'USB Stick' },
    { id: 5, price: 1000, rating: 5, image: p5, name: 'Doritos Snacks' },
    { id: 6, price: 300000, rating: 5, image: p6, name: 'Black Shark 5 pro' },
    { id: 7, price: 25000, rating: 4, image: p7, name: 'Power Bank' },
    { id: 8, price: 5000, rating: 3, image: p8, name: 'Portable Fan' },
    { id: 9, price: 20000, rating: 2, image: p9, name: 'Non-stick Pan' },
    { id: 10, price: 40000, rating: 3, image: p10, name: 'JBL bluetooth speaker' },

  ]

  const [cartItem, setCartItem] = useState(0)
  const [cartItemId, setCartItemId] = useState([])
  const [imgSrc, setImgSrc] = useState('')
  const [xCount, setXCount] = useState(1)
  const [cartValue, setCartValue] = useState(0)
  return (
    <div className="App container">

      <SearchBar visible={visible} setVisible={setVisible} setblurValue={setblurValue}></SearchBar>
      <BrowserRouter>
        <NavBar blurValue={blurValue} setblurValue={setblurValue} visible={visible} setVisible={setVisible}></NavBar>

        <Routes>
          <Route path='/react_simple_ecommerce' element={<HotSales blurValue={blurValue} cartItem={cartItem}
            setCartItem={setCartItem} cartItemId={cartItemId} setCartItemId={setCartItemId} allItems={allItems}
            setXCount={setXCount} cartValue={cartValue} setCartValue={setCartValue} />} />

          <Route path='/aboutus' element={<Aboutus blurValue={blurValue} />} />
          <Route path='/joinus' element={<Joinus blurValue={blurValue} />} />


          {allItems.map(item => (
            <Route key={item.id} path={`/items/${item.id}`} element={<ItemInfo blurValue={blurValue}
              item={item} imgSrc={imgSrc} setImgSrc={setImgSrc} cartItem={cartItem} setCartItem={setCartItem}
              cartItemId={cartItemId} setCartItemId={setCartItemId} xCount={xCount} setXCount={setXCount}
              cartValue={cartValue} setCartValue={setCartValue} />} />
          ))}

        </Routes>
        <CartBtn cartItem={cartItem} setCartItem={setCartItem} cartItemId={cartItemId}
          setCartItemId={setCartItemId} allItems={allItems} imgSrc={imgSrc} setImgSrc={setImgSrc} setXCount={setXCount}
          cartValue={cartValue} setCartValue={setCartValue}></CartBtn>
      </BrowserRouter>



      <BttBtn></BttBtn>

    </div>
  );
}

export default App;
