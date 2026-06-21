import { useNavigate } from "react-router-dom";

function AdminNavbar() {

    const navigate = useNavigate();

    const handleLogout = () => {

        localStorage.clear();

        navigate("/login");
    };

    return (

        <nav
            className="navbar navbar-expand-lg navbar-dark px-4 shadow"
            style={{
                backgroundColor: "#0B1220",
                position: "sticky",
                top: "0",
                zIndex: "1000",
            }}
        >

            <div className="container-fluid">

                <span
                    className="navbar-brand fw-bold fs-3 text-warning"
                    style={{
                        cursor: "pointer"
                    }}
                    onClick={() =>
                        navigate("/admin/dashboard")
                    }
                >
                    🎬 MovieHub Admin
                </span>

                <div className="d-flex gap-3">

                    <button
                        className="btn btn-outline-warning"
                        onClick={() =>
                            navigate("/admin/add-movie")
                        }
                    >
                        Add Movie
                    </button>

                    <button
                        className="btn btn-outline-warning"
                        onClick={() =>
                            navigate("/admin/view-movies")
                        }
                    >
                        View Movies
                    </button>

                    <button
                        className="btn btn-outline-warning"
                        onClick={() =>
                            navigate("/admin/update-movie")
                        }
                    >
                        Update Movie
                    </button>

                    <button
                        className="btn btn-warning"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>

                </div>

            </div>

        </nav>

    );
}

export default AdminNavbar;