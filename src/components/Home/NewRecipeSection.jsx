import React from "react";

const NewRecipeSection = () => {
	return (
		<section
			className="position-relative pt-5 pt-md-0"
			style={{ marginTop: "10dvw" }}>
			<div
				className="d-none d-md-block"
				style={{
					backgroundColor: "#efc81a",
					width: "24vw",
					height: "40vw",
					position: "absolute",
					top: 0,
					left: 0,
					zIndex: -1,
					marginLeft: "-118px",
					marginTop: "12dvw",
				}}
			/>
			<h3
				style={{
					borderLeft: "1.2dvw solid",
					height: "7dvw",
					paddingLeft: "1.5dvw",
				}}
				className="fw-bold border-warning align-items-center d-flex">
				New Recipe
			</h3>
			<div className="d-md-flex" style={{ marginTop: "9dvw" }}>
				<div
					id="wrapper-img-new-recipe"
					className="col-12 col-md-6 mt-5 mt-md-0 ms-5 ms-md-0 ps-5 ps-md-0 position-relative">
					<img
						className=""
						style={{ width: "40dvw" }}
						src="./assets/images/home/img-new-recipe.png"
						alt="img-new-recipe"
					/>
				</div>
				<div
					className="col-12 col-md-6"
					style={{ marginTop: "11dvw", paddingLeft: "10dvw" }}>
					<h2 className="fw-semibold col-10 position-relative">
						Healthy Bone Broth Ramen (Quick &amp; Easy)
					</h2>
					<p className="col-8">
						Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry?
						That's right!
					</p>
					<a
						href="./pages/recipeDetailsPage.html"
						className="btn btn-warning text-light">
						Learn More
					</a>
				</div>
			</div>
		</section>
	);
};

export default NewRecipeSection;
