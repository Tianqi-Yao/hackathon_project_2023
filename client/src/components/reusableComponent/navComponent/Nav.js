import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link to="/">
        <button>HomePage</button>
      </Link>
      <Link to="/map">
        <button>Map</button>
      </Link>
      {/* <Link to="/demo"><button>DemoPage</button></Link> */}
      <Link to="/api">
        <button>ApiPage</button>
      </Link>
    </nav>
  );
}
