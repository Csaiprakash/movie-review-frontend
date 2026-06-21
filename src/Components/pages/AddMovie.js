import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../service/api";
import AdminNavbar from "../AdminNavbar.js"

function AddMovie() {

    const navigate = useNavigate();

    const [movie, setMovie] = useState({
        title: "",
        description: "",
        genre: "",
        director: "",
        releaseDate: "",
        posterUrl: ""
    });

    const [successMessage, setSuccessMessage] =
        useState("");

    const [errorMessage, setErrorMessage] =
        useState("");

    const handleChange = (e) => {

        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        setSuccessMessage("");
        setErrorMessage("");

        try {

            const response =
                await api.post(
                    "/api/admin/createMovie",
                    movie
                );

            console.log(response.data);

            setSuccessMessage(
                "Movie Added Successfully"
            );

            setMovie({
                title: "",
                description: "",
                genre: "",
                director: "",
                releaseDate: "",
                posterUrl: ""
            });

        } catch (error) {

            console.error(error);

            setErrorMessage(
                error.response?.data?.message ||
                "Failed to Add Movie"
            );
        }
    };

    return (
    <>
        <AdminNavbar/>

        <div
            style={{
                minHeight: "100vh",
                backgroundColor: "#0F172A",
                paddingTop: "50px"
            }}
        >

            <div className="container">

                <div
                    className="card shadow p-4 mx-auto"
                    style={{
                        maxWidth: "800px",
                        borderRadius: "15px"
                    }}
                >

                    <h2
                        className="text-center mb-4"
                    >
                        Add New Movie
                    </h2>

                    {successMessage && (

                        <div
                            className="alert alert-success"
                        >
                            {successMessage}
                        </div>

                    )}

                    {errorMessage && (

                        <div
                            className="alert alert-danger"
                        >
                            {errorMessage}
                        </div>

                    )}

                    <form
                        onSubmit={handleSubmit}
                    >

                        <div className="mb-3">

                            <label
                                className="form-label"
                            >
                                Movie Title
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                name="title"
                                value={movie.title}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="mb-3">

                            <label
                                className="form-label"
                            >
                                Description
                            </label>

                            <textarea
                                rows="4"
                                className="form-control"
                                name="description"
                                value={movie.description}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="row">

                            <div className="col-md-6">

                                <div className="mb-3">

                                    <label
                                        className="form-label"
                                    >
                                        Genre
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="genre"
                                        value={movie.genre}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                            </div>

                            <div className="col-md-6">

                                <div className="mb-3">

                                    <label
                                        className="form-label"
                                    >
                                        Director
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="director"
                                        value={movie.director}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                            </div>

                        </div>

                        <div className="row">

                            <div className="col-md-6">

                                <div className="mb-3">

                                    <label
                                        className="form-label"
                                    >
                                        Release Date
                                    </label>

                                    <input
                                        type="date"
                                        className="form-control"
                                        name="releaseDate"
                                        value={movie.releaseDate}
                                        onChange={handleChange}
                                    />

                                </div>

                            </div>

                            <div className="col-md-6">

                                <div className="mb-3">

                                    <label
                                        className="form-label"
                                    >
                                        Poster URL
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="posterUrl"
                                        value={movie.posterUrl}
                                        onChange={handleChange}
                                    />

                                </div>

                            </div>

                        </div>

                        {movie.posterUrl && (

                            <div
                                className="text-center mb-4"
                            >

                                <img
                                    src={movie.posterUrl}
                                    alt="Poster Preview"
                                    className="img-fluid rounded"
                                    style={{
                                        maxHeight: "300px"
                                    }}
                                />

                            </div>

                        )}

                        <div
                            className="d-flex justify-content-between"
                        >

                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() =>
                                    navigate("/admin/dashboard")
                                }
                            >
                                Back
                            </button>

                            <button
                                type="submit"
                                className="btn btn-warning"
                            >
                                Add Movie
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>
        </>
    );
}

export default AddMovie;