import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/brgy360logo.png";

const NewsDetail = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isNewsActive = location.pathname === "/newsall" || location.pathname.startsWith("/newsdetail");

    return (
        <div className="newsdetail__container">
            {/* Sidebar */}
            <div className="newsdetail__sidebar"></div>

            <div className="newsdetail__app-icon">
                <img src={logo} className="newsdetail__logo" alt="BRGY360 Logo" />
            </div>

            <div className="newsdetail__profile-btn">
                <img src="/icons/user.svg" alt="Profile" />
            </div>
            <div className="newsdetail__file-req-icon">
                <img src="/icons/file-text.svg" alt="File Request" />
            </div>
            <div className={`newsdetail__news-icon ${isNewsActive ? "active" : ""}`}>
                <img src="/icons/news.svg" alt="News" />
            </div>
            <div className="newsdetail__transp-icon">
                <img src="/icons/chart.svg" alt="Transparency" />
            </div>
            <div className="newsdetail__chatbot-icon">
                <img src="/icons/chatbot.svg" alt="Chatbot" />
            </div>
            <div className="newsdetail__logout-btn">
                <img src="/icons/logout.svg" alt="Logout" />
            </div>

            <img className="newsdetail__divider-1" src="/icons/divide-1.svg" alt="" />
            <img className="newsdetail__divider-2" src="/icons/divide-2.svg" alt="" />

            {/* Top Navigation */}
            <div className="newsdetail__background"></div>
            <div className="newsdetail__hover-highlight" style={{ left: 160 }}></div>
            <div className="newsdetail__shortcuts">
                <div className="newsdetail__news-btn">
                    <div
                        className="newsdetail__back-icon"
                        onClick={() => navigate("/newsall")} // Navigate back to Newsall
                        title="Back to News"
                    >
                        ←
                    </div>
                    <img
                        src="/icons/news.svg"
                        alt="News"
                        className="newsdetail__news-icon-img"
                    />
                    <div>News and Announcements</div>
                </div>
            </div>

            {/* Main Content */}
            <div className="newsdetail__content">
                <div className="newsdetail__main-news">
                    <h2 className="newsdetail__section-heading">Community Clean-Up Drive!</h2>
                    <div className="newsdetail__date">April 16, 2025</div>
                    <div className="newsdetail__main-img"></div>
                    <div className="newsdetail__article">
                        <p>
                            Last Saturday, the spirit of unity and environmental responsibility shone brightly as residents of our barangay gathered for a community-wide clean-up drive...
                        </p>
                        <p>
                            The day started early at 7:00 AM, with volunteers assembling at the Barangay Hall...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetail;