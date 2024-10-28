import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
// import PropTypes from 'prop-types';


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    } ,[])
    return (
        <div>
            <h2 className="text-xl font-medium">Blogs: {blogs.length}</h2>
            {
                blogs.map(blog => <Blog key={blogs.id} blog = {blog}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes ={

}

export default Blogs;