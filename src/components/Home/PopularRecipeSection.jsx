import React from "react";

const PopularRecipeSection = () => {
	return (
		<section
			id="popular-recipe"
			className="pt-5 pt-md-0 ps-4 ps-md-0"
			style={{ marginTop: "10dvw", marginRight: "6dvw" }}>
			<h3
				style={{
					borderLeft: "1.2dvw solid",
					height: "7dvw",
					paddingLeft: "1.5dvw",
				}}
				className="fw-bold border-warning align-items-center d-flex">
				Popular Recipe
			</h3>
			<div className="row" style={{ rowGap: "3.7dvw", marginTop: "5.6dvw" }}>
				<a
					href="./pages/recipeDetailsPage.html"
					className="col-xl-4 col-md-6 col-12"
					style={{ position: "relative" }}>
					<img src="./assets/images/home/chiken-kare.png" alt="chiken-kare" />
					<p className="col-lg-2 position-absolute">Chicken Kare</p>
				</a>
				<a
					href="./pages/recipeDetailsPage.html"
					className="col-xl-4 col-md-6 col-12"
					style={{ position: "relative" }}>
					<img src="./assets/images/home/bomb-chicken.png" alt="bomb-chicken" />
					<p className="col-lg-2 position-absolute">Bomb Chicken</p>
				</a>
				<a
					href="./pages/recipeDetailsPage.html"
					className="col-xl-4 col-md-6 col-12"
					style={{ position: "relative" }}>
					<img
						src="./assets/images/home/banana-smothie-pop.png"
						alt="banana-smothie-pop"
					/>
					<p className="col-lg-4 position-absolute">Banana Smoothie Pop</p>
				</a>
				<a
					href="./pages/recipeDetailsPage.html"
					className="col-xl-4 col-md-6 col-12"
					style={{ position: "relative" }}>
					<img
						src="./assets/images/home/coffe-lava-cake.png"
						alt="coffe-lava-cake"
					/>
					<p className="col-lg-4 position-absolute">Coffe Lava Cake</p>
				</a>
				<a
					href="./pages/recipeDetailsPage.html"
					className="col-xl-4 col-md-6 col-12"
					style={{ position: "relative" }}>
					<img src="./assets/images/home/sugar-salmon.png" alt="sugar-salmon" />
					<p className="col-lg-2 position-absolute">Sugar Salmon</p>
				</a>
				<a
					href="./pages/recipeDetailsPage.html"
					className="col-xl-4 col-md-6 col-12"
					style={{ position: "relative" }}>
					<img src="./assets/images/home/indian-salad.png" alt="indian-salad" />
					<p className="col-lg-2 position-absolute">Indian Salad</p>
				</a>
			</div>
		</section>
	);
};

export default PopularRecipeSection;
