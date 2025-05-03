import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import logo from "../assets/brgy360logo.png";

const NewsDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();  // Get the news ID from the URL

    // Placeholder for news data (you can replace this with dynamic data in the future)
    const newsData = {
        1: {
            title: "Community Clean-Up Drive!",
            date: "April 16, 2025",
            time: "7:00 AM",
            imageUrl: "/images/placeholder.jpg",  // Placeholder image (gray background)
            description:
                "Last Saturday, the spirit of unity and environmental responsibility shone brightly as residents of our barangay gathered for a community-wide clean-up drive. The event, organized by the Barangay Council, aimed to promote environmental awareness and encourage residents to take active roles in maintaining the cleanliness and beauty of our surroundings.\n\n" +
                "The day started early at 7:00 AM, with volunteers assembling at the Barangay Hall. Equipped with cleaning tools and wearing their brightest smiles, participants were eager to contribute to the cause. The clean-up covered key areas, including streets, public parks, drainage systems, and other communal spaces that required attention.\n\n" +
                "Residents worked hand in hand, collecting trash, sweeping pathways, and clearing out debris from clogged canals. The initiative not only made the environment cleaner but also strengthened the bond among neighbors. Children, youth, adults, and seniors all played their part, proving that collective action can bring about positive change."
        }
    };

    // Get the news item based on the ID
    const newsDetail = newsData[id];

    if (!newsDetail) {
        return <div>News not found!</div>;  // In case an invalid ID is accessed
    }

    return (
        <div className="newsdetail__container">
            {/* Sidebar */}
            <div className="newsdetail__sidebar">
                <div className="newsdetail__app-icon">
                    <img src={logo} className="newsdetail__logo" alt="BRGY360 Logo" />
                </div>

                <div className="newsdetail__profile-btn">
                    <img src="/icons/user.svg" alt="Profile" />
                </div>
                <div className="newsdetail__file-req-icon">
                    <img src="/icons/file-text.svg" alt="File Request" />
                </div>
                <div className="newsdetail__news-icon">
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

                {/* Divider between Chatbot and Logout */}
                <img className="newsdetail__divider-2" src="/icons/divide-2.svg" alt="" />
            </div>

            {/* Top Navigation */}
            <div className="newsdetail__background"></div>
            <div className="newsdetail__hover-highlight" style={{ left: 160 }}></div>
            <div className="newsdetail__shortcuts">
                <div className="newsdetail__news-btn">
                    <div
                        className="newsdetail__back-icon"
                        onClick={() => navigate("/news")}
                        title="Back to News"
                    >
                        ←
                    </div>
                    <div>News and Announcements</div>
                </div>
            </div>

            {/* Main Content */}
            <div className="newsdetail__content">
                <div className="newsdetail__main-news">
                    <h2 className="newsdetail__section-heading">{newsDetail.title}</h2>
                    <div className="newsdetail__main-img">
                        {/* Placeholder Image with gray background */}
                        <div style={{ width: "100%", height: "350px", backgroundColor: "#d9d9d9" }}></div>
                    </div>
                    <div className="newsdetail__article">
                        <p>{newsDetail.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetail;
