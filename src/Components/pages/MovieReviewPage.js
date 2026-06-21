import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../service/api";

function MovieReviewPage() {

    const { movieId } = useParams();

    const navigate = useNavigate();

    const username =
        localStorage.getItem("username");

    const [reviewId, setReviewId] =
        useState(null);
    const [movie, setMovie] = useState(null);

    const [comment, setComment] =
        useState("");

    const [message, setMessage] =
        useState("");

    useEffect(() => {
    loadMovie();
    loadReview();
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

    const loadMovie = async () => {

        try {

            const response =
                await api.get(
                    `/api/public/movie/${movieId}`
                );

            setMovie(response.data);

        } catch (error) {

            console.error(error);
        }
    };

    const loadReview = async () => {

        try {

            const response =
                await api.get(
                    `/api/review/movie/${movieId}/user/${username}`
                );

            setReviewId(
                response.data.id
            );

            setComment(
                response.data.comment
            );

        } catch (error) {

            console.log(
                "No Review Found"
            );

        }
    };

    const addReview = async () => {

        try {

            const response =
                await api.post(
                    `/api/review/add?movieId=${movieId}&review=${encodeURIComponent(comment)}`
                );

            setReviewId(
                response.data.id
            );

            setMessage(
                "Review Added Successfully"
            );

        } catch (error) {

            console.error(error);

        }
    };

    const updateReview = async () => {

        try {

            const response =
                await api.put(
                    `/api/review/${reviewId}?reviewText=${encodeURIComponent(comment)}`
                );

            setComment(
                response.data.comment
            );

            setMessage(
                "Review Updated Successfully"
            );

        } catch (error) {

            console.error(error);

        }
    };

    const deleteReview = async () => {

        try {

            await api.delete(
                `/api/review/${reviewId}?reviewText=${encodeURIComponent(comment)}`
            );

            setReviewId(null);

            setComment("");

            setMessage(
                "Review Deleted Successfully"
            );

        } catch (error) {

            console.error(error);

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
                className="navbar navbar-dark"
                style={{
                    backgroundColor: "#0B1220",
                }}
            >
                <div className="container">

                    <span
                        className="navbar-brand"
                    >
                        🎬 MovieHub
                    </span>

                    <button
                        className="btn btn-warning"
                        onClick={() =>
                            navigate("/dashboard")
                        }
                    >
                        Back
                    </button>

                </div>
            </nav>

            {movie && (

                <div
                    className="card shadow mb-4 p-4"
                    style={{
                        borderRadius: "15px"
                    }}
                >

                    <div className="row">

                        <div className="col-md-4 text-center">

                            <img
                                src={movie.posterUrl}
                                alt={movie.title}
                                className="img-fluid rounded"
                                style={{
                                    maxHeight: "450px",
                                    objectFit: "cover"
                                }}
                            />

                            <h3 className="mt-3">
                                {movie.title}
                            </h3>

                        </div>

                        <div className="col-md-8">

                            <h2>
                                Movie Details
                            </h2>

                            <hr />

                            <p>
                                <strong>Director:</strong>
                                {" "}
                                {movie.director}
                            </p>

                            <p>
                                <strong>Genre:</strong>
                                {" "}
                                {movie.genre}
                            </p>

                            <p>
                                <strong>Release Date:</strong>
                                {" "}
                                {movie.releaseDate}
                            </p>

                            <p>
                                <strong>Description:</strong>
                                {" "}
                                {movie.description}
                            </p>

                        </div>

                    </div>

                </div>

            )}

            {/* Review Card */}

            <div
                className="container mt-5"
            >

                <div
                    className="card shadow p-4"
                >

                    <h2>
                        Movie Review
                    </h2>

                    <p
                        className="text-muted"
                    >
                        Share your thoughts
                        about this movie
                    </p>

                    {message && (

                        <div
                            className="alert alert-success"
                        >
                            {message}
                        </div>

                    )}

                    <div
                        className="mb-3"
                    >

                        <label
                            className="form-label"
                        >
                            Review
                        </label>

                        <textarea
                            rows="6"
                            className="form-control"
                            placeholder="Write your review..."
                            value={comment}
                            onChange={(e) =>
                                setComment(
                                    e.target.value
                                )
                            }
                        />

                    </div>

                    {!reviewId ? (

                        <button
                            className="btn btn-success"
                            onClick={addReview}
                        >
                            Add Review
                        </button>

                    ) : (

                        <div>

                            <button
                                className="btn btn-warning me-2"
                                onClick={updateReview}
                            >
                                Update Review
                            </button>

                            <button
                                className="btn btn-danger"
                                onClick={deleteReview}
                            >
                                Delete Review
                            </button>

                        </div>

                    )}

                </div>

            </div>

        </div>
    );
}

export default MovieReviewPage;
