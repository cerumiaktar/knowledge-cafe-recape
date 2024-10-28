import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div>
            <h1 className='text-2xl'>{title}</h1>
        </div>
    );
};

Bookmark. propTypes ={
    bookmark: PropTypes.object
}

export default Bookmark;