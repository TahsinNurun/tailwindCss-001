import React, { useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages';
import About from './pages/About';
import Menu from './pages/Menu';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  };

  useEffect(() =>{
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen){
        setIsOpen(false)
        console.log('i resized')
      }
    }
    window.addEventListener('resized', hideMenu)
    return () =>{
      window.removeEventListener('resized', hideMenu)
    }
  })
  return (
    <>
      <Navbar toggle={toggle}></Navbar>
      <Dropdown isOpen={isOpen} toggle={toggle}></Dropdown>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/menu" component={Menu}></Route>
        <Route path="/about" component={About}></Route>
      </Switch>
      <Footer></Footer>  
    </>
  );
}

export default App;
