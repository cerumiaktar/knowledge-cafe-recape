import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center max-w-7xl mx-auto border-b-2 p-4'>
            <h1 className='text-3xl font-bold py-2'>Knowledge Cafe Recape</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;