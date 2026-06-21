import { useState } from "react";
import api from "../service/api";
import AdminNavbar from "../AdminNavbar";


function UpdateMovie() {

    const [movieId, setMovieId] =
        useState("");

    const [movie, setMovie] =
        useState(null);

    const [error, setError] =
        useState("");

    const [success, setSuccess] =
        useState("");

    const searchMovie = async () => {

        setError("");
        setSuccess("");

        try {

            const response =
                await api.get(
                    `/api/public/movie/${movieId}`
                );

            setMovie(response.data);

        } catch (error) {

            setMovie(null);

            if (
                error.response?.status === 404
            ) {

                setError(
                    "Movie Not Found"
                );

            } else {

                setError(
                    "Failed To Fetch Movie"
                );
            }
        }
    };

    const updateMovie = async (
        e
    ) => {

        e.preventDefault();

        try {

            await api.put(
                `/api/admin/update/${movieId}`,movie
            );

            setSuccess(
                "Movie Updated Successfully"
            );

        } catch (error) {

            setError(
                "Update Failed"
            );
        }
    };

    return (
        <>
            <AdminNavbar />

            <div
                className="container mt-4"
            >

                <div
                    className="card p-4 shadow"
                >

                    <h2>
                        Update Movie
                    </h2>

                    <div
                        className="input-group mb-3"
                    >

                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Movie ID"
                            value={movieId}
                            onChange={(e) =>
                                setMovieId(
                                    e.target.value
                                )
                            }
                        />

                        <button
                            className="btn btn-warning"
                            onClick={
                                searchMovie
                            }
                        >
                            Search
                        </button>

                    </div>

                    {error && (

                        <div
                            className="alert alert-danger"
                        >
                            {error}
                        </div>

                    )}

                    {success && (

                        <div
                            className="alert alert-success"
                        >
                            {success}
                        </div>

                    )}

                    {movie && (

                        <form
                            onSubmit={
                                updateMovie
                            }
                        >

                            <div
                                className="text-center mb-4"
                            >

                                <img
                                    src={
                                        movie.posterUrl
                                    }
                                    alt={
                                        movie.title
                                    }
                                    width="250"
                                    className="rounded"
                                />

                            </div>

                            <div className="mb-3">

                                <label>
                                    Movie ID
                                </label>

                                <input
                                    className="form-control"
                                    value={
                                        movie.movieId
                                    }
                                    disabled
                                />

                            </div>

                            <div className="mb-3">

                                <label>
                                    Title
                                </label>

                                <input
                                    className="form-control"
                                    value={
                                        movie.title
                                    }
                                    disabled
                                />

                            </div>

                            <div className="mb-3">

                                <label>
                                    Genre
                                </label>

                                <input
                                    className="form-control"
                                    value={
                                        movie.genre
                                    }
                                    disabled
                                />

                            </div>

                            <div className="mb-3">

                                <label>
                                    Release Date
                                </label>

                                <input
                                    className="form-control"
                                    value={
                                        movie.releaseDate
                                    }
                                    disabled
                                />

                            </div>

                            <div className="mb-3">

                                <label>
                                    Director
                                </label>

                                <input
                                    className="form-control"
                                    value={
                                        movie.director
                                    }
                                    onChange={(e) =>
                                        setMovie({
                                            ...movie,
                                            director:
                                            e.target
                                                .value
                                        })
                                    }
                                />

                            </div>

                            <div className="mb-3">

                                <label>
                                    Description
                                </label>

                                <textarea
                                    rows="5"
                                    className="form-control"
                                    value={
                                        movie.description
                                    }
                                    onChange={(e) =>
                                        setMovie({
                                            ...movie,
                                            description:
                                            e.target
                                                .value
                                        })
                                    }
                                />

                            </div>

                            <button
                                type="submit"
                                className="btn btn-warning"
                            >
                                Update Movie
                            </button>

                        </form>

                    )}

                </div>

            </div>
        </>
    );
}

export default UpdateMovie;