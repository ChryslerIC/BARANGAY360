import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/brgy360logo.png";
import budgetIcon from "../assets/phosphor-icons-money0.svg";
import projectIcon from "../assets/phosphor-icons-folder-notch-open0.svg";
import accomplishmentIcon from "../assets/phosphor-icons-medal0.svg";
import '../assets/css/TransparencyDashboard.css';

const TransparencyDashboard = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isTransparencyActive = location.pathname === "/transparencydashboard";

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="TP_transparency-dashboard-container">
            {/* Sidebar */}
            <div className="TP_sidebar-background"></div>

            <div className="TP_app-logo">
                <img className="TP_brgy-logo" src={logo} alt="BRGY360 Logo" />
            </div>

            <div className="TP_profile-btn-container">
                <img src="/icons/user.svg" className="TP_user-icon" alt="Profile" />
            </div>

            <div className="TP_file-request-btn">
                <div className="TP_file-frame">
                    <img src="/icons/file-text.svg" className="TP_file-icon" alt="File Request" />
                </div>
            </div>

            {/* Navigation Icons */}
            <div className="TP_news-btn" onClick={() => handleNavigation("/news")} style={{ cursor: "pointer" }}>
                <img src="/icons/news.svg" className="TP_news-icon" alt="News" />
            </div>

            <div className={`TP_dashboard-btn ${isTransparencyActive ? "active" : ""}`} onClick={() => handleNavigation("/transparencydashboard")} style={{ cursor: "pointer" }}>
                <img src="/icons/chart.svg" className="TP_dashboard-icon" alt="Dashboard" />
            </div>

            <div className="TP_chatbot-btn">
                <img src="/icons/chatbot.svg" className="TP_chatbot-icon" alt="Chatbot" />
            </div>

            <div className="TP_logout-btn">
                <img src="/icons/logout.svg" className="TP_logout-icon" alt="Logout" />
            </div>

            <img className="TP_divider-line-1" src="/icons/divide-1.svg" alt="" />
            <img className="TP_divider-line-2" src="/icons/divide-2.svg" alt="" />

            {/* Top Navigation */}
            <div className="TP_top-nav-background"></div>
            <div className="TP_nav-hover-background"></div>

            <div className="TP_top-nav-shortcuts">
                <div className="TP_transparency-btn-top" onClick={() => handleNavigation("/transparencydashboard")} style={{ cursor: "pointer" }}>
                    {/* ✅ Working back button */}
                    <div
                        className="TP_back-btn-custom"
                        title="Back to Home"
                        onClick={(e) => {
                            e.stopPropagation(); // prevent parent from firing
                            navigate("/home");
                        }}
                        style={{ cursor: "pointer" }}
                    >
                        ←
                    </div>
                    <img src="/icons/chart.svg" className="TP_chart-icon-top" alt="Transparency" />
                    <div className="TP_transparency-label">Transparency Dashboard</div>
                </div>

                <div className="TP_budget-btn-shortcut" onClick={() => handleNavigation("/budget")} style={{ cursor: "pointer" }}>
                    <img src={budgetIcon} className="TP_budget-icon-shortcut" alt="Budget Overview" />
                    <div className="TP_budget-label">Budget Overview</div>
                </div>
                <div className="TP_project-btn-shortcut" onClick={() => handleNavigation("/projects")} style={{ cursor: "pointer" }}>
                    <img src={projectIcon} className="TP_project-icon-shortcut" alt="Project Updates" />
                    <div className="TP_project-label">Project Updates</div>
                </div>
                <div className="TP_accomplishment-btn-shortcut" onClick={() => handleNavigation("/accomplishments")} style={{ cursor: "pointer" }}>
                    <img src={accomplishmentIcon} className="TP_accomplishment-icon-shortcut" alt="Accomplishments & Achievements" />
                    <div className="TP_accomplishment-label">Accomplishments & Achievements</div>
                </div>
            </div>

            {/* Welcome Section */}
            <div className="TP_welcome-heading">TRANSPARENCY DASHBOARD</div>
            <div className="TP_about-description">
                <div className="TP_platform-description">
                    Barangay Sta. Rita, one of Olongapo City's largest barangays, is committed to transparency, accountability, and community development. Through open governance, we provide residents with access to essential information on projects, budget allocations, and accomplishments. Stay informed and engaged as we work together for a safer and more progressive community.
                </div>
            </div>

            {/* View More Button */}
            <div className="TP_view-more-btn" onClick={() => handleNavigation("/budgetoverview")} style={{ cursor: "pointer" }}>
            <div className="TP_view-more-label">View More</div>
        </div>

        </div>
    );
};

export default TransparencyDashboard;
