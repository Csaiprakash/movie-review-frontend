import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./landing/Navbar";
import api from "./service/api";

function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: "",
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

        try {

            const response = await api.post(
                "/auth/login?username=" +
                formData.username +
                "&password=" +
                formData.password
            );

            console.log("Login Response:", response.data);
            console.log("Login Response:", response.data.token);
            console.log("Login Response:", response.data.role);
            console.log("Login Response:", response.data.username);

            const token = response.data.token;
            const role = response.data.role;
            const username = response.data.username;

            localStorage.setItem("jwttoken", token);
            localStorage.setItem("role", role);
            localStorage.setItem("username", username);

            setSuccessMessage(
                "Login Successful! Redirecting..."
            );

            setTimeout(() => {

                if (role === "ROLE_ADMIN") {
                    navigate("/admin/dashboard");
                } else {
                    navigate("/dashboard");
                }

            }, 2000);

        } catch (error) {

            console.error(error);

            setErrorMessage(
                error.response?.data ||
                "Invalid Username or Password"
            );
        }
    };

    return (
        <>
            <Navbar />

            <div
                className="container-fluid d-flex justify-content-center align-items-center"
                style={{
                    minHeight: "calc(100vh - 70px)",
                    backgroundColor: "#0F172A",
                    paddingTop: "20px",
                }}
            >
                <div
                    className="card shadow p-4"
                    style={{
                        width: "420px",
                        borderRadius: "15px",
                    }}
                >
                    <h2 className="text-center mb-4">
                        Login
                    </h2>

                    {successMessage && (
                        <div
                            className="alert alert-success text-center"
                            role="alert"
                        >
                            <h6 className="mb-1">
                                ✅ Login Successful
                            </h6>

                            <small>
                                Redirecting...
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
                                placeholder="Enter username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="form-label">
                                Password
                            </label>

                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                placeholder="Enter password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-warning w-100"
                        >
                            Login
                        </button>
                    </form>

                    <div className="text-center mt-3">
                        Don't have an account?{" "}
                        <Link to="/register">
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;