import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/brgy360logo.png";

const News = () => {
    const navigate = useNavigate();

    const newsItems = Array(3).fill(null).map(() => ({
        title: "Placeholder Title",
        description: "This is a placeholder text for future announcements.",
        date: new Date().toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
        }),
        time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        }),
    }));

    return (
        <div className="news-dashboard-container">
            {/* Sidebar */}
            <div className="green-rect"></div>
            <div className="app-icon">
                <img className="brgy-360-4" src={logo} alt="BRGY360 Logo" />
            </div>

            <div className="profile-btn">
                <img src="/icons/user.svg" alt="Profile" />
            </div>
            <div className="file-req-icon">
                <img src="/icons/file-text.svg" alt="File Request" />
            </div>
            <div className="news-icon">
                <img src="/icons/news.svg" alt="News" />
            </div>
            <div className="transp-icon">
                <img src="/icons/chart.svg" alt="Transparency" />
            </div>
            <div className="chatbot-icon">
                <img src="/icons/chatbot.svg" alt="Chatbot" />
            </div>
            <div className="log-out-btn">
                <img src="/icons/logout.svg" alt="Logout" />
            </div>
            <img className="divide-1" src="/icons/divide-1.svg" alt="Divider" />
            <img className="divide-2" src="/icons/divide-2.svg" alt="Divider" />

            {/* Top Nav Bar */}
            <div className="background"></div>
            <div className="news-hover-choices" style={{ left: 160 }}></div>
            <div className="shortcuts">
                <div className="news-btn">
                    <div
                        className="back-icon"
                        onClick={() => navigate("/home")}
                        title="Back to Home"
                    >
                        ←
                    </div>
                    <img src="/icons/news.svg" alt="News" />

                    <div>News and Announcements</div>
                </div>
            </div>

            {/* Section Title */}
            <h1 className="news-section-title">News and Announcements</h1>

            {/* Cards */}
            <div className="news-cards-container">
                {newsItems.map((item, index) => (
                    <div className="news-card-box" key={index}>
                        <div
                            className="news-card-image"
                            style={{ backgroundColor: "#d9d9d9" }}
                        >
                            <div className="news-date">{item.date}</div>
                            <div className="news-time">{item.time}</div>
                        </div>
                        <div className="news-card-details">
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* ✅ View All button now redirects */}
            <button
                className="news-view-more-btn"
                onClick={() => navigate("/newsall")}
            >
                View All
            </button>
        </div>
    );
};

export default News;
