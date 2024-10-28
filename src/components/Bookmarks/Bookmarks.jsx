import PropTypes from 'prop-types';

const Bookmarks = ({bookmarks}) => {
    
    return (
        <div>
            <h2 className="text-xl font-medium">Bookmarked:{bookmarks.length}</h2>
        </div>
    );
};

Bookmarks. propTypes = {
    bookmarks: PropTypes.array.isRequired
}

export default Bookmarks;