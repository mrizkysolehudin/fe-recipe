import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import RecipeDetailsPage from "../pages/RecipeDetails";
import ProfilePage from "../pages/Profile";
import AddRecipePage from "../pages/AddRecipe";
import RegisterPage from "../pages/Register";
import VideoDetailsPage from "../pages/VideoDetails";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<HomePage />} />
					<Route path="login" element={<LoginPage />} />
					<Route path="register" element={<RegisterPage />} />

					<Route path="myprofile" element={<ProfilePage />} />
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