import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/authContext.jsx";
import logo from "../assets/brgy360logo.png";

const Creatingprofile = () => {
    const navigate = useNavigate();
    const { user, saveUserProfile } = useAuth();

    const [formData, setFormData] = useState({
        name: "",
        age: "",
        sex: "",
        dateOfBirth: "",
        placeOfBirth: "",
        street: "",
        barangay: "",
    });

    const [profileImage, setProfileImage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "dateOfBirth") {
            const dob = new Date(value);
            const today = new Date();
            let age = today.getFullYear() - dob.getFullYear();
            const m = today.getMonth() - dob.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
                age--;
            }

            setFormData((prev) => ({
                ...prev,
                dateOfBirth: value,
                age: age.toString(),
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImage(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, age, sex, dateOfBirth, placeOfBirth, street, barangay } = formData;
        const dob = new Date(dateOfBirth);
        const today = new Date();

        if (!name || !age || !sex || !dateOfBirth || !placeOfBirth || !street || !barangay) {
            alert("Please fill in all required fields.");
            return;
        }

        if (dob > today) {
            alert("Date of birth cannot be in the future.");
            return;
        }

        try {
            await saveUserProfile(user.uid, {
                ...formData,
                profileImageUrl: profileImage,
            });
            navigate("/identification-verification");
        } catch (error) {
            console.error("Failed to save profile:", error);
        }
    };

    return (
        <div className="create-profile-wrapper">
            <div className="forgot-background-shape"></div>

            <div className="profile-card-layout">
                <div className="avatar-side">
                    <label htmlFor="profile-upload" className="avatar-upload-label">
                        <img
                            src={profileImage || "https://cdn-icons-png.flaticon.com/512/6522/6522516.png"}
                            alt="Avatar"
                            className="avatar-img"
                        />
                        <span className="edit-avatar">✏️</span>
                    </label>
                    <input
                        type="file"
                        id="profile-upload"
                        accept="image/*"
                        onChange={handleImageChange}
                        style={{ display: "none" }}
                    />
                </div>

                <div className="form-side">
                    <img src={logo} alt="BRGY360 Logo" className="logo-img" />
                    <h1 className="brgy-title">BRGY360</h1>
                    <p className="form-title">Create Profile</p>

                    <form onSubmit={handleSubmit} className="inline-form">
                        <div className="form-row">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-row form-row-three">
                            <input
                                type="date"
                                name="dateOfBirth"
                                value={formData.dateOfBirth}
                                onChange={handleChange}
                                required
                                className="dob-input"
                            />
                            <input
                                type="number"
                                name="age"
                                placeholder="<-Determine Age "
                                value={formData.age}
                                readOnly
                                className="age-input"
                            />
                            <select
                                name="sex"
                                value={formData.sex}
                                onChange={handleChange}
                                required
                                className="sex-select"
                            >
                                <option value="">Select Sex</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>

                        <div className="form-row">
                            <input
                                type="text"
                                name="street"
                                placeholder="Street No. and Name"
                                value={formData.street}
                                onChange={handleChange}
                                required
                            />
                            <select
                                name="barangay"
                                value={formData.barangay}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Barangay</option>
                                <option value="Asinan">Asinan</option>
                                <option value="Banicain">Banicain</option>
                                <option value="Barretto">Barretto</option>
                                <option value="East Bajac-bajac">East Bajac-bajac</option>
                                <option value="East Tapinac">East Tapinac</option>
                                <option value="Gordon Heights">Gordon Heights</option>
                                <option value="Kalaklan">Kalaklan</option>
                                <option value="Mabayuan">Mabayuan</option>
                                <option value="New Cabalan">New Cabalan</option>
                                <option value="New Kalalake">New Kalalake</option>
                                <option value="Old Cabalan">Old Cabalan</option>
                                <option value="Pag-asa">Pag-asa</option>
                                <option value="Santa Rita">Sta. Rita</option>
                                <option value="West Bajac-bajac">West Bajac-bajac</option>
                                <option value="West Tapinac">West Tapinac</option>
                                <option value="New Ilalim">New Ilalim</option>
                                <option value="New Kababae">New Kababae</option>
                            </select>
                        </div>

                        <div className="form-row">
                            <input
                                type="text"
                                name="placeOfBirth"
                                placeholder="Place of Birth"
                                value={formData.placeOfBirth}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="button-row">
                            <button type="submit" className="next-btn">
                                Next
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Creatingprofile;
