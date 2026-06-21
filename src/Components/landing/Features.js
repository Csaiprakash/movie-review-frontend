function Features() {
    return (
        <section className="py-5 bg-dark text-white">
            <div className="container">

                <h2 className="text-center mb-5">
                    Why Choose MovieHub?
                </h2>

                <div className="row text-center">

                    <div className="col-md-4 mb-4">
                        <div className="card bg-secondary h-100">
                            <div className="card-body">
                                <h3>🎬</h3>
                                <h4>Browse Movies</h4>
                                <p>
                                    Explore movies by title,
                                    genre and director.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card bg-secondary h-100">
                            <div className="card-body">
                                <h3>📝</h3>
                                <h4>Write Reviews</h4>
                                <p>
                                    Share your thoughts and
                                    experiences with others.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card bg-secondary h-100">
                            <div className="card-body">
                                <h3>🌍</h3>
                                <h4>Community</h4>
                                <p>
                                    Read reviews from movie
                                    enthusiasts around the world.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Features;