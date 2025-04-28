import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/authContext.jsx";
import logo from "../assets/brgy360logo.png";

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [remember, setRemember] = useState(false);
    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setShowError(true);
            return;
        }

        try {
            await login(email, password);
            setShowSuccess(true);
            setTimeout(() => {
                requestAnimationFrame(() => {
                    navigate("/home");
                });
            }, 500);
        } catch (error) {
            setShowError(true);
        }
    };

    return (
        <div className="login-page">
            <div className="login-background-shape"></div>

            <div className="login-card">
                <img src={logo} alt="BRGY360 Logo" className="login-logo" />
                <h1 className="login-heading">BRGY360</h1>
                <p className="login-subheading">Login to your account</p>

                <form onSubmit={handleLogin} className="login-form">
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label>Password</label>
                    <div className="login-password-field">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span onClick={() => setShowPassword(!showPassword)}>👁</span>
                    </div>

                    <div className="login-options">
                        <label>
                            <input
                                type="checkbox"
                                checked={remember}
                                onChange={() => setRemember(!remember)}
                            />
                            Remember me
                        </label>
                        <Link to="/forgot-password">Forgot Password</Link>
                    </div>

                    <button type="submit" className="login-btn">Login now</button>
                </form>

                <p className="login-bottom">
                    Don’t Have An Account? <Link to="/signup">Sign Up</Link>
                </p>
            </div>

            {/* ❌ Error Modal */}
            {showError && (
                <div className="error-modal-overlay">
                    <div className="error-modal">
                        <div className="error-header"></div>
                        <div className="error-body">
                            <div className="error-icon">☹️</div>
                            <div className="error-message">Invalid email or password</div>
                            <div className="error-subtext">Please try again</div>
                            <button className="error-close-btn" onClick={() => setShowError(false)}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* ✅ Success Modal */}
            {showSuccess && (
                <div className="success-modal-overlay">
                    <div className="success-modal">
                        <div className="success-header"></div>
                        <div className="success-body">
                            <div className="success-icon">✅</div>
                            <div className="success-message">Login Successful</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;
