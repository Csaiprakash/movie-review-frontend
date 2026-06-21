import { Link } from "react-router-dom";

function Hero() {
    return (
        <section
            className="d-flex align-items-center"
            style={{
                minHeight: "80vh",
                background:
                    "linear-gradient(rgba(15,23,42,0.85), rgba(15,23,42,0.9)), url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba') center/cover",
            }}
        >
            <div className="container text-white">
                <div className="row">
                    <div className="col-lg-7">

                        <h1 className="display-3 fw-bold mb-4">
                            Discover Movies.
                            <br />
                            Read Reviews.
                            <br />
                            Share Opinions.
                        </h1>

                        <p className="lead mb-4">
                            Explore thousands of movies, read community reviews,
                            and share your own thoughts with movie lovers.
                        </p>

                        <Link
                            to="/register"
                            className="btn btn-warning btn-lg me-3"
                        >
                            Get Started
                        </Link>

                        <Link
                            to="/login"
                            className="btn btn-outline-light btn-lg"
                        >
                            Login
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;