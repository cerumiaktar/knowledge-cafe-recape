import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-red-200 p-4 rounded-xl mb-5'>
            <h1 className='text-2xl'>{title}</h1>
        </div>
    );
};

Bookmark. propTypes ={
    bookmark: PropTypes.object
}

export default Bookmark;