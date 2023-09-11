import React from "react";
import Navbar from "../../components/Global/Navbar";
import Footer from "../../components/Global/Footer";
import "./recipeDetails.css";
import { Link } from "react-router-dom";

const RecipeDetailsPage = () => {
	return (
		<div id="page-recipeDetails" style={{ width: "100dvw" }}>
			<Navbar />
			<main className="container">
				<section>
					<div
						style={{ marginTop: "3vw" }}
						className="d-flex flex-column justify-content-center align-items-center">
						<h1>Loream Sandwich</h1>
						<div id="wrapper-image-details" className="position-relative">
							<img
								id="img-details"
								src="../assets/images/loream-sandwich.png"
								alt="loream-sandwich"
							/>
							<div className="position-absolute" style={{ bottom: "6%", right: "2%" }}>
								<button className="btn btn-warning">
									<img src="../assets/icons/icon-bookmark.svg" alt="icon-bookmark" />
								</button>
								<button className="btn btn-light ms-sm-2">
									<img src="../assets/icons/icon-like.svg" alt="icon-like" />
								</button>
							</div>
						</div>
					</div>
					<div
						id="ingredients"
						className="text-capitalize"
						style={{ marginTop: "5vw", marginLeft: "10vw" }}>
						<h3 style={{ marginBottom: "1vw" }}>Ingredients</h3>
						<p>- 2 eggs</p>
						<p>- 2 tbsp mayonnaise</p>
						<p>- 3 slices bread</p>
						<p>- a little butter</p>
						<p>- ⅓ carton of cress</p>
						<p>
							- 2-3 slices of tomato or a lettuce leaf and a slice of ham or cheese
						</p>
						<p>- crisps, to serve</p>
					</div>
					<div
						id="videoStep"
						className="text-capitalize"
						style={{ marginTop: "3vw", marginLeft: "10vw" }}>
						<h3 style={{ marginBottom: "2vw" }}>Video Step</h3>
						<div className="d-grid gap-4">
							<button className="btn btn-warning position-relative">
								<Link to="/recipe/video/:id" className="stretched-link">
									<img src="../assets/icons/icon-play.svg" alt="icon-play" />
								</Link>
							</button>
							<button className="btn btn-warning position-relative">
								<Link to="/recipe/video/:id" className="stretched-link">
									<img src="../assets/icons/icon-play.svg" alt="icon-play" />
								</Link>
							</button>
							<button className="btn btn-warning position-relative">
								<Link to="/recipe/video/:id" className="stretched-link">
									<img src="../assets/icons/icon-play.svg" alt="icon-play" />
								</Link>
							</button>
							<button className="btn btn-warning position-relative">
								<Link to="/recipe/video/:id" className="stretched-link">
									<img src="../assets/icons/icon-play.svg" alt="icon-play" />
								</Link>
							</button>
						</div>
					</div>
				</section>
				<section id="comment" style={{ marginTop: "7vw", marginLeft: "10vw" }}>
					<div className="">
						<textarea
							className="rounded-2 p-sm-3 ps-2 fs-6"
							placeholder="Comment: "
							defaultValue={""}
						/>
						<button
							id="btn-send"
							style={{ width: "21vw", marginLeft: "22vw", marginTop: "1vw" }}
							className="btn btn-warning text-light">
							Send
						</button>
					</div>
					<div id="userComment" style={{ marginTop: "4vw" }}>
						<h3>Comment</h3>
						<div className="d-flex" style={{ marginTop: "2.5vw" }}>
							<img src="../assets/images/avatar-ayudia.png" alt="avatar-ayudia" />
							<div className="text-capitalize" style={{ marginLeft: "2vw" }}>
								<p>Ayudia</p>
								<p className="fw-light">Nice recipe. simple and delicious, thankyou</p>
							</div>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
};

export default RecipeDetailsPage;
