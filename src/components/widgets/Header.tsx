import { FC } from "react";
import { Link, NavLink } from "react-router";

const Header: FC = () => {
    const urls = [
        {
            link: "/reverse",
            title: "Reverse string",
        },
        {
            link: "/base64/encode",
            title: "Base64 Encode",
        },
        {
            link: "/base64/decode",
            title: "Base64 Decode",
        },
        {
            link: "/upper",
            title: "To Upper Case",
        },
        {
            link: "/lower",
            title: "To Lower Case",
        },
        {
            link: "/binary/encode",
            title: "Binary Encode",
        },
        {
            link: "/binary/decode",
            title: "Binary Decode",
        },
        {
            link: "/qr",
            title: "Generate QR",
        },
        {
            link: "/caesar/encode",
            title: "Caesar Encode",
        },
    ];
    return (
        <header className="flex justify-between items-center py-4 text-white max-md:flex-col gap-2">
            <Link to="/" className="text-2xl font-bold hover:text-sky-400">
                TransformiX
            </Link>

            <div className=" max-w-148 rounded border-slate-500 border-1 p-3 flex gap-2 flex-wrap max-md:justify-center">
                {urls.map((url) => (
                    <NavLink
                        key={url.link}
                        to={url.link}
                        className={({ isActive }) =>
                            `px-2 py-1 rounded hover:bg-sky-400 text-sm ${
                                isActive ? "bg-sky-400" : "bg-slate-700"
                            }`
                        }
                    >
                        {url.title}
                    </NavLink>
                ))}
            </div>
        </header>
    );
};

export default Header;
