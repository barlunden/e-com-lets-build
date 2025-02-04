import { Link } from "react-router";


function NavBar() {
    return(
<nav>
    <ul>
        <NavItem title="Home" to="/" />
        <NavItem title="Users" to="/user" />
        <NavItem title="User Profile" to="user/userID" />
    </ul>
</nav>
    )
}

function NavItem ({ title, to }) {

    return (
        <li>
            <Link to={to}>
                {title}
            </Link>
        </li>
    );
}

export default NavBar