import { Routes, Route } from "react-router";
import Header from "./components/widgets/Header";
import "./styles/main.css";
import HomePage from "./components/pages/HomePage";

function App() {
    return (
        <div className="min-h-svh bg-slate-800">
            <div className="max-w-6xl mx-auto max-xl:px-4">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
