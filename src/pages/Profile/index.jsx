import React, { useState } from "react";
import Navbar from "../../components/Global/Navbar";
import Footer from "../../components/Global/Footer";
import "./profile.css";
import MenuOptionsSection from "../../components/Profile/MenuOptionsSection";

const ProfilePage = () => {
	const [openTab, setOpenTab] = useState("myRecipe");

	return (
		<div id="page-profile" style={{ width: "100dvw", position: "relative" }}>
			<Navbar />

			<main>
				<section
					id="profile-user"
					className="d-flex flex-column align-items-center"
					style={{ marginTop: "7vw" }}>
					<div className="position-relative">
						<img
							id="avatar"
							src="../assets/images/profile/garneta-sharina.png"
							alt="avatar-garneta-sharina"
							className="rounded-5"
						/>
						<button
							id="btn-edit"
							className="border-0 bg-transparent"
							style={{ position: "absolute" }}>
							<img src="../assets/icons/icon-edit.svg" alt="icon-edit" />
						</button>
					</div>
					<p style={{ fontWeight: 500 }} className="mt-2 mt-lg-4">
						Garneta Sharina
					</p>
				</section>

				<MenuOptionsSection openTab={openTab} setOpenTab={setOpenTab} />
			</main>

			<Footer />
		</div>
	);
};

export default ProfilePage;
