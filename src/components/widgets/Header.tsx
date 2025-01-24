import { FC } from "react";
import { Link, NavLink } from "react-router";

const Header: FC = () => {
    return (
        <header className="flex justify-between items-center py-4 text-white">
            <Link to="/" className="text-2xl font-bold">
                TransformiX
            </Link>

            <div className=" max-w-3xl rounded-2xl border-slate-500 border-1 p-3 flex gap-2 flex-wrap">
                <NavLink
                    to="/reverse"
                    className="bg-slate-700 px-2 py-1 rounded hover:bg-sky-400 text-sm"
                >
                    Reverse string
                </NavLink>
            </div>
        </header>
    );
};

export default Header;
