import PropTypes from 'prop-types'
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({blog, handleAddBookmark}) => {
    const {title, cover, author_img, author, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='mb-5' src={cover} alt={`cover pic for the ${title}`} />
            <div className='flex justify-between'>
                <div className='flex items-center gap-3'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h2 className='text-xl font-medium'>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} read</span> 
                    <button onClick={handleAddBookmark} className='ml-2 text-red-600'><FaRegBookmark /></button>
                </div>
            </div>
            <h2 className='text-3xl mt-3 mb-3'>{title}</h2>
            <p>
                {
                    hashtags.map((hashtag, iddx) => <span key={iddx}><a href=''>{hashtag}</a></span> )
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;