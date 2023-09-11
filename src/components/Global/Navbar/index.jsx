import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [isLogin, setIsLogin] = useState(false);

	return (
		<header id="all-header" style={{ width: "100%" }}>
			<nav
				className="navbar navbar-expand ms-lg-5 justify-content-between"
				tyle="padding-top: 3dvw">
				<div className="container-fluid ps-sm-5">
					<ul className="navbar-nav gap-sm-5 gap-2">
						<li className="nav-item">
							<Link to="/" className="nav-link fw-bold text-secondary">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/recipe/add"
								className="nav-link fw-bold text-secondary"
								href="./pages/addRecipePage.html">
								Add Recipe
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/myprofile"
								className="nav-link fw-bold text-secondary"
								href="./pages/profilePage.html">
								Profile
							</Link>
						</li>
					</ul>
				</div>

				{!isLogin && (
					<div id="btn-login" style={{ marginRight: "8dvw" }}>
						<Link to="/login" className="d-flex text-light">
							<img src="../../../assets/icons/icon-person.svg" alt="icon-person" />
							<p className="mt-3 ms-2">Login</p>
						</Link>
					</div>
				)}
			</nav>
		</header>
	);
};

export default Navbar;
