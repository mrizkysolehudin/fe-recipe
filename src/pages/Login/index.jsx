import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
	return (
		<div id="page-login" style={{ width: "100dvw", position: "relative" }}>
			<main className="row" style={{ width: "100%", height: "100%" }}>
				<section
					id="content-left"
					className="col-xl-6"
					style={{ position: "relative" }}>
					<img
						src="../assets/images/bg-image-content-left.png"
						className="bg-image-content-left"
						alt="bg-content-left"
					/>
					<div className="bg-left" />
					<img src="../assets/images/logo.png" className="img-logo" alt="logo" />
				</section>
				<section
					id="content-right"
					className="col-lg-12 col-xxl-6 d-flex flex-column align-items-center">
					<div>
						<h1
							className="text-yellow text-center"
							style={{ fontSize: 30, fontWeight: 700 }}>
							Welcome
						</h1>
						<h4
							style={{ marginTop: 30, fontSize: 18, fontWeight: 400 }}
							className="text-center text-gray">
							Log in into your exiting account
						</h4>
						<form className="ms-4 ms-sm-0" style={{ marginTop: 37 }}>
							<div>
								<label className="form-label">E-mail</label>
								<input
									type="text"
									className="form-control width-form"
									placeholder="examplexxx@gmail.com"
									style={{ marginTop: 14, height: 64, fontSize: 14 }}
								/>
							</div>
							<div style={{ marginTop: 24 }}>
								<label htmlFor="formGroupExampleInput2" className="form-label">
									Password
								</label>
								<input
									type="text"
									className="form-control width-form"
									placeholder="Password"
									style={{ marginTop: 14, height: 64, fontSize: 14 }}
								/>
							</div>
							<div className="form-check" style={{ marginTop: 24 }}>
								<input
									className="form-check-input"
									type="checkbox"
									id="gridCheck"
									style={{ width: 20, height: 20 }}
								/>
								<label
									className="form-check-label"
									htmlFor="gridCheck"
									style={{ fontSize: 16, marginLeft: 14 }}>
									I agree to terms &amp; conditions
								</label>
							</div>
							<button
								type="button"
								className="btn btn-warning text-light width-form"
								style={{ marginTop: 39, height: 64, fontSize: 16 }}>
								Log in
							</button>
						</form>
						<div style={{ marginTop: 16 }}>
							<a
								href="#page-login"
								style={{ fontSize: 12 }}
								className="d-flex justify-content-end">
								Forgot Password ?
							</a>
							<p
								className="d-flex justify-content-center text-lightgray"
								style={{ fontSize: 13, marginTop: 24 }}>
								Don’t have an account?
								<Link to="/register" className="text-yellow ms-1">
									{" "}
									Sign Up{" "}
								</Link>
							</p>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default LoginPage;
