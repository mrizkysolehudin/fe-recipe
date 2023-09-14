import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import RecipeDetailsPage from "../pages/RecipeDetails";
import ProfilePage from "../pages/Profile";
import AddRecipePage from "../pages/AddRecipe";
import RegisterPage from "../pages/Register";
import VideoDetailsPage from "../pages/VideoDetails";
import EditRecipePage from "../pages/EditRecipe";
import PrivateRoute from "../components/Global/PrivateRoute";

const Router = () => {
	const [token, setToken] = useState("");

	useEffect(() => {
		const getToken = localStorage.getItem("token");

		if (getToken) {
			setToken(getToken);
		}
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<HomePage />} />
					<Route path="login" element={<LoginPage />} />
					<Route path="register" element={<RegisterPage />} />

					{/* private */}
					<Route
						path="myprofile"
						element={
							<PrivateRoute>
								<ProfilePage token={token} />
							</PrivateRoute>
						}
					/>
				</Route>

				<Route path="/recipe">
					<Route path=":id" element={<RecipeDetailsPage />} />
					<Route path="video/:id" element={<VideoDetailsPage />} />

					{/* private */}
					<Route
						path="add"
						element={
							<PrivateRoute>
								<AddRecipePage />
							</PrivateRoute>
						}
					/>
					<Route
						path="edit/:id"
						element={
							<PrivateRoute>
								<EditRecipePage />
							</PrivateRoute>
						}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
