import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../auth/authContext.jsx";
import logo from "../assets/brgy360logo.png";
import mailIcon from "../assets/mail-icon.png"; // ← Make sure to add your envelope icon here

const ForgotPassword = () => {
    const navigate = useNavigate();
    const { sendForgotPassword } = useAuth();

    const [email, setEmail] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleSendCode = async () => {
        if (!email) {
            setError("Please enter your email.");
            return;
        }

        try {
            await sendForgotPassword(email);
            setError("");
            setShowSuccess(true); // ✅ Show the modal
            setTimeout(() => {
                navigate("/");
            }, 2000);
        } catch (error) {
            console.error(error);
            setError("Failed to send reset email. Please try again.");
        }
    };

    return (
        <div className="forgot-page">
            <div className="forgot-background-shape"></div>

            <div className="forgot-card">
                <img src={logo} alt="Brgy360 Logo" className="forgot-logo" />

                <h1 className="forgot-heading">BRGY360</h1>
                <p className="forgot-subheading">Forgot Password</p>

                <form className="forgot-form" onSubmit={(e) => e.preventDefault()}>
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <button type="button" className="forgot-btn" onClick={handleSendCode}>
                        Send Code
                    </button>
                </form>

                {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
            </div>

            {/* ✅ Success Modal */}
            {showSuccess && (
                <div className="success-modal-overlay">
                    <div className="success-modal">
                        <div className="reset-header"></div>
                        <div className="success-body">
                            <img
                                src={mailIcon}
                                alt="Mail Sent"
                                className="success-mail-icon"
                            />
                            <div className="success-message">Reset Link Sent</div>
                            <div className="success-subtext">
                                A password reset link has been sent to your email.
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ForgotPassword;
