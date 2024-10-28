import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
    return (
        <div className="flex justify-between items-center max-w-6xl mx-auto border-b-2 border-gray-400 p-4">
            <h1 className="text-2xl font-medium">Knowledge Cafe</h1>
            <p className="text-2xl"><FaRegUserCircle /></p>
        </div>
    );
};

export default Header;