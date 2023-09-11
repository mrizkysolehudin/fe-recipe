import React from "react";
import Navbar from "../../components/Global/Navbar";
import Footer from "../../components/Global/Footer";
import "./addRecipe.css";

const AddRecipePage = () => {
	return (
		<div id="page-addRecipe" style={{ width: "100dvw", position: "relative" }}>
			<Navbar />

			<main className="mx-auto col-8">
				<form className="d-grid gap-4" style={{ marginTop: "8dvw" }}>
					<div className="position-relative">
						<input id="image" className="form-control opacity-0" type="file" />
						<div
							id="bg-wrapper-add-photo"
							className="position-absolute top-0 w-100 rounded-3 d-flex flex-column justify-content-center align-items-center"
							style={{ zIndex: -1 }}>
							<img
								id="icon-gallery"
								src="../assets/icons/icon-gallery.svg"
								alt="icon-gallery"
								className=""
							/>
							<p className="mt-sm-3">Add Photo</p>
						</div>
					</div>
					<input
						id="title"
						type="text"
						className="form-control ps-sm-4 rounded-3"
						placeholder="Title"
					/>
					<textarea
						id="ingredients"
						className="form-control ps-sm-4 pt-sm-3 rounded-3"
						placeholder="Ingredients"
						defaultValue={""}
					/>
					<input
						id="video"
						type="text"
						className="form-control ps-sm-4 rounded-3"
						placeholder="Video"
					/>
					<button
						id="btn-post"
						type="submit"
						className="btn bg-yellow text-light fw-semibold mx-auto"
						style={{ width: "21dvw", marginTop: "5dvw" }}>
						Post
					</button>
				</form>
			</main>

			<Footer />
		</div>
	);
};

export default AddRecipePage;
