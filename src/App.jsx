import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgotPassword from "./components/forgotPassword.jsx";
import VerificationCode from "./components/VerificationCode";
import ResetPassword from "./components/Resetpassword";
import Success from "./components/Success.jsx";
import Creatingprofile from "./components/Creatingprofile.jsx";
import IdentificationVerification from "./components/IdentificationVerification.jsx";
import Home from "./components/home.jsx";
import News from "./components/News.jsx";
import Newsall from "./components/Newsall.jsx"; // ✅ Add this line
import NewsDetail from "./components/NewsDetail.jsx"; // ✅ Add NewsDetail route
import { AuthProvider } from "./auth/authContext.jsx";

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/newsall" element={<Newsall />} />
                    <Route path="/newsdetail/:id" element={<NewsDetail />} /> {/* Add route for NewsDetail with dynamic ID */}
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/verification" element={<VerificationCode />} />
                    <Route path="/resetpassword" element={<ResetPassword />} />
                    <Route path="/success" element={<Success />} />
                    <Route path="/creatingprofile" element={<Creatingprofile />} />
                    <Route path="/identification-verification" element={<IdentificationVerification />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
