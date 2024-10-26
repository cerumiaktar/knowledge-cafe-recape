
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmark, setBookmark] = useState([]);

  const handleAddBookmark = blog =>{
    console.log("adding bookmark")
  }
  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddBookmark={handleAddBookmark}></Blogs>
        <Bookmarks ></Bookmarks>
      </div>
    </>
  )
}

export default App
