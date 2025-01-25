import { Routes, Route } from "react-router";

import Header from "./components/widgets/Header";
import "./styles/main.css";
import HomePage from "./components/pages/HomePage";
import ReversePage from "./components/pages/ReversePage";
import { Toaster } from "react-hot-toast";
import Base64EncodePage from "./components/pages/Base64EncodePage";
import Base64DecodePage from "./components/pages/Base64DecodePage";

function App() {
    return (
        <div className="min-h-svh bg-slate-800">
            <div className="max-w-6xl mx-auto max-xl:px-4">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/reverse" element={<ReversePage />} />
                    <Route
                        path="/base64/encode"
                        element={<Base64EncodePage />}
                    />
                    <Route
                        path="/base64/decode"
                        element={<Base64DecodePage />}
                    />
                </Routes>
                <Toaster position="top-right" />
            </div>
        </div>
    );
}

export default App;
