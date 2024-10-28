import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa6";

const Blog = ({ blog }) => {
    const { title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div className="mb-14 mt-10">
            <img src={cover} alt={title} />
            <div className="flex justify-between mt-4 mb-4">
                <div className="flex gap-2">
                    <img className="w-14" src={author_img} alt="" />
                    <div>
                        <h3 className="text-xl font-medium">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <span>{reading_time} read</span>
                    <button className="ml-2"><FaBookmark /></button>
                </div>
            </div>
            <h2 className="text-2xl font-medium mb-4">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx} ><a href="">{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.array
}

export default Blog;