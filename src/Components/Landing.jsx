import React, { useState, useEffect } from "react";
import { FaAward } from "react-icons/fa"; // Import icon for achievement
import img1 from "../assets/Rectangle 1.png";
import { Button } from "@material-tailwind/react";
import Button_custom from "./Button";
import imgitem from "../assets/Profile_pic/Wooditems/pic1.jpg";
import profile1 from "../assets/Profile_pic/pic1.jpg";
import profile2 from "../assets/Profile_pic/pic2.jpg";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Achivement_card = () => {
	const achievements = [
		{ date: "2019-03-15", description: "Best Carpentry Design Award" },
		{ date: "2020-08-10", description: "Outstanding Woodwork Excellence" },
	];

	const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.1 });

	return (
		<>
			<motion.div
				className=" absolute flex flex-row bottom-14  gap-10 p-4 left-8 text-gray-800 text-[16px]"
				ref={ref1}
				initial={{ opacity: 0, y: 150 }} // Start off-screen
				animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }} // Animate based on inView1
				transition={{ duration: 0.6 }}
			>
				<div className="flex flex-row gap-5 ">
					<div className="grid-rows-1 grid-cols-1 mr-4 flex items-center justify-center">
						<FaAward className="text-3xl text-green-600" />
					</div>
					<div className="flex flex-col justify-start items-start text-left">
						<div className="flex items-center justify-center text-center  font-semibold ">
							Best Carpentry Design Award
						</div>
						<div className="flex items-center justify-center  text-[13px] text-left w-[300px] mt-2">
							Recognized for exceptional design and craftsmanship, showcasing
							innovation and excellence in carpentry.
						</div>
						<div className="flex items-center justify-center text-center text-[13px] mt-3">
							2019-03-15
						</div>
					</div>
				</div>

				<div className="flex flex-row gap-5 ">
					<div className="grid-rows-1 grid-cols-1 mr-4 flex items-center justify-center">
						<FaAward className="text-3xl text-green-600" />
					</div>
					<div className="flex flex-col justify-start items-start text-left">
						<div className="flex items-center justify-center text-center  font-semibold ">
							Outstanding Woodwork Excellence
						</div>
						<div className="flex items-center justify-center  text-[13px] text-left w-[300px] mt-2">
							Awarded for exceptional quality, precision, and dedication in
							woodwork, demonstrating mastery in craftsmanship and attention to
							detail.
						</div>
						<div className="flex items-center justify-center text-center text-[13px] mt-3">
							2020-10-06
						</div>
					</div>
				</div>
			</motion.div>
		</>
	);
};

const AchievementCounter = ({ target, label }) => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		// Duration of the count animation in milliseconds
		const duration = 2000;
		const increment = Math.ceil(target / (duration / 40)); // Adjust increment based on duration

		const counter = setInterval(() => {
			setCount((prev) => {
				if (prev + increment >= target) {
					clearInterval(counter);
					return target;
				}
				return prev + increment;
			});
		}, 50); // Update every 50ms

		return () => clearInterval(counter);
	}, [target]);

	return (
		<div className="flex flex-row">
			<div
				style={{
					position: "relative",
					top: 0,
					left: "0",
					transform: "translateX(-50%)",
					borderLeft: "2px dashed #FFFFFF",
					height: "70px",
					opacity: 0.4,
					marginRight: "10px",
				}}
			></div>
			<div className="flex flex-col justify-start text-left">
				<h1 className="text-[25px] font-semibold">{count}+</h1>
				<p className="uppercase">{label}</p>
			</div>
		</div>
	);
};

const Landing = () => {
	const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.1 });
	const [ref2, inView2] = useInView({ triggerOnce: false, threshold: 0.1 });

	return (
		<div className="sampl mt-[-5rem] z-[-1] w-full select-none">
			<div className="flex">
				<div className="landing">
					<motion.div
						className="absolute flex flex-col ml-5 top-20 left-5 text-left"
						ref={ref1}
						initial={{ opacity: 0, y: 150 }} // Start off-screen
						animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0.5, y: 50 }} // Animate based on inView1
						transition={{ duration: 0.6 }}
					>
						<h1 className=" text-[55px] mt-16  font-semibold text-white mb-3 font-poppins uppercase">
							Mastering the art <br />
							of exceptional
							<br /> Carpentry
						</h1>
						<p className="w-[40vw] text-left text-[18px] mb-2 mt-16">
							to elevate your spaces with quality, precision, and artistry and
							Transforming wood into timeless pieces that blend beauty with
							craftsmanship
						</p>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="292"
							height="40"
							viewBox="0 0 292 70"
							fill="none"
							className="cursor-pointer hover:scale-105 duration-300 transition-all active:scale-125 mt-5 ml-[-65px]"
						>
							<path
								d="M26.9529 25.8298C17.193 16.4767 23.8135 0 37.3314 0H250.138C252.623 0 255.019 0.925537 256.86 2.59619L288.722 31.5238C290.81 33.4192 292 36.1079 292 38.9276V59C292 64.5229 287.523 69 282 69H80.0361C74.8791 69 69.9213 67.008 66.198 63.4398L26.9529 25.8298Z"
								fill="url(#paint0_linear_8_75)"
							/>
							<rect
								x="22"
								y="41.6259"
								width="12.1988"
								height="39.0323"
								rx="6.09938"
								transform="rotate(-45 22 41.6259)"
								fill="url(#paint1_linear_8_75)"
							/>
							<path
								d="M93.028 31.13C92.56 30.2287 91.91 29.5527 91.078 29.102C90.246 28.634 89.284 28.4 88.192 28.4C86.996 28.4 85.93 28.6687 84.994 29.206C84.058 29.7433 83.3213 30.506 82.784 31.494C82.264 32.482 82.004 33.626 82.004 34.926C82.004 36.226 82.264 37.3787 82.784 38.384C83.3213 39.372 84.058 40.1347 84.994 40.672C85.93 41.2093 86.996 41.478 88.192 41.478C89.804 41.478 91.1127 41.0273 92.118 40.126C93.1233 39.2247 93.7387 38.0027 93.964 36.46H87.178V34.094H97.136V36.408C96.9453 37.812 96.4427 39.1033 95.628 40.282C94.8307 41.4607 93.782 42.4053 92.482 43.116C91.1993 43.8093 89.7693 44.156 88.192 44.156C86.4933 44.156 84.942 43.766 83.538 42.986C82.134 42.1887 81.016 41.088 80.184 39.684C79.3693 38.28 78.962 36.694 78.962 34.926C78.962 33.158 79.3693 31.572 80.184 30.168C81.016 28.764 82.134 27.672 83.538 26.892C84.9593 26.0947 86.5107 25.696 88.192 25.696C90.116 25.696 91.8233 26.1727 93.314 27.126C94.822 28.062 95.914 29.3967 96.59 31.13H93.028ZM103.023 28.322V33.626H109.263V36.044H103.023V41.582H110.043V44H100.059V25.904H110.043V28.322H103.023ZM125.368 25.93V28.348H120.558V44H117.594V28.348H112.758V25.93H125.368ZM141.078 44.182C139.864 44.182 138.772 43.974 137.802 43.558C136.831 43.1247 136.068 42.518 135.514 41.738C134.959 40.958 134.682 40.048 134.682 39.008H137.854C137.923 39.788 138.226 40.4293 138.764 40.932C139.318 41.4347 140.09 41.686 141.078 41.686C142.1 41.686 142.898 41.4433 143.47 40.958C144.042 40.4553 144.328 39.814 144.328 39.034C144.328 38.4273 144.146 37.9333 143.782 37.552C143.435 37.1707 142.993 36.876 142.456 36.668C141.936 36.46 141.208 36.2347 140.272 35.992C139.093 35.68 138.131 35.368 137.386 35.056C136.658 34.7267 136.034 34.224 135.514 33.548C134.994 32.872 134.734 31.9707 134.734 30.844C134.734 29.804 134.994 28.894 135.514 28.114C136.034 27.334 136.762 26.736 137.698 26.32C138.634 25.904 139.717 25.696 140.948 25.696C142.698 25.696 144.128 26.138 145.238 27.022C146.364 27.8887 146.988 29.0847 147.11 30.61H143.834C143.782 29.9513 143.47 29.388 142.898 28.92C142.326 28.452 141.572 28.218 140.636 28.218C139.786 28.218 139.093 28.4347 138.556 28.868C138.018 29.3013 137.75 29.9253 137.75 30.74C137.75 31.2947 137.914 31.754 138.244 32.118C138.59 32.4647 139.024 32.742 139.544 32.95C140.064 33.158 140.774 33.3833 141.676 33.626C142.872 33.9553 143.842 34.2847 144.588 34.614C145.35 34.9433 145.992 35.4547 146.512 36.148C147.049 36.824 147.318 37.734 147.318 38.878C147.318 39.7967 147.066 40.6633 146.564 41.478C146.078 42.2927 145.359 42.9513 144.406 43.454C143.47 43.9393 142.36 44.182 141.078 44.182ZM162.489 25.93V28.348H157.679V44H154.715V28.348H149.879V25.93H162.489ZM176.385 40.308H168.819L167.519 44H164.425L170.899 25.904H174.331L180.805 44H177.685L176.385 40.308ZM175.553 37.89L172.615 29.492L169.651 37.89H175.553ZM193.006 44L188.846 36.772H186.584V44H183.62V25.93H189.86C191.247 25.93 192.417 26.1727 193.37 26.658C194.341 27.1433 195.06 27.7933 195.528 28.608C196.013 29.4227 196.256 30.3327 196.256 31.338C196.256 32.5167 195.909 33.5913 195.216 34.562C194.54 35.5153 193.491 36.1653 192.07 36.512L196.542 44H193.006ZM186.584 34.406H189.86C190.969 34.406 191.801 34.1287 192.356 33.574C192.928 33.0193 193.214 32.274 193.214 31.338C193.214 30.402 192.937 29.674 192.382 29.154C191.827 28.6167 190.987 28.348 189.86 28.348H186.584V34.406ZM211.722 25.93V28.348H206.912V44H203.948V28.348H199.112V25.93H211.722ZM217.687 28.322V33.626H223.927V36.044H217.687V41.582H224.707V44H214.723V25.904H224.707V28.322H217.687ZM234.26 25.93C236.184 25.93 237.866 26.3027 239.304 27.048C240.76 27.776 241.878 28.8333 242.658 30.22C243.456 31.5893 243.854 33.1927 243.854 35.03C243.854 36.8673 243.456 38.462 242.658 39.814C241.878 41.166 240.76 42.206 239.304 42.934C237.866 43.6447 236.184 44 234.26 44H228.358V25.93H234.26ZM234.26 41.582C236.375 41.582 237.996 41.01 239.122 39.866C240.249 38.722 240.812 37.11 240.812 35.03C240.812 32.9327 240.249 31.2947 239.122 30.116C237.996 28.9373 236.375 28.348 234.26 28.348H231.322V41.582H234.26Z"
								fill="#B57F2A"
							/>
							<defs>
								<linearGradient
									id="paint0_linear_8_75"
									x1="131.5"
									y1="-29.9021"
									x2="172.76"
									y2="85.8049"
									gradientUnits="userSpaceOnUse"
								>
									<stop stop-color="#FFEAC8" />
									<stop offset="1" stop-color="#FFEAC8" />
								</linearGradient>
								<linearGradient
									id="paint1_linear_8_75"
									x1="27.4936"
									y1="24.7107"
									x2="42.1446"
									y2="27.7449"
									gradientUnits="userSpaceOnUse"
								>
									<stop stop-color="#FFEAC8" />
									<stop offset="1" stop-color="#FFEAC8" />
								</linearGradient>
							</defs>
						</svg>
					</motion.div>

					<div className="absolute flex flex-row gap-5 right-[4vw] top-[10vh] text-left  ">
						<div className="image-grid flex flex-row items-center w-[35px] mr-10">
							<img
								src={profile1}
								alt="pic1"
								className="rounded-[100%] object-cover h-[35px] w-[35px] mr-2 shadow-sm shadow-black hover:scale-125 transition-all duration-300"
								width={35}
								height={35}
							/>
							<img
								src={profile2}
								alt="pic1"
								className="rounded-[100%] object-cover h-[35px] w-[35px]  shadow-sm shadow-black hover:scale-125 transition-all duration-300"
								width={35}
								height={35}
							/>
						</div>
						<p className=" text-white text-[13px] w-96">
							We are an established property agency, assisting both sellers and
							buyers with all aspects of the property purchasing process.
						</p>
					</div>

					<motion.div
						className="absolute text-white left-[55vw] top-[23vh] flex flex-row justify-between gap-20"
						ref={ref1}
						initial={{ opacity: 0, y: 150 }} // Start off-screen
						animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }} // Animate based on inView1
						transition={{ duration: 0.6 }}
					>
						<AchievementCounter target={25} label="Career Experience" />
						<AchievementCounter target={290} label="Innovative Crafts" />
						<AchievementCounter target={150} label="Satisfied Clients" />
					</motion.div>

					<svg
						width="3028"
						height="100%"
						viewBox="0 0 1440 750"
						fill={imgitem}
						className="w-full"
					>
						<path
							d="M0 0H1440V668C1440 706.66 1408.66 738 1370 738H730.911C702.781 738 677.384 721.161 666.433 695.25L619.567 584.355C608.616 558.443 583.219 541.604 555.089 541.604H70C31.3401 541.604 0 510.264 0 471.604V0Z"
							fill="url(#paint0_linear_5_10)"
						/>
						<defs>
							<linearGradient
								id="paint0_linear_5_10"
								x1="720"
								y1="0"
								x2="720"
								y2="738"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#FCD495" />
								<stop offset="1" stop-color="#B8967C" />
							</linearGradient>
						</defs>
					</svg>

					<motion.div
						className="div"
						ref={ref2}
						initial={{ opacity: 0, y: 150 }} // Start off-screen
						animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }} // Animate based on inView1
						transition={{ duration: 0.6 }}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="1200"
							height="610"
							viewBox="0 0 710 460"
							fill="none"
							className="absolute right-[18px] translate-x-0 bottom-14"
						>
							<defs>
								<pattern
									id="imgPattern"
									patternUnits="userSpaceOnUse"
									width="100%"
									height="100%"
								>
									<image
										href={imgitem}
										x="0"
										y="-40"
										width="900"
										height="500"
										preserveAspectRatio="xMidYMid slice"
									/>
								</pattern>
							</defs>
							<path
								d="M0 60C0 26.8629 26.8629 0 60 0H399H598.5H673.107C689.191 0 704.602 6.45817 715.882 17.9253L780.775 83.899C791.814 95.1214 798 110.232 798 125.974V407C798 440.137 771.137 467 738 467H399H119.796C95.3269 467 73.3093 452.141 64.154 429.45L4.35818 281.245C1.4796 274.11 0 266.489 0 258.795V60Z"
								fill="url(#imgPattern)"
							/>
						</svg>
					</motion.div>
					<Achivement_card />
				</div>
			</div>
		</div>
	);
};

export default Landing;
