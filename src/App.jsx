
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'


function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmarks = blog =>{
    console.log("bookmark adding soon")
  }

  return (
    <>
      <Header></Header>
      <div className='flex justify-between max-w-6xl mx-auto'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
