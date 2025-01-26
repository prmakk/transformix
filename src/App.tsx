import { Routes, Route } from "react-router";

import Header from "./components/widgets/Header";
import "./styles/main.css";
import HomePage from "./components/pages/HomePage";
import ReversePage from "./components/pages/ReversePage";
import { Toaster } from "react-hot-toast";
import Base64EncodePage from "./components/pages/Base64EncodePage";
import Base64DecodePage from "./components/pages/Base64DecodePage";
import ToUpperPage from "./components/pages/ToUpperPage";
import ToLowerPage from "./components/pages/ToLowerPage";
import BinaryEncodePage from "./components/pages/BinaryEncodePage";
import BinaryDecodePage from "./components/pages/BinaryDecodePage";
import GenerateQrPage from "./components/pages/GenerateQrPage";

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
                    <Route path="/upper" element={<ToUpperPage />} />
                    <Route path="/lower" element={<ToLowerPage />} />
                    <Route
                        path="/binary/encode"
                        element={<BinaryEncodePage />}
                    />
                    <Route
                        path="/binary/decode"
                        element={<BinaryDecodePage />}
                    />
                    <Route path="/qr" element={<GenerateQrPage />} />
                </Routes>
                <Toaster position="top-right" />
            </div>
        </div>
    );
}

export default App;
