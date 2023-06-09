import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css'
import NavBar from './components/navBar';

import HotSales from './components/Hotsales';
import Electronics from './components/Electronics';

import ItemInfo from './components/iteminfo';

import SearchBar from './components/searchBar';
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
    { id: 1, price: 20000, rating: 3, image: p1 },
    { id: 2, price: 15000, rating: 3, image: p2 },
    { id: 3, price: 8000, rating: 2, image: p3 },
    { id: 4, price: 12000, rating: 4, image: p4 },
    { id: 5, price: 1000, rating: 5, image: p5 },
    { id: 6, price: 300000, rating: 5, image: p6 },
    { id: 7, price: 25000, rating: 4, image: p7 },
    { id: 8, price: 5000, rating: 3, image: p8 },
    { id: 9, price: 20000, rating: 2, image: p9 },
    { id: 10, price: 40000, rating: 3, image: p10 },

  ]
  return (
    <div className="App container">

      <SearchBar visible={visible} setVisible={setVisible} setblurValue={setblurValue}></SearchBar>
      <Router>
        <NavBar blurValue={blurValue} setblurValue={setblurValue} visible={visible} setVisible={setVisible}></NavBar>
        <Routes>
          <Route path='/' element={<HotSales blurValue={blurValue} />} />
          <Route path='/electronics' element={<Electronics blurValue={blurValue} />} />


          {allItems.map(item => (
            <Route key={item.id} path={`/items/${item.id}`} element={<ItemInfo blurValue={blurValue}
              item={item} />} />
          ))}

        </Routes>
      </Router>

      <BttBtn></BttBtn>

    </div>
  );
}

export default App;
