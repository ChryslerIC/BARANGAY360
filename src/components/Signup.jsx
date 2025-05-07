import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/authContext.jsx";
import logo from "../assets/brgy360logo.png";

const Signup = () => {
    const { signUp } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showWeakPopup, setShowWeakPopup] = useState(false);
    const [showEmailExistsPopup, setShowEmailExistsPopup] = useState(false);

    const handleSignup = async (e) => {
        e.preventDefault();
        if (!email || !password || !confirm) {
            setShowWeakPopup(true);
            return;
        }

        if (password !== confirm) {
            setShowWeakPopup(true);
            return;
        }

        try {
            await signUp(email, password);
            navigate("/creatingprofile");
        } catch (err) {
            if (err.code === "auth/weak-password") {
                setShowWeakPopup(true);
            } else if (err.code === "auth/email-already-in-use") {
                setShowEmailExistsPopup(true);
            } else {
                alert("Signup failed. Please try again.");
            }
        }
    };

    return (
        <div className="signup-page">
            <div className="signup-background-shape"></div>

            <div className="signup-card">
                <img src={logo} alt="BRGY360 Logo" className="signup-logo" />
                <h1 className="signup-heading">BRGY360</h1>
                <p className="signup-subheading">Create your account</p>

                <form className="signup-form" onSubmit={handleSignup}>
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label>Password</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <label>Confirm Password</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Confirm password"
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                    />

                    <div className="signup-options">
                        <label>
                            <input
                                type="checkbox"
                                checked={showPassword}
                                onChange={() => setShowPassword(!showPassword)}
                            />
                            Show Password
                        </label>
                    </div>

                    <button type="submit" className="signup-btn">Sign Up</button>
                </form>

                <p className="signup-bottom">
                    Already have an account? <Link to="/">Login</Link>
                </p>
            </div>

            {/* ❌ Weak Password Modal */}
            {showWeakPopup && (
                <div className="error-modal-overlay">
                    <div className="error-modal">
                        <div className="error-header"></div>
                        <div className="error-body">
                            <div className="error-icon">☹️</div>
                            <div className="error-message">Weak/Invalid Password</div>
                            <div className="error-subtext">
                                Your password must be at least 8 characters<br />
                                with a mix of letters and numbers.
                            </div>
                            <button className="error-close-btn" onClick={() => setShowWeakPopup(false)}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* ❌ Email Already Exists Modal */}
            {showEmailExistsPopup && (
                <div className="error-modal-overlay">
                    <div className="error-modal">
                        <div className="error-header"></div>
                        <div className="error-body">
                            <div className="error-icon">☹️</div>
                            <div className="error-message">Email Already in Use</div>
                            <div className="error-subtext">
                                The email you entered is already registered.<br />
                                Please use another email or log in.
                            </div>
                            <button className="error-close-btn" onClick={() => setShowEmailExistsPopup(false)}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Signup;
