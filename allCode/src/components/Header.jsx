import { Link } from "react-router";

function Header() {
  return (
    <div className="p-10 bg-gradient-to-r from-30% to-70% from-indigo-700 to-indigo-950 text-sky-50">
      <div>
        <Link to="/" className="text-3xl lg:text-5xl">
          GlobProConnect
        </Link>
        <p>Where gibberish turns to collaboration</p>
      </div>
      <div className="text-right text-xl underline decoration-wavy decoration-indigo-200">
        <Link to="/users/">To the user profiles and beyond...</Link>
      </div>
    </div>
  );
}

export default Header;
