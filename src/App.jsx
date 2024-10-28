
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'


function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingsTime, setReadingsTime] = useState(0);

  const handleAddToBookmarks = blog =>{
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks);
  }

  const handleReadingTime = time =>{
      const newReadingTime = readingsTime + time;
      setReadingsTime(newReadingTime)
  }

  return (
    <>
      <Header></Header>
      <div className='flex justify-between max-w-7xl mx-auto gap-6'>
        <Blogs handleReadingTime={handleReadingTime} handleAddToBookmarks = {handleAddToBookmarks}></Blogs>
        <Bookmarks  bookmarks = {bookmarks} readingsTime ={readingsTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
