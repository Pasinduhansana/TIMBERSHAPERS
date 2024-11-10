import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import mission_img from "../assets/Profile_pic/Wooditems/mission.jpg";
import vission_img from "../assets/Profile_pic/Wooditems/vision.jpg";
import values_img from "../assets/Profile_pic/Wooditems/values.jpg";

const Achievement = () => {
	const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.1 });
	return (
		<>
			<div className="flex flex-col justify-center ">
				<h1 className="uppercase text-[#AF6E38] text-[40px] font-semibold mb-2 mt-24">
					Timber Shapes Achievement
				</h1>
				<p className=" text-[#5d5d5d] text-[15px] font-normal mb-20">
					Showcasing milestones in precision timber craftsmanship and the art of
					creating timeless designs.
				</p>

				<div className="flex flex-row justify-evenly">
					<motion.div
						className="flex flex-col w-min items-center justify-between p-0 rounded-[10px] bg-gray-50  drop-shadow-md  hover:bg-orange-50 transition-all duration-300"
						ref={ref1}
						initial={{ opacity: 0, y: 150 }} // Start off-screen
						animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }} // Animate based on inView1
						transition={{ duration: 0.6 }}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="442"
							height="369"
							viewBox="9 6 430 365"
							fill="none"
						>
							<defs>
								<pattern
									id="valuesPattern"
									patternUnits="objectBoundingBox"
									width="100%"
									height="100%"
									preserveAspectRatio="xMidYMid slice"
								>
									<image
										href={mission_img}
										width="442"
										height="366"
										preserveAspectRatio="xMidYMid slice"
									/>
								</pattern>
							</defs>
							<path
								d="M7 122.746C7 120.143 8.01543 117.642 9.83044 115.775L112.651 10.0288C114.534 8.09246 117.119 7 119.82 7H224.192H431.383C436.906 7 441.383 11.4772 441.383 17V239V305.178C441.383 316.481 425.57 319.105 421.919 308.408L401.789 249.423C396.557 234.092 380.098 225.683 364.608 230.429L19.9296 336.04C13.5014 338.01 7 333.202 7 326.479V122.746Z"
								fill="url(#valuesPattern)"
							/>
							<rect
								x="77.8615"
								y="0.786865"
								width="24.2304"
								height="109"
								rx="12.1152"
								transform="rotate(45 77.8615 0.786865)"
								fill="url(#valuesPattern)"
							/>
						</svg>
						<h1 className="text-[20px] font-semibold text-[#2d2d2d] uppercase mb-5 mt-[-4rem]">
							Mission
						</h1>
						<p className="text-[15px] font-normal text-[#5d5d5d] mb-5 mx-3">
							To be a leader in quality carpentry, transforming spaces with
							craftsmanship that combines beauty, functionality, and
							sustainability.
						</p>
						<div className="flex"></div>
					</motion.div>

					<motion.div
						className="flex flex-col w-min items-center justify-between p-0  rounded-[10px] bg-gray-50  drop-shadow-md  hover:bg-orange-50 transition-all duration-300"
						ref={ref1}
						initial={{ opacity: 0, y: 150 }} // Start off-screen
						animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }} // Animate based on inView1
						transition={{ duration: 0.6, delay: 0.5 }}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="442"
							height="369"
							viewBox="9 6 430 365"
							fill="none"
						>
							<defs>
								<pattern
									id="valuesPattern1"
									patternUnits="objectBoundingBox"
									width="100%"
									height="100%"
									preserveAspectRatio="xMidYMid slice"
								>
									<image
										href={vission_img}
										width="442"
										height="366"
										preserveAspectRatio="xMidYMid slice"
									/>
								</pattern>
							</defs>
							<path
								d="M7 122.746C7 120.143 8.01543 117.642 9.83044 115.775L112.651 10.0288C114.534 8.09246 117.119 7 119.82 7H224.192H431.383C436.906 7 441.383 11.4772 441.383 17V239V305.178C441.383 316.481 425.57 319.105 421.919 308.408L401.789 249.423C396.557 234.092 380.098 225.683 364.608 230.429L19.9296 336.04C13.5014 338.01 7 333.202 7 326.479V122.746Z"
								fill="url(#valuesPattern1)"
							/>
							<rect
								x="77.8615"
								y="0.786865"
								width="24.2304"
								height="109"
								rx="12.1152"
								transform="rotate(45 77.8615 0.786865)"
								fill="url(#valuesPattern1)"
							/>
						</svg>
						<h1 className="text-[20px] font-semibold text-[#2d2d2d] uppercase mb-5 mt-[-4rem]">
							Vision
						</h1>
						<p className="text-[15px] font-normal text-[#5d5d5d] mb-5 mx-3">
							To deliver exceptional carpentry solutions that enhance the
							aesthetic of every project. We prioritize customer satisfaction,
							quality materials, and skilled craftsmanship to bring each
							client’s vision to life.
						</p>
						<div className="flex"></div>
					</motion.div>

					<motion.div
						className="flex flex-col w-min items-center justify-between p-0 rounded-[10px] bg-gray-50  drop-shadow-md  hover:bg-orange-50 transition-all duration-300"
						ref={ref1}
						initial={{ opacity: 0, y: 150 }} // Start off-screen
						animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }} // Animate based on inView1
						transition={{ duration: 0.6, delay: 1 }}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="442"
							height="369"
							viewBox="9 6 430 365"
							fill="none"
						>
							<defs>
								<pattern
									id="valuesPattern2"
									patternUnits="objectBoundingBox"
									width="100%"
									height="100%"
									preserveAspectRatio="xMidYMid slice"
								>
									<image
										href={values_img}
										width="442"
										height="366"
										preserveAspectRatio="xMidYMid slice"
									/>
								</pattern>
							</defs>
							<path
								d="M7 122.746C7 120.143 8.01543 117.642 9.83044 115.775L112.651 10.0288C114.534 8.09246 117.119 7 119.82 7H224.192H431.383C436.906 7 441.383 11.4772 441.383 17V239V305.178C441.383 316.481 425.57 319.105 421.919 308.408L401.789 249.423C396.557 234.092 380.098 225.683 364.608 230.429L19.9296 336.04C13.5014 338.01 7 333.202 7 326.479V122.746Z"
								fill="url(#valuesPattern2)"
							/>
							<rect
								x="77.8615"
								y="0.786865"
								width="24.2304"
								height="109"
								rx="12.1152"
								transform="rotate(45 77.8615 0.786865)"
								fill="url(#valuesPattern)"
							/>
						</svg>
						<h1 className="text-[20px] font-semibold text-[#2d2d2d] uppercase mb-5 mt-[-4rem]">
							Values
						</h1>
						<p className="text-[15px] font-normal text-[#5d5d5d] mb-5 mx-3">
							We value quality craftsmanship, integrity, and customer
							satisfaction. By blending traditional techniques with innovation,
							we create sustainable, beautiful carpentry solutions that enhance
							every space.
						</p>
						<div className="flex"></div>
					</motion.div>
				</div>
			</div>
			<div
				style={{
					position: "relative",
					top: "50%", // Adjust the vertical position as needed
					left: 0,
					transform: "translateY(-50%)",
					borderTop: "2px dashed #E2E2E2",
					width: "100vw", // Full width
					zIndex: -1,
					opacity: 0.6,
					marginTop: "80px",
				}}
			></div>
		</>
	);
};

export default Achievement;
