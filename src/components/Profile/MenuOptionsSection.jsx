import React from "react";

const MenuOptionsSection = ({ openTab, setOpenTab }) => {
	return (
		<section className="d-grid justify-content-start align-items-start">
			<div className="position-relative">
				<ul
					id="menu-options"
					className="nav"
					style={{
						fontSize: 24,
						fontWeight: 500,
						gap: "5vw",
						marginTop: "5vw",
						paddingLeft: "5vw",
					}}>
					<li className="nav-item">
						<button
							onClick={() => setOpenTab("myRecipe")}
							className={`nav-link ${openTab === "myRecipe" ? "active" : ""}`}
							aria-current="page">
							My Recipe
						</button>
					</li>
					<li className="nav-item">
						<button
							onClick={() => setOpenTab("savedRecipe")}
							className={`nav-link ${openTab === "savedRecipe" ? "active" : ""}`}>
							Saved Recipe
						</button>
					</li>
					<li className="nav-item">
						<button
							onClick={() => setOpenTab("likedRecipe")}
							className={`nav-link ${openTab === "likedRecipe" ? "active" : ""}`}>
							Liked Recipe
						</button>
					</li>
				</ul>
				<span
					id="border-menu"
					style={{
						position: "absolute",
						backgroundColor: "rgba(0, 0, 0, 0.1)",
						height: 1,
						width: "100vw",
						left: 0,
					}}
				/>
			</div>

			{openTab === "myRecipe" && (
				<div
					id="recipe"
					className="d-flex flex-wrap column-gap-md-2 row-gap-3 row-gap-lg-0"
					style={{ marginTop: "4vw", paddingLeft: "5vw" }}>
					<div className="card-recipe" style={{ position: "relative" }}>
						<img src="../assets/images/profile/bomb-chicken.png" alt="" />
						<p className="col-2 position-absolute text-light">Bomb Chicken</p>
					</div>
					<div className="card-recipe" style={{ position: "relative" }}>
						<img src="../assets/images/profile/banana-pancake.png" alt="" />
						<p className="col-2 position-absolute text-light">Bananas Pancake</p>
					</div>
				</div>
			)}

			{openTab === "savedRecipe" && (
				<div
					id="recipe"
					className="d-flex flex-wrap column-gap-md-2 row-gap-3 row-gap-lg-0"
					style={{ marginTop: "4vw", paddingLeft: "5vw" }}>
					<div className="card-recipe" style={{ position: "relative" }}>
						<img src="../assets/images/profile/banana-pancake.png" alt="" />
						<p className="col-2 position-absolute text-light">Bananas Pancake</p>
					</div>
				</div>
			)}

			{openTab === "likedRecipe" && (
				<div
					id="recipe"
					className="d-flex flex-wrap column-gap-md-2 row-gap-3 row-gap-lg-0"
					style={{ marginTop: "4vw", paddingLeft: "5vw" }}>
					<div className="card-recipe" style={{ position: "relative" }}>
						<img src="../assets/images/profile/bomb-chicken.png" alt="" />
						<p className="col-2 position-absolute text-light">Bomb Chicken</p>
					</div>
				</div>
			)}
		</section>
	);
};

export default MenuOptionsSection;
