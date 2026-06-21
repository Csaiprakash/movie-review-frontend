import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./landing/Navbar";
import api from "./service/api";

function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setSuccessMessage("");
        setErrorMessage("");

        if (formData.password !== formData.confirmPassword) {
            setErrorMessage("Passwords do not match");
            return;
        }

        try {
            const response = await api.post("/auth/register", {
                username: formData.username,
                email: formData.email,
                password: formData.password,
            });

            console.log(response.data);

            setSuccessMessage(
                "Registration Successful! Redirecting to Login..."
            );

            setFormData({
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
            });

            setTimeout(() => {
                navigate("/login");
            }, 3000);

        } catch (error) {
            console.error(error);

            setErrorMessage(
                error.response?.data ||
                "Registration Failed"
            );
        }
    };

    return (
        <>
            <Navbar />

            <div
                className="container-fluid d-flex justify-content-center align-items-center"
                style={{
                    minHeight: "100vh",
                    backgroundColor: "#0F172A",
                }}
            >
                <div
                    className="card shadow p-4"
                    style={{
                        width: "450px",
                        borderRadius: "15px",
                    }}
                >
                    <h2 className="text-center mb-4">
                        Create Account
                    </h2>

                    {successMessage && (
                        <div
                            className="alert alert-success text-center"
                            role="alert"
                        >
                            <h6 className="mb-1">
                                ✅ Registration Successful
                            </h6>

                            <small>
                                Redirecting to Login Page...
                            </small>
                        </div>
                    )}

                    {errorMessage && (
                        <div
                            className="alert alert-danger text-center"
                            role="alert"
                        >
                            {errorMessage}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">
                                Username
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">
                                Email
                            </label>

                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">
                                Password
                            </label>

                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="form-label">
                                Confirm Password
                            </label>

                            <input
                                type="password"
                                className="form-control"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-warning w-100"
                        >
                            Register
                        </button>
                    </form>

                    <div className="text-center mt-3">
                        Already have an account?{" "}
                        <Link to="/login">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;