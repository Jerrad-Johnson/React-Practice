let urla = "https://idealportraits.com";
let urlb = "https://jerradjohnson.com";
let urlc = "https://codersion.com";

const Navbar = () => {
    return (
        <div className="nav">
            <nav className="navbar">
                    <li><a href="/">Home</a></li>
                    <li><a href={ urla }>IP</a></li>
                    <li><a href={ urlb }>JJ</a></li>
                    <li><a href={ urlc }>Code</a></li>
                    <li><a href="/contact">Contact</a></li>
            </nav>
            <br />
        </div>
    );
}

export default Navbar;