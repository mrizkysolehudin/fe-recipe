import React from "react";

const PopularForYouSection = () => {
	return (
		<section className="pt-5 pt-md-0" style={{ marginTop: "10dvw" }}>
			<h3
				style={{
					borderLeft: "1.2dvw solid",
					height: "7dvw",
					paddingLeft: "1.5dvw",
				}}
				className="fw-bold border-warning align-items-center d-flex">
				Popular For You !
			</h3>
			<div className="d-md-flex" style={{ marginTop: "5dvw" }}>
				<div
					id="wrapper-img-popular-for-you"
					className="col-12 col-md-6 mt-5 mt-md-0 ms-5 ms-md-0 ps-5 ps-md-0 position-relative">
					<img
						className=""
						style={{ width: "41.5dvw" }}
						src="./assets/images/home/img-popular-for-you.png"
						alt="img-popular-for-you"
					/>
					<div
						id="border-box-yellow"
						className="border-3 border-warning border rounded-3"
						style={{
							position: "absolute",
							width: "32vw",
							height: "41vw",
							top: "3.5dvw",
							zIndex: -1,
							transform: "translateX(13dvw)",
						}}
					/>
				</div>
				<div
					className="col-12 col-md-6"
					style={{ marginTop: "11dvw", paddingLeft: "10dvw" }}>
					<h2 className="fw-semibold col-10 position-relative">
						Healthy Bone Broth Ramen (Quick &amp; Easy)
					</h2>
					<p className="col-10 col-md-8">
						Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry?
						That's right!
					</p>
					<a
						href="./pages/recipeDetailsPage.html"
						className="btn btn-warning text-light btn-learn-more">
						Learn More
					</a>
				</div>
			</div>
		</section>
	);
};

export default PopularForYouSection;
