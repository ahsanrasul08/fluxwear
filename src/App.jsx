import { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router';
import './App.css'
import RootLayout from './Layouts/RootLayout';
import Home from './Pages/Home';
import About from './Pages/About';
import Collection from './Pages/Collection';
import Contact from './Pages/Contact';

function App() {

  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home />}/>
        <Route path="collection" element={<Collection />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  )


  return (
    <div className='app_container'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
