import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../service/api";

function Dashboard() {

    const navigate = useNavigate();

    const username =
        localStorage.getItem("username") || "User";

    const [searchText, setSearchText] = useState("");
    const [movies, setMovies] = useState([]);

    const handleLogout = () => {

        localStorage.clear();

        navigate("/login");
    };

    const searchMovies = async (value) => {

        setSearchText(value);

        if (value.trim() === "") {

            setMovies([]);

            return;
        }

        try {

            const response = await api.get(
                `/api/public/search?title=${value}&page=0&size=5`
            );

            setMovies(response.data.content);

        } catch (error) {

            console.error(error);

            setMovies([]);
        }
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                backgroundColor: "#0F172A",
            }}
        >

            {/* Navbar */}
            <nav
                className="navbar navbar-expand-lg navbar-dark shadow"
                style={{
                    backgroundColor: "#0B1220",
                }}
            >
                <div className="container-fluid px-4">

                    {/* Logo */}
                    <span
                        className="navbar-brand fw-bold fs-3"
                        style={{
                            color: "#F59E0B",
                        }}
                    >
                        🎬 MovieHub
                    </span>

                    {/* Search */}
                    <div
                        style={{
                            width: "40%",
                            position: "relative",
                        }}
                    >

                        <input
                            className="form-control"
                            type="search"
                            placeholder="Search Movies..."
                            value={searchText}
                            onChange={(e) =>
                                searchMovies(
                                    e.target.value
                                )
                            }
                        />

                        {/* Search Dropdown */}
                        {movies.length > 0 && (

                            <div
                                className="card shadow position-absolute w-100 mt-1"
                                style={{
                                    zIndex: 1000,
                                }}
                            >

                                <ul
                                    className="list-group list-group-flush"
                                >

                                    {movies.map((movie) => (

                                        <li
                                            key={movie.movieId}
                                            className="list-group-item"
                                            style={{
                                                cursor: "pointer"
                                            }}
                                            onClick={() =>
                                                navigate(`/movie/${movie.movieId}`)
                                            }
                                        >
                                            <strong>
                                                {movie.title}
                                            </strong>

                                            <br />

                                            <small
                                                className="text-muted"
                                            >
                                                Director:
                                                {" "}
                                                {movie.director}
                                            </small>

                                        </li>

                                    ))}

                                </ul>

                            </div>

                        )}

                    </div>

                    {/* User Info */}
                    <div
                        className="d-flex align-items-center"
                    >

                        <span
                            className="text-white me-4"
                        >
                            Welcome, {username}
                        </span>

                        <button
                            className="btn btn-outline-warning"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>

                    </div>

                </div>
            </nav>

            {/* Hero Section */}

            <div
                className="container text-center text-white"
                style={{
                    marginTop: "120px",
                }}
            >

                <h1
                    className="display-3 fw-bold"
                >
                    Welcome to MovieHub
                </h1>

                <p
                    className="lead mt-4"
                >
                    Discover movies, read reviews,
                    and share your opinions with
                    movie enthusiasts around the
                    world.
                </p>

                <button
                    className="btn btn-warning btn-lg mt-4 px-5"
                >
                    Explore Movies
                </button>

            </div>

            {/* Features */}

            <div
                className="container mt-5"
            >

                <div
                    className="row text-center"
                >

                    <div
                        className="col-md-4 mb-4"
                    >

                        <div
                            className="card h-100 shadow"
                        >

                            <div
                                className="card-body"
                            >

                                <h1>
                                    🎬
                                </h1>

                                <h4>
                                    Browse Movies
                                </h4>

                                <p>
                                    Explore movies by
                                    title, genre and
                                    director.
                                </p>

                            </div>

                        </div>

                    </div>

                    <div
                        className="col-md-4 mb-4"
                    >

                        <div
                            className="card h-100 shadow"
                        >

                            <div
                                className="card-body"
                            >

                                <h1>
                                    📝
                                </h1>

                                <h4>
                                    Read Reviews
                                </h4>

                                <p>
                                    Discover what others
                                    think about your
                                    favorite movies.
                                </p>

                            </div>

                        </div>

                    </div>

                    <div
                        className="col-md-4 mb-4"
                    >

                        <div
                            className="card h-100 shadow"
                        >

                            <div
                                className="card-body"
                            >

                                <h1>
                                    🌟
                                </h1>

                                <h4>
                                    Share Opinions
                                </h4>

                                <p>
                                    Post reviews and
                                    engage with the
                                    community.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Dashboard;