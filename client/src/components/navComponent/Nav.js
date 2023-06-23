import { Link } from "react-router-dom";

function Nav(props) {
    return (
        <nav>
            <Link to="/"><button>HomePage</button></Link>
            <Link to="/demo"><button>DemoPage</button></Link>
            <Link to="/api"><button>ApiPage</button></Link>
        </nav>
    );
}

export default Nav;
