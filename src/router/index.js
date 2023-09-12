import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import RecipeDetailsPage from "../pages/RecipeDetails";
import ProfilePage from "../pages/Profile";
import AddRecipePage from "../pages/AddRecipe";
import RegisterPage from "../pages/Register";
import VideoDetailsPage from "../pages/VideoDetails";
import http from "../helpers/http";
import { baseUrl } from "../helpers/baseUrl";

const Router = () => {
	const [token, setToken] = useState("");
	const [user, setUser] = useState([]);
	const [userId, setUserId] = useState(null);

	useEffect(() => {
		const getToken = localStorage.getItem("token");
		const user_id = localStorage.getItem("user_id");

		if (getToken) {
			setToken(getToken);
			setUserId(user_id);
		}

		if (userId) {
			getUserProfile(userId);
		}
		// eslint-disable-next-line
	}, [userId]);

	const getUserProfile = async (id) => {
		try {
			const response = await http(token).get(`${baseUrl}/users/${id}`);

			setUser(response.data.data[0]);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<HomePage />} />
					<Route path="login" element={<LoginPage />} />
					<Route path="register" element={<RegisterPage />} />

					<Route
						path="myprofile"
						element={<ProfilePage user={user} token={token} />}
					/>
				</Route>

				<Route path="/recipe">
					<Route path=":id" element={<RecipeDetailsPage />} />

					<Route path="add" element={<AddRecipePage />} />
					<Route path="video/:id" element={<VideoDetailsPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
