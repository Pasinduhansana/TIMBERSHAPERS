import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Button } from "@material-tailwind/react";
import Landing from "./Components/Landing";
import Home from "./Components/Home.jsx";
import Gallery from "./Components/Gallery";
import NotFound from "./Components/NotFound";
import About from "./Components/About";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<div className="flex flex-col min-h-screen">
				<Router>
					<div className="flex-grow">
						<Header />
					</div>

					{/* Verticle Dash View */}
					<div
						style={{
							position: "absolute",
							top: 0,
							left: "8%",
							transform: "translateX(-50%)",
							borderLeft: "2px dashed #E2E2E2",
							height: "600vh",
							zIndex: -1,
							opacity: 0.6,
						}}
					></div>

					{/* Verticle Dash View */}
					<div
						style={{
							position: "absolute",
							top: 0,
							left: "68%",
							transform: "translateX(-50%)",
							borderLeft: "2px dashed #E2E2E2",
							height: "600vh", // Full page height
							zIndex: -1,
							opacity: 0.6,
						}}
					></div>

					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<NotFound />} />
						<Route path="/gallery" element={<NotFound />} />
						<Route path="*" element={<NotFound />} />{" "}
						{/* Catch-all route for 404 */}
					</Routes>

					<Footer className="relative w-full bg-gray-800 text-white p-4" />
				</Router>
			</div>
		</>
	);
}

export default App;
