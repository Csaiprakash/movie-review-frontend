import { useEffect, useState } from "react";
import api from "../service/api";
import AdminNavbar from "../AdminNavbar";

function ViewMovies() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {

        loadMovies();

    }, []);

    const loadMovies = async () => {

        try {

            const response =
                await api.get(
                    "/api/public/getMovies?page=0&size=50"
                );

            setMovies(
                response.data.content
            );

        } catch (error) {

            console.error(error);

        }
    };

    return (
        <>
            <AdminNavbar />

            <div
                className="container-fluid"
                style={{
                    minHeight: "100vh",
                    backgroundColor: "#0F172A",
                    paddingTop: "30px",
                }}
            >
                <div className="container">

                    <div className="card shadow p-4">

                        <h2 className="mb-4">
                            Movie Catalog
                        </h2>

                        <div className="table-responsive">

                            <table
                                className="table table-bordered table-hover align-middle"
                            >

                                <thead>

                                <tr>

                                    <th>Poster</th>

                                    <th>Title</th>

                                    <th>Director</th>

                                    <th>Genre</th>

                                    <th>Release Date</th>

                                    <th>Description</th>

                                </tr>

                                </thead>

                                <tbody>

                                {movies.map(
                                    (movie) => (

                                        <tr
                                            key={
                                                movie.movieId
                                            }
                                        >

                                            <td>

                                                <img
                                                    src={
                                                        movie.posterUrl
                                                    }
                                                    alt={
                                                        movie.title
                                                    }
                                                    width="100"
                                                    height="150"
                                                    style={{
                                                        objectFit:
                                                            "cover",
                                                        borderRadius:
                                                            "8px",
                                                    }}
                                                />

                                            </td>

                                            <td>
                                                {
                                                    movie.title
                                                }
                                            </td>

                                            <td>
                                                {
                                                    movie.director
                                                }
                                            </td>

                                            <td>
                                                {
                                                    movie.genre
                                                }
                                            </td>

                                            <td>
                                                {
                                                    movie.releaseDate
                                                }
                                            </td>

                                            <td
                                                style={{
                                                    maxWidth:
                                                        "350px",
                                                }}
                                            >
                                                {
                                                    movie.description
                                                }
                                            </td>

                                        </tr>

                                    )
                                )}

                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}

export default ViewMovies;