import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className="nav">
            <nav className="navbar">
                <Link to="/">Home </Link>
                <Link to="/Create">Add Blog </Link>
            </nav>
            <br />
        </div>
    );
}

export default Navbar;