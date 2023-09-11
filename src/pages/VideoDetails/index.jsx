import React from "react";
import Navbar from "../../components/Global/Navbar";
import "./videoDetails.css";

const VideoDetailsPage = () => {
	return (
		<div
			id="page-videoDetails"
			className="position-relative"
			style={{ minHeight: "100vh", width: "100dvw" }}>
			<Navbar />

			<main
				className="d-lg-flex justify-content-between mx-auto gap-3 gap-md-3"
				style={{ width: "80dvw", marginTop: "5vw", paddingBottom: "5vw" }}>
				<section id="currentStep" className="col-12 col-lg-7">
					<div className="col-12">
						<iframe
							title="step 4"
							src="https://www.youtube.com/embed/cyS8ycmGs1U"
							frameBorder={0}
							allowFullScreen=""
						/>
						<h5 className="mt-3">
							Beef Steak with Curry Sauce - [Step 4]
							<span className="d-block"> Cut the condiment and then mix it </span>
						</h5>
						<p>3 month ago</p>
					</div>
				</section>
				<section id="nextStep">
					<h2 className="mt-4 mt-lg-0">Next</h2>
					<div className="col-12 col-lg-3 d-flex d-lg-inline flex-wrap column-gap-4 column-gap-lg-0 row-gap-md-2 row-gap-lg-0">
						<div className="col-5 col-lg-12">
							<a href="#page-videoDetails">
								<img src="../../assets/images/img-videostep5.png" alt="" />
								<h6>
									Beef Steak with Curry Sauce - [Step 5]
									<span className="d-block">
										Saute condiments together until turn brown
									</span>
								</h6>
								<p>HanaLohana - 3 month ago</p>
							</a>
						</div>
						<div className="col-5 col-lg-12">
							<a href="#page-videoDetails">
								<img src="../../assets/images/img-videostep6-7.png" alt="" />
								<h6>
									Beef Steak with Curry Sauce - [Step 6]
									<span className="d-block"> Roast beef until it’s medium rare </span>
								</h6>
								<p>HanaLohana - 3 month ago</p>
							</a>
						</div>
						<div className="col-5 col-lg-12">
							<a href="#page-videoDetails">
								<img src="../../assets/images/img-videostep6-7.png" alt="" />
								<h6>
									Beef Steak with Curry Sauce - [Step 7]
									<span className="d-block"> Roast beef until it’s medium rare </span>
								</h6>
								<p>HanaLohana - 3 month ago</p>
							</a>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default VideoDetailsPage;
