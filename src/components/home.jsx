import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/brgy360logo.png";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="user-dashboard-home-2">
            {/* Sidebar */}
            <div className="green-rect"></div>

            <div className="app-icon">
                <img className="brgy-360-4" src={logo} alt="BRGY360 Logo" />
            </div>

            <div className="profile-btn">
                <img src="/icons/user.svg" className="phosphor-icons-user-circle" alt="Profile" />
            </div>

            <div className="file-req-icon">
                <div className="frame-4">
                    <img src="/icons/file-text.svg" className="feather-icons-file-text" alt="File Request" />
                </div>
            </div>

            {/* ✅ News icon (Sidebar) linked */}
            <div className="news-icon" onClick={() => navigate("/news")} style={{ cursor: "pointer" }}>
                <img src="/icons/news.svg" className="phosphor-icons-newspaper" alt="News" />
            </div>

            <div className="transp-icon">
                <img src="/icons/chart.svg" className="phosphor-icons-chart-line" alt="Transparency" />
            </div>

            <div className="chatbot-icon">
                <img src="/icons/chatbot.svg" className="frame-5" alt="Chatbot" />
            </div>

            <div className="log-out-btn">
                <img src="/icons/logout.svg" className="feather-icons-log-out" alt="Logout" />
            </div>

            <img className="divide-1" src="/icons/divide-1.svg" alt="" />
            <img className="divide-2" src="/icons/divide-2.svg" alt="" />

            {/* Top Navigation */}
            <div className="background"></div>
            <div className="hover-choices"></div>

            <div className="shortcuts">
                <div className="home-btn">
                    <img src="/icons/home.svg" className="feather-icons-home" alt="Home" />
                    <div className="home">Home</div>
                </div>
                <div className="my-profile-btn">
                    <img src="/icons/user.svg" className="phosphor-icons-user-circle2" alt="Profile" />
                    <div className="my-profile">My Profile</div>
                </div>
                <div className="file-request-btn">
                    <img src="/icons/file-text.svg" className="feather-icons-file-text2" alt="File Request" />
                    <div className="file-request">File Request</div>
                </div>

                {/* ✅ News tab (Top nav) linked */}
                <div className="news-btn" onClick={() => navigate("/news")} style={{ cursor: "pointer" }}>
                    <img src="/icons/news.svg" className="phosphor-icons-newspaper2" alt="News" />
                    <div className="news-and-announcements">News and Announcements</div>
                </div>

                <div className="transparency-btn">
                    <img src="/icons/chart.svg" className="phosphor-icons-chart-line2" alt="Transparency" />
                    <div className="transparency-dashboard">Transparency Dashboard</div>
                </div>
            </div>

            {/* Welcome Section */}
            <div className="welcome-to-brgy-360">WELCOME TO BRGY360</div>
            <div className="about-us">
                <div className="your-one-stop-platform">
                    Your one-stop platform for hassle-free barangay services. Stay updated with news and announcements, request documents, and access transparency reports all in one place.
                </div>
            </div>

            {/* ✅ View More Button linked */}
            <div className="view-more" onClick={() => navigate("/news")} style={{ cursor: "pointer" }}>
                <div className="view-more2">View More</div>
            </div>
        </div>
    );
};

export default Home;
