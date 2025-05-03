import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/brgy360logo.png";

const Newsall = () => {
    const navigate = useNavigate();

    const handleSeeMore = (id) => {
        navigate(`/newsdetail/${id}`);  // Navigate to the NewsDetail page with the news ID
    };

    return (
        <div className="newsall__container">
            {/* Sidebar */}
            <div className="newsall__sidebar"></div>

            <div className="newsall__app-icon">
                <img src={logo} className="newsall__logo" alt="BRGY360 Logo" />
            </div>

            <div className="newsall__profile-btn">
                <img src="/icons/user.svg" alt="Profile" />
            </div>
            <div className="newsall__file-req-icon">
                <img src="/icons/file-text.svg" alt="File Request" />
            </div>
            <div className="newsall__news-icon">
                <img src="/icons/news.svg" alt="News" />
            </div>
            <div className="newsall__transp-icon">
                <img src="/icons/chart.svg" alt="Transparency" />
            </div>
            <div className="newsall__chatbot-icon">
                <img src="/icons/chatbot.svg" alt="Chatbot" />
            </div>
            <div className="newsall__logout-btn">
                <img src="/icons/logout.svg" alt="Logout" />
            </div>

            <img className="newsall__divider-1" src="/icons/divide-1.svg" alt="" />
            <img className="newsall__divider-2" src="/icons/divide-2.svg" alt="" />

            {/* Top Navigation (replica of News.jsx) */}
            <div className="background"></div>
            <div className="newsall__hover-highlight" style={{ left: 160 }}></div>
            <div className="shortcuts">
                <div className="news-btn">
                    <div
                        className="back-icon"
                        onClick={() => navigate("/news")}
                        title="Back to News"
                    >
                        ←
                    </div>
                    <img src="/icons/news.svg" alt="News" />
                    <div>News and Announcements</div>
                </div>
            </div>

            {/* Main Content */}
            <div className="newsall__content">
                <div className="newsall__main-news">
                    <h2 className="newsall__section-heading">Latest News</h2>

                    <div className="newsall__main-img"></div>

                    <div className="newsall__article">
                        <p>
                            Last Saturday, the spirit of unity and environmental responsibility
                            shone brightly as residents of our barangay gathered for a
                            community-wide clean-up drive...
                        </p>
                        <p>
                            The day started early at 7:00 AM, with volunteers assembling at the
                            Barangay Hall...
                        </p>
                    </div>
                </div>

                {/* List of More News */}
                <div className="newsall__more-news">
                    <h3 className="newsall__more-title">MORE NEWS</h3>
                    <ul className="newsall__list">
                        <li>
                            <span>Disaster Preparedness Seminar</span>
                            <p>April 14, 2025</p>
                            <a
                                href="#"
                                className="newsall__see-more"
                                onClick={() => handleSeeMore(1)} // Pass the ID to navigate
                            >
                                See more &gt;
                            </a>
                        </li>
                        <li>
                            <span>Scholarship Application Open</span>
                            <p>April 12, 2025</p>
                            <a
                                href="#"
                                className="newsall__see-more"
                                onClick={() => handleSeeMore(2)} // Pass the ID to navigate
                            >
                                See more &gt;
                            </a>
                        </li>
                        <li>
                            <span>Community Health Checkup</span>
                            <p>April 9, 2025</p>
                            <a
                                href="#"
                                className="newsall__see-more"
                                onClick={() => handleSeeMore(3)} // Pass the ID to navigate
                            >
                                See more &gt;
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Newsall;
