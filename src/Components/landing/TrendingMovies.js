function TrendingMovies() {
    const movies = [
        {
            title: "Kalki 2898AD",
            image:
                "https://m.media-amazon.com/images/M/MV5BMTM3ZGUwYTEtZTI5NS00ZmMyLTk2YmQtMWU4YjlhZTI3NjRjXkEyXkFqcGc@._V1_.jpg",
        },
        {
            title: "Inception",
            image:
                "https://m.media-amazon.com/images/I/81p+xe8cbnL.jpg",
        },
        {
            title: "The Dark Knight",
            image:
                "https://m.media-amazon.com/images/I/81AJdOIEIhL.jpg",
        },
    ];

    return (
        <section className="py-5 bg-light">
            <div className="container">

                <h2 className="text-center mb-5">
                    Trending Movies
                </h2>

                <div className="row">

                    {movies.map((movie, index) => (
                        <div
                            key={index}
                            className="col-md-4 mb-4"
                        >
                            <div className="card shadow">

                                <img
                                    src={movie.image}
                                    className="card-img-top"
                                    alt={movie.title}
                                    style={{
                                        height: "450px",
                                        objectFit: "cover",
                                    }}
                                />

                                <div className="card-body text-center">
                                    <h5>{movie.title}</h5>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default TrendingMovies;