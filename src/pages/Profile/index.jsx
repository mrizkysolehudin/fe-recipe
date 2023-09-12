import React, { useEffect, useState } from "react";
import Navbar from "../../components/Global/Navbar";
import Footer from "../../components/Global/Footer";
import "./profile.css";
import MenuOptionsSection from "../../components/Profile/MenuOptionsSection";
import Alert from "../../components/Global/Alert";
import { baseUrl } from "../../helpers/baseUrl";
import http from "../../helpers/http";

const ProfilePage = ({ user, token }) => {
	const [openTab, setOpenTab] = useState("myRecipe");
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [dataRecipes, setDataRecipes] = useState([]);

	useEffect(() => {
		getRecipesUser(user?.user_id);
	}, [user?.user_id]);

	console.log(user.user_id);

	const getRecipesUser = async (id) => {
		setIsLoading(true);

		try {
			const response = await http().get(`${baseUrl}/recipe/user-recipes/${id}`);

			setDataRecipes(response?.data?.data);
			setIsLoading(false);
		} catch (error) {
			setIsError(true);
			setIsLoading(false);
			console.log(error);
		}
	};

	return (
		<div id="page-profile" style={{ width: "100dvw", position: "relative" }}>
			<Navbar />
			{isLoading ? (
				<Alert type="loading" />
			) : isError ? (
				<Alert type="error" />
			) : (
				<main>
					<section
						id="profile-user"
						className="d-flex flex-column align-items-center"
						style={{ marginTop: "7vw" }}>
						<div className="position-relative">
							<img id="avatar" src={user?.photo} alt="avatar-garneta-sharina" />
							<button
								id="btn-edit"
								className="border-0 bg-transparent"
								style={{ position: "absolute" }}>
								<img src="../assets/icons/icon-edit.svg" alt="icon-edit" />
							</button>
						</div>
						<p style={{ fontWeight: 500 }} className="mt-2 mt-lg-4">
							{user?.name}
						</p>
					</section>

					<MenuOptionsSection
						dataRecipes={dataRecipes}
						openTab={openTab}
						setOpenTab={setOpenTab}
					/>
				</main>
			)}
			<Footer />
		</div>
	);
};

export default ProfilePage;
