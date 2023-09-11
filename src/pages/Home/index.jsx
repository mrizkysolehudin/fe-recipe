import React from "react";
import "./home.css";
import DiscoverSection from "../../components/Home/DiscoverSection";
import PopularForYouSection from "../../components/Home/PopularForYouSection";
import NewRecipeSection from "../../components/Home/NewRecipeSection";
import PopularRecipeSection from "../../components/Home/PopularRecipeSection";
import Navbar from "../../components/Global/Navbar";
import Footer from "../../components/Global/Footer";

const HomePage = () => {
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
				<PopularForYouSection />
				<NewRecipeSection />
				<PopularRecipeSection />
			</main>

			<Footer />
		</div>
	);
};

export default HomePage;
