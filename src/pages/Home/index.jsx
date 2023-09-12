import React, { useEffect, useState } from "react";
import "./home.css";
import DiscoverSection from "../../components/Home/DiscoverSection";
import PopularForYouSection from "../../components/Home/PopularForYouSection";
import NewRecipeSection from "../../components/Home/NewRecipeSection";
import PopularRecipeSection from "../../components/Home/PopularRecipeSection";
import Navbar from "../../components/Global/Navbar";
import Footer from "../../components/Global/Footer";
import http from "../../helpers/http";
import { baseUrl } from "../../helpers/baseUrl";
import Alert from "../../components/Global/Alert";

const HomePage = () => {
	const [dataRecipe, setDataRecipe] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		getDataRecipe();
	}, []);

	const getDataRecipe = async () => {
		setIsLoading(false);

		try {
			const result = await http().get(`${baseUrl}/recipe`);

			setDataRecipe(result.data.data);
			setIsLoading(false);
		} catch (error) {
			setIsError(true);
			setIsLoading(false);
		}
	};

	return (
		<div id="page-home" style={{ position: "relative", width: "100dvw" }}>
			<Navbar />

			<div
				style={{
					backgroundColor: "#efc81a",
					width: "29vw",
					height: "66vw",
					position: "absolute",
					top: 0,
					right: 0,
					zIndex: -1,
				}}
			/>

			<main
				style={{ width: "100dvw", paddingLeft: "6dvw", marginRight: "6dvw" }}
				className="">
				<div
					style={{
						backgroundColor: "#efc81a",
						width: "29vw",
						height: "66vw",
						position: "absolute",
						top: 0,
						right: 0,
						zIndex: -1,
					}}
				/>

				<DiscoverSection />

				{isLoading ? (
					<Alert type="loading" />
				) : isError ? (
					<Alert type="error" />
				) : (
					<>
						<PopularForYouSection dataRecipe={dataRecipe} />
						<NewRecipeSection dataRecipe={dataRecipe} />
						<PopularRecipeSection dataRecipe={dataRecipe} />
					</>
				)}
			</main>

			<Footer />
		</div>
	);
};

export default HomePage;
