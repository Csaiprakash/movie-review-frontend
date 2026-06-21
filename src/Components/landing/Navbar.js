import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../CSS/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
            <div className="container">

                {/* Logo */}
                <Link className="navbar-brand fw-bold fs-3" to="/">
                    🎬 MovieHub
                </Link>

                {/* Mobile Toggle */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menu */}
                <div className="collapse navbar-collapse" id="navbarContent">

                    <ul className="navbar-nav ms-auto align-items-center">

                        <li className="nav-item me-3">
                            <Link className="nav-link" to="/login">
                                Login
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className="btn btn-warning fw-semibold px-4"
                                to="/register"
                            >
                                Register
                            </Link>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;