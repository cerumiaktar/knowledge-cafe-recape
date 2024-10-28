import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks, readingsTime}) => {
    
    return (
        <div>
            <div>
                <h2 className='text-xl'>ReadTime:{readingsTime}</h2>
            </div>
            <h2 className="text-xl font-medium">Bookmarked:{bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id}  bookmark = {bookmark}></Bookmark> )
            }
        </div>
    );
};

Bookmarks. propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingsTime: PropTypes.number
    
}

export default Bookmarks;