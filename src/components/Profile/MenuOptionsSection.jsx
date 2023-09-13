import React from "react";
import NoResult from "../Global/NoResult";
import { getFirstThreeWords } from "../../utils/getThreeWords";
import { Link } from "react-router-dom";

const MenuOptionsSection = ({ openTab, setOpenTab, dataRecipes }) => {
	const likedRecipe = 0;
	const savedRecipe = 0;

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
					className="d-flex flex-wrap column-gap-md-4 column-gap-lg-4 row-gap-3 row-gap-lg-4"
					style={{ marginTop: "4vw", paddingLeft: "5vw", paddingRight: "5vw" }}>
					{!!dataRecipes.length ? (
						dataRecipes?.map((item, index) => (
							<div
								key={index}
								className="card-recipe"
								style={{ position: "relative" }}>
								<div
									id="wrapper-btn-recipe"
									style={{ right: "1vw", fontSize: 12, top: "1vw" }}
									className="position-absolute ">
									<div className="d-flex gap-1">
										<Link to={`/edit/myrecipe/${item?.recipe_id}`}>
											<button className="border-0 text-light bg-success px-3 py-0 rounded">
												Edit
											</button>
										</Link>
										<button className="border-0 bg-danger text-light px-2 py-0 rounded">
											Delete
										</button>
									</div>
								</div>

								<img src={item?.image} alt={item?.title} />
								<p className="col-2 position-absolute text-light">
									{getFirstThreeWords(item?.title)}
								</p>
							</div>
						))
					) : (
						<NoResult />
					)}
				</div>
			)}

			{openTab === "savedRecipe" && (
				<div
					id="recipe"
					className="d-flex flex-wrap column-gap-md-4 column-gap-lg-4 row-gap-3 row-gap-lg-4"
					style={{ marginTop: "4vw", paddingLeft: "5vw", paddingRight: "5vw" }}>
					{savedRecipe.length ? (
						savedRecipe?.map((item, index) => (
							<div
								key={index}
								className="card-recipe"
								style={{ position: "relative" }}>
								<img src={item?.image} alt={item?.title} />
								<p className="col-2 position-absolute text-light">
									{getFirstThreeWords(item?.title)}
								</p>
							</div>
						))
					) : (
						<NoResult />
					)}
				</div>
			)}

			{openTab === "likedRecipe" && (
				<div
					id="recipe"
					className="d-flex flex-wrap column-gap-md-4 column-gap-lg-4 row-gap-3 row-gap-lg-4"
					style={{ marginTop: "4vw", paddingLeft: "5vw", paddingRight: "5vw" }}>
					{likedRecipe.length ? (
						likedRecipe?.map((item, index) => (
							<div
								key={index}
								className="card-recipe"
								style={{ position: "relative" }}>
								<img src={item?.image} alt={item?.title} />
								<p className="col-2 position-absolute text-light">
									{getFirstThreeWords(item?.title)}
								</p>
							</div>
						))
					) : (
						<NoResult />
					)}
				</div>
			)}
		</section>
	);
};

export default MenuOptionsSection;
