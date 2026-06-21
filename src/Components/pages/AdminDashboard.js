import { useNavigate } from "react-router-dom";
import AdminNavbar from "../AdminNavbar.js"
function AdminDashboard() {

    const navigate = useNavigate();

    const handleLogout = () => {

        localStorage.clear();

        navigate("/login");
    };

    return (
        <>
            <AdminNavbar/>

            {/* Main Content */}

            <div
                className="container-fluid text-center text-light"
                style={{
                    minHeight: "100vh",
                    backgroundColor: "#0F172A",
                    paddingTop: "120px",
                }}
            >

                <h1
                    className="display-3 fw-bold"
                >
                    Welcome Admin
                </h1>

                <p
                    className="lead mt-4"
                >
                    Manage Movies, Reviews and Platform Content
                </p>

                <button
                    className="btn btn-warning btn-lg mt-3 px-5"
                    onClick={() =>
                        navigate("/admin/view-movies")
                    }
                >
                    Manage Movies
                </button>

                <div
                    className="mt-5"
                >

                    <h2>
                        MovieHub Administration Portal
                    </h2>

                    <p
                        className="mt-3 mx-auto"
                        style={{
                            maxWidth: "750px",
                            fontSize: "18px",
                        }}
                    >
                        Add new movies, update movie details,
                        remove outdated content and manage
                        the complete movie catalog from one place.
                    </p>

                </div>

                {/* Feature Cards */}

                <div
                    className="row justify-content-center mt-5"
                >

                    <div className="col-md-3 mb-4">
                        <div
                            className="card p-4 h-100 shadow"
                        >
                            <h3>➕ Add Movie</h3>

                            <p className="mt-2">
                                Add new movies to the platform.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-3 mb-4">
                        <div
                            className="card p-4 h-100 shadow"
                        >
                            <h3>🎬 View Movies</h3>

                            <p className="mt-2">
                                Browse all available movies.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-3 mb-4">
                        <div
                            className="card p-4 h-100 shadow"
                        >
                            <h3>✏️ Update Movies</h3>

                            <p className="mt-2">
                                Edit movie details quickly.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default AdminDashboard;