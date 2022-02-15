import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Breadcrumb() {
    const location = useLocation();

    return (
        <ul className="breadcrumb flex">
            <li>
                <Link to="/">Home</Link>
            </li>
            <i className="fa fa-chevron-right" />
            <li>
                <Link to="#" className={`${location.pathname.toLowerCase().startsWith("/recipedetails/") ? "activeLink" : ""}`}>
                    Recipe Details
                </Link>
            </li>
        </ul>
    );
}

export default Breadcrumb;
