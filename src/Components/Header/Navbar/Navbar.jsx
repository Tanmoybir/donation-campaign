import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-between items-center shadow-lg px-3 py-6">
                <div className="">
                    <img src="https://i.ibb.co/qF6cWMx/Logo.png" alt="" />
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