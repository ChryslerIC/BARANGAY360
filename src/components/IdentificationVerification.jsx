import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/authContext";
import logo from "../assets/brgy360logo.png";

const IdentificationVerification = () => {
    const navigate = useNavigate();
    const { user } = useAuth();

    const [idType, setIdType] = useState("national-id");
    const [frontImage, setFrontImage] = useState(null);
    const [backImage, setBackImage] = useState(null);
    const [frontPreview, setFrontPreview] = useState(null);
    const [backPreview, setBackPreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showProceed, setShowProceed] = useState(false);

    const handleFileChange = (e, side) => {
        const file = e.target.files[0];
        if (!file) return;

        const preview = URL.createObjectURL(file);
        if (side === "front") {
            setFrontImage(file);
            setFrontPreview(preview);
        } else {
            setBackImage(file);
            setBackPreview(preview);
        }
    };

    const handleUpload = async () => {
        if (!frontImage || !backImage) {
            setShowError(true);
            return;
        }

        setLoading(true);

        // ✅ Skip Firebase/Cloudinary for now
        setTimeout(() => {
            setLoading(false);
            setShowSuccess(true);

            setTimeout(() => {
                setShowSuccess(false);
                setShowProceed(true);

                setTimeout(() => {
                    navigate("/"); // Redirect to login
                }, 1000);
            }, 500);
        }, 1000);
    };

    return (
        <div className="verification-container">
            <div className="diagonal-bg"></div>

            <div className="verification-card">
                <img src={logo} alt="BRGY360 Logo" className="verification-logo" />
                <h1 className="verification-title">BRGY360</h1>
                <p className="verification-subtitle">Identification Verification</p>

                <div className="form-group">
                    <label className="form-label">Choose Valid ID</label>
                    <select
                        className="form-select"
                        value={idType}
                        onChange={(e) => setIdType(e.target.value)}
                    >
                        <option value="national-id">National ID</option>
                        <option value="drivers-license">Driver's License</option>
                        <option value="passport">Passport</option>
                        <option value="school-id">School ID</option>
                        <option value="voters-id">Voter's ID</option>
                    </select>
                </div>

                <div className="upload-row">
                    <div className="upload-box">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleFileChange(e, "front")}
                            id="front-upload"
                            style={{ display: "none" }}
                        />
                        <img
                            src={
                                frontPreview ||
                                "https://icons.veryicon.com/png/o/miscellaneous/linear-icon-27/plus-circle-12.png"
                            }
                            alt="Front of ID"
                            onClick={() => document.getElementById("front-upload").click()}
                            className="upload-preview"
                        />
                        <p className="upload-label">Front of ID</p>
                    </div>

                    <div className="upload-box">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleFileChange(e, "back")}
                            id="back-upload"
                            style={{ display: "none" }}
                        />
                        <img
                            src={
                                backPreview ||
                                "https://icons.veryicon.com/png/o/miscellaneous/linear-icon-27/plus-circle-12.png"
                            }
                            alt="Back of ID"
                            onClick={() => document.getElementById("back-upload").click()}
                            className="upload-preview"
                        />
                        <p className="upload-label">Back of ID</p>
                    </div>
                </div>

                <div className="button-row">
                    <button className="btn-light" onClick={() => navigate("/Creatingprofile")}>
                        Back
                    </button>
                    <button className="btn-primary" onClick={handleUpload}>
                        {loading ? "Uploading..." : "Next"}
                    </button>
                </div>
            </div>

            {/* ❌ Error Modal */}
            {showError && (
                <div className="error-modal-overlay">
                    <div className="error-modal">
                        <div className="error-header"></div>
                        <div className="error-body">
                            <div className="error-icon">☹️</div>
                            <div className="error-message">Upload Required</div>
                            <div className="error-subtext">
                                Please upload both front and back of your ID.
                            </div>
                            <button className="error-close-btn" onClick={() => setShowError(false)}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* ✅ Step 1: Account Created */}
            {showSuccess && (
                <div className="success-modal-overlay">
                    <div className="success-modal">
                        <div className="success-header"></div>
                        <div className="success-body">
                            <div className="success-icon">✅</div>
                            <div className="success-message">Account Created</div>
                            <div className="success-subtext">
                                You have successfully created your account.
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* ✅ Step 2: Proceed to Log In */}
            {showProceed && (
                <div className="success-modal-overlay">
                    <div className="success-modal">
                        <div className="success-header"></div>
                        <div className="success-body">
                            <div className="success-icon">✅</div>
                            <div className="success-message">Proceed to Log In</div>
                            <div className="success-subtext">
                                Redirecting to login...
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default IdentificationVerification;
