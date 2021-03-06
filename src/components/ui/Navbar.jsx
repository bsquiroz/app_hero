import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
    const handleLogout = () => {
        alert("Estas cerrando la sesion");
    };

    const navIsActive = (data) => {
        return data ? "nav-item nav-link active" : "nav-item nav-link";
    };

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink
                        className={({ isActive }) => navIsActive(isActive)}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => navIsActive(isActive)}
                        to="/dc"
                    >
                        DC
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-iten nav-link text-info">Brayan</span>
                    <button
                        className="nav-item nav-link btn"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    );
};
