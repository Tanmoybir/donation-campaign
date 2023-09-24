import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-between items-center shadow-lg">
                <div className="">
                    <h1>Donation</h1>
                </div>
                <ul className="flex gap-5">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-400 underline" : ""
                            }
                        >
                           Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-400 underline" : ""
                            }
                        >
                           Donation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-400 underline" : ""
                            }
                        >
                           Statistics
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;