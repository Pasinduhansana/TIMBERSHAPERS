import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import imgitem from "../assets/Profile_pic/Wooditems/img4.jpg";
import imgitem1 from "../assets/Profile_pic/Wooditems/img2.jpg";
import imgitem2 from "../assets/Profile_pic/Wooditems/img3.jpg";

const Explore = () => {
	const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.1 });
	const [ref2, inView2] = useInView({ triggerOnce: false, threshold: 0.1 });
	const [ref3, inView3] = useInView({ triggerOnce: false, threshold: 0.1 });

	return (
		<>
			<motion.div
				className="flex flex-row justify-between items-center gap-10 mx-24 overflow-hidden"
				ref={ref1}
				initial={{ opacity: 0, y: 150 }} // Start off-screen
				animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }} // Animate based on inView1
				transition={{ duration: 0.6 }}
			>
				<div className="flex flex-col text-left justify-start align-baseline ml-20 my-20">
					<div className="flex flex-row items-center">
						<div className="w-4 h-4 bg-[#FCD495]">
							<div className="w-2 h-2 bg-[#E5B05D]"></div>
						</div>

						<h1 className="text-[#F5CE93] font-semibold ml-4 text-[20px] mb-1">
							Master Craftsmen in Woodwork
						</h1>
					</div>

					<h1 className="uppercase text-[#AF6E38] text-[40px] font-semibold mb-12">
						European REFINEMENT
					</h1>

					<p className="text-[#2D2D2D] mb-5 w-[40vw]">
						Experience the timeless beauty of European Standard Pinewood – a
						mark of exceptional quality, lasting appeal, and organic grace.
						Elevate your projects with the refined artistry of European
						craftsmanship.
					</p>

					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="306"
						height="60"
						viewBox="0 0 306 100"
						fill="none"
						className="left-0 ml-[-70px] cursor-pointer hover:scale-105 duration-300 transition-all active:scale-150 mt-5 mr-14"
					>
						<path
							d="M28.507 41.0693C18.4053 31.8314 24.9409 15 38.6298 15H262.449C264.854 15 267.179 15.867 268.997 17.442L302.548 46.5093C304.74 48.4087 306 51.1666 306 54.0674V74C306 79.5228 301.523 84 296 84H83.2181C78.2224 84 73.4076 82.1304 69.7211 78.7591L28.507 41.0693Z"
							fill="#FFE9C8"
						/>
						<rect
							x="22"
							y="56.6259"
							width="12.1988"
							height="39.0323"
							rx="6.09938"
							transform="rotate(-45 22 56.6259)"
							fill="#FEEAC8"
						/>
						<path
							d="M76.9887 40.93C78.9127 40.93 80.5941 41.3027 82.0327 42.048C83.4887 42.776 84.6067 43.8333 85.3867 45.22C86.1841 46.5893 86.5827 48.1927 86.5827 50.03C86.5827 51.8673 86.1841 53.462 85.3867 54.814C84.6067 56.166 83.4887 57.206 82.0327 57.934C80.5941 58.6447 78.9127 59 76.9887 59H71.0867V40.93H76.9887ZM76.9887 56.582C79.1034 56.582 80.7241 56.01 81.8507 54.866C82.9774 53.722 83.5407 52.11 83.5407 50.03C83.5407 47.9327 82.9774 46.2947 81.8507 45.116C80.7241 43.9373 79.1034 43.348 76.9887 43.348H74.0507V56.582H76.9887ZM92.4843 40.93V59H89.5203V40.93H92.4843ZM102.33 59.182C101.116 59.182 100.024 58.974 99.0538 58.558C98.0831 58.1247 97.3204 57.518 96.7658 56.738C96.2111 55.958 95.9338 55.048 95.9338 54.008H99.1058C99.1751 54.788 99.4784 55.4293 100.016 55.932C100.57 56.4347 101.342 56.686 102.33 56.686C103.352 56.686 104.15 56.4433 104.722 55.958C105.294 55.4553 105.58 54.814 105.58 54.034C105.58 53.4273 105.398 52.9333 105.034 52.552C104.687 52.1707 104.245 51.876 103.708 51.668C103.188 51.46 102.46 51.2347 101.524 50.992C100.345 50.68 99.3831 50.368 98.6378 50.056C97.9098 49.7267 97.2858 49.224 96.7658 48.548C96.2458 47.872 95.9858 46.9707 95.9858 45.844C95.9858 44.804 96.2458 43.894 96.7658 43.114C97.2858 42.334 98.0138 41.736 98.9498 41.32C99.8858 40.904 100.969 40.696 102.2 40.696C103.95 40.696 105.38 41.138 106.49 42.022C107.616 42.8887 108.24 44.0847 108.362 45.61H105.086C105.034 44.9513 104.722 44.388 104.15 43.92C103.578 43.452 102.824 43.218 101.888 43.218C101.038 43.218 100.345 43.4347 99.8078 43.868C99.2704 44.3013 99.0018 44.9253 99.0018 45.74C99.0018 46.2947 99.1664 46.754 99.4958 47.118C99.8424 47.4647 100.276 47.742 100.796 47.95C101.316 48.158 102.026 48.3833 102.928 48.626C104.124 48.9553 105.094 49.2847 105.84 49.614C106.602 49.9433 107.244 50.4547 107.764 51.148C108.301 51.824 108.57 52.734 108.57 53.878C108.57 54.7967 108.318 55.6633 107.816 56.478C107.33 57.2927 106.611 57.9513 105.658 58.454C104.722 58.9393 103.612 59.182 102.33 59.182ZM111.079 49.926C111.079 48.158 111.487 46.572 112.301 45.168C113.133 43.764 114.251 42.672 115.655 41.892C117.077 41.0947 118.628 40.696 120.309 40.696C122.233 40.696 123.941 41.1727 125.431 42.126C126.939 43.062 128.031 44.3967 128.707 46.13H125.145C124.677 45.1767 124.027 44.466 123.195 43.998C122.363 43.53 121.401 43.296 120.309 43.296C119.113 43.296 118.047 43.5647 117.111 44.102C116.175 44.6393 115.439 45.4107 114.901 46.416C114.381 47.4213 114.121 48.5913 114.121 49.926C114.121 51.2607 114.381 52.4307 114.901 53.436C115.439 54.4413 116.175 55.2213 117.111 55.776C118.047 56.3133 119.113 56.582 120.309 56.582C121.401 56.582 122.363 56.348 123.195 55.88C124.027 55.412 124.677 54.7013 125.145 53.748H128.707C128.031 55.4813 126.939 56.816 125.431 57.752C123.941 58.688 122.233 59.156 120.309 59.156C118.611 59.156 117.059 58.766 115.655 57.986C114.251 57.1887 113.133 56.088 112.301 54.684C111.487 53.28 111.079 51.694 111.079 49.926ZM140.419 59.182C138.737 59.182 137.186 58.792 135.765 58.012C134.361 57.2147 133.243 56.114 132.411 54.71C131.596 53.2887 131.189 51.694 131.189 49.926C131.189 48.158 131.596 46.572 132.411 45.168C133.243 43.764 134.361 42.672 135.765 41.892C137.186 41.0947 138.737 40.696 140.419 40.696C142.117 40.696 143.669 41.0947 145.073 41.892C146.494 42.672 147.612 43.764 148.427 45.168C149.241 46.572 149.649 48.158 149.649 49.926C149.649 51.694 149.241 53.2887 148.427 54.71C147.612 56.114 146.494 57.2147 145.073 58.012C143.669 58.792 142.117 59.182 140.419 59.182ZM140.419 56.608C141.615 56.608 142.681 56.3393 143.617 55.802C144.553 55.2473 145.281 54.4673 145.801 53.462C146.338 52.4393 146.607 51.2607 146.607 49.926C146.607 48.5913 146.338 47.4213 145.801 46.416C145.281 45.4107 144.553 44.6393 143.617 44.102C142.681 43.5647 141.615 43.296 140.419 43.296C139.223 43.296 138.157 43.5647 137.221 44.102C136.285 44.6393 135.548 45.4107 135.011 46.416C134.491 47.4213 134.231 48.5913 134.231 49.926C134.231 51.2607 134.491 52.4393 135.011 53.462C135.548 54.4673 136.285 55.2473 137.221 55.802C138.157 56.3393 139.223 56.608 140.419 56.608ZM168.139 40.93L161.353 59H157.921L151.109 40.93H154.281L159.637 55.958L165.019 40.93H168.139ZM173.582 43.322V48.626H179.822V51.044H173.582V56.582H180.602V59H170.618V40.904H180.602V43.322H173.582ZM193.639 59L189.479 51.772H187.217V59H184.253V40.93H190.493C191.879 40.93 193.049 41.1727 194.003 41.658C194.973 42.1433 195.693 42.7933 196.161 43.608C196.646 44.4227 196.889 45.3327 196.889 46.338C196.889 47.5167 196.542 48.5913 195.849 49.562C195.173 50.5153 194.124 51.1653 192.703 51.512L197.175 59H193.639ZM187.217 49.406H190.493C191.602 49.406 192.434 49.1287 192.989 48.574C193.561 48.0193 193.847 47.274 193.847 46.338C193.847 45.402 193.569 44.674 193.015 44.154C192.46 43.6167 191.619 43.348 190.493 43.348H187.217V49.406ZM226.466 40.93V59H223.502V46.624L217.99 59H215.936L210.398 46.624V59H207.434V40.93H210.632L216.976 55.1L223.294 40.93H226.466ZM238.604 59.182C236.923 59.182 235.371 58.792 233.95 58.012C232.546 57.2147 231.428 56.114 230.596 54.71C229.781 53.2887 229.374 51.694 229.374 49.926C229.374 48.158 229.781 46.572 230.596 45.168C231.428 43.764 232.546 42.672 233.95 41.892C235.371 41.0947 236.923 40.696 238.604 40.696C240.303 40.696 241.854 41.0947 243.258 41.892C244.679 42.672 245.797 43.764 246.612 45.168C247.427 46.572 247.834 48.158 247.834 49.926C247.834 51.694 247.427 53.2887 246.612 54.71C245.797 56.114 244.679 57.2147 243.258 58.012C241.854 58.792 240.303 59.182 238.604 59.182ZM238.604 56.608C239.8 56.608 240.866 56.3393 241.802 55.802C242.738 55.2473 243.466 54.4673 243.986 53.462C244.523 52.4393 244.792 51.2607 244.792 49.926C244.792 48.5913 244.523 47.4213 243.986 46.416C243.466 45.4107 242.738 44.6393 241.802 44.102C240.866 43.5647 239.8 43.296 238.604 43.296C237.408 43.296 236.342 43.5647 235.406 44.102C234.47 44.6393 233.733 45.4107 233.196 46.416C232.676 47.4213 232.416 48.5913 232.416 49.926C232.416 51.2607 232.676 52.4393 233.196 53.462C233.733 54.4673 234.47 55.2473 235.406 55.802C236.342 56.3393 237.408 56.608 238.604 56.608ZM260.137 59L255.977 51.772H253.715V59H250.751V40.93H256.991C258.377 40.93 259.547 41.1727 260.501 41.658C261.471 42.1433 262.191 42.7933 262.659 43.608C263.144 44.4227 263.387 45.3327 263.387 46.338C263.387 47.5167 263.04 48.5913 262.347 49.562C261.671 50.5153 260.622 51.1653 259.201 51.512L263.673 59H260.137ZM253.715 49.406H256.991C258.1 49.406 258.932 49.1287 259.487 48.574C260.059 48.0193 260.345 47.274 260.345 46.338C260.345 45.402 260.067 44.674 259.513 44.154C258.958 43.6167 258.117 43.348 256.991 43.348H253.715V49.406ZM270.143 43.322V48.626H276.383V51.044H270.143V56.582H277.163V59H267.179V40.904H277.163V43.322H270.143Z"
							fill="#B57F29"
						/>
					</svg>
				</div>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="572"
					height="536"
					viewBox="0 0 572 536"
					fill="none"
					className="mr-14"
				>
					<defs>
						<pattern
							id="imgPatternimg"
							patternUnits="userSpaceOnUse"
							width="572"
							height="536"
						>
							<image
								href={imgitem} // Replace with the actual path to your image
								x="0"
								y="0"
								width="572"
								height="536"
								preserveAspectRatio="xMidYMid slice" // Ensures the image covers the area
							/>
						</pattern>
					</defs>
					<path
						d="M557 532.5H335.675C327.015 532.5 322.87 521.86 329.249 516.003L553.927 309.683C558.736 305.267 566.5 308.679 566.5 315.208V523C566.5 528.247 562.247 532.5 557 532.5Z"
						stroke="black"
					/>
					<path
						d="M0 133.463C0 130.632 1.19962 127.934 3.30128 126.038L140.146 2.57524C141.983 0.917559 144.37 0 146.844 0H286H562C567.523 0 572 4.47715 572 10V254.132C572 262.98 568.337 271.433 561.881 277.482L294.654 527.891C289.094 533.101 281.76 536 274.141 536H10C4.47715 536 0 531.523 0 526L0 133.463Z"
						fill="url(#imgPatternimg)" // Apply the image pattern here
					/>
				</svg>
			</motion.div>

			{/* Seperetor */}
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
					marginTop: "60px",
					marginBottom: "60px",
				}}
			></div>

			<motion.div
				className="flex flex-row justify-between items-center gap-10 mx-24"
				ref={ref2}
				initial={{ opacity: 0, y: 150 }} // Start off-screen
				animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }} // Animate based on inView1
				transition={{ duration: 0.6 }}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="572"
					height="536"
					viewBox="0 0 572 536"
					fill="none"
					className="ml-14"
				>
					<defs>
						<pattern
							id="imgPattern1"
							patternUnits="userSpaceOnUse"
							width="572"
							height="536"
						>
							<image
								href={imgitem1} // Replace with the actual path to your image
								x="0"
								y="0"
								width="572"
								height="536"
								preserveAspectRatio="xMidYMid slice" // Ensures the image covers the area
							/>
						</pattern>
					</defs>
					<path
						d="M557 532.5H335.675C327.015 532.5 322.87 521.86 329.249 516.003L553.927 309.683C558.736 305.267 566.5 308.679 566.5 315.208V523C566.5 528.247 562.247 532.5 557 532.5Z"
						stroke="black"
					/>
					<path
						d="M0 133.463C0 130.632 1.19962 127.934 3.30128 126.038L140.146 2.57524C141.983 0.917559 144.37 0 146.844 0H286H562C567.523 0 572 4.47715 572 10V254.132C572 262.98 568.337 271.433 561.881 277.482L294.654 527.891C289.094 533.101 281.76 536 274.141 536H10C4.47715 536 0 531.523 0 526L0 133.463Z"
						fill="url(#imgPattern1)" // Apply the image pattern here
					/>
				</svg>

				<div className="flex flex-col text-left justify-start align-baseline mx-20 my-20 flex-grow">
					<div className="flex flex-row items-center">
						<div className="w-4 h-4 bg-[#FCD495]">
							<div className="w-2 h-2 bg-[#E5B05D]"></div>
						</div>

						<h1 className="text-[#F5CE93] font-semibold ml-4 text-[20px] mb-1">
							Master Craftsmen in Woodwork
						</h1>
					</div>

					<h1 className="uppercase text-[#AF6E38] text-[40px] font-semibold mb-12">
						Plywood Mastery
					</h1>

					<p className="text-[#2D2D2D] mb-5 w-[40vw] text-[16px]">
						"Plywood Excellence" highlights the versatility and durability of
						plywood, perfect for furniture, cabinetry, and flooring. Known for
						its strength, lightweight nature, and resistance to warping, plywood
						is a reliable material that combines quality and affordability in
						every carpentry project.
					</p>

					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="306"
						height="60"
						viewBox="0 0 306 100"
						fill="none"
						className="left-0 ml-[-70px] cursor-pointer hover:scale-105 duration-300 transition-all active:scale-150 mt-5 mr-14"
					>
						<path
							d="M28.507 41.0693C18.4053 31.8314 24.9409 15 38.6298 15H262.449C264.854 15 267.179 15.867 268.997 17.442L302.548 46.5093C304.74 48.4087 306 51.1666 306 54.0674V74C306 79.5228 301.523 84 296 84H83.2181C78.2224 84 73.4076 82.1304 69.7211 78.7591L28.507 41.0693Z"
							fill="#FFE9C8"
						/>
						<rect
							x="22"
							y="56.6259"
							width="12.1988"
							height="39.0323"
							rx="6.09938"
							transform="rotate(-45 22 56.6259)"
							fill="#FEEAC8"
						/>
						<path
							d="M76.9887 40.93C78.9127 40.93 80.5941 41.3027 82.0327 42.048C83.4887 42.776 84.6067 43.8333 85.3867 45.22C86.1841 46.5893 86.5827 48.1927 86.5827 50.03C86.5827 51.8673 86.1841 53.462 85.3867 54.814C84.6067 56.166 83.4887 57.206 82.0327 57.934C80.5941 58.6447 78.9127 59 76.9887 59H71.0867V40.93H76.9887ZM76.9887 56.582C79.1034 56.582 80.7241 56.01 81.8507 54.866C82.9774 53.722 83.5407 52.11 83.5407 50.03C83.5407 47.9327 82.9774 46.2947 81.8507 45.116C80.7241 43.9373 79.1034 43.348 76.9887 43.348H74.0507V56.582H76.9887ZM92.4843 40.93V59H89.5203V40.93H92.4843ZM102.33 59.182C101.116 59.182 100.024 58.974 99.0538 58.558C98.0831 58.1247 97.3204 57.518 96.7658 56.738C96.2111 55.958 95.9338 55.048 95.9338 54.008H99.1058C99.1751 54.788 99.4784 55.4293 100.016 55.932C100.57 56.4347 101.342 56.686 102.33 56.686C103.352 56.686 104.15 56.4433 104.722 55.958C105.294 55.4553 105.58 54.814 105.58 54.034C105.58 53.4273 105.398 52.9333 105.034 52.552C104.687 52.1707 104.245 51.876 103.708 51.668C103.188 51.46 102.46 51.2347 101.524 50.992C100.345 50.68 99.3831 50.368 98.6378 50.056C97.9098 49.7267 97.2858 49.224 96.7658 48.548C96.2458 47.872 95.9858 46.9707 95.9858 45.844C95.9858 44.804 96.2458 43.894 96.7658 43.114C97.2858 42.334 98.0138 41.736 98.9498 41.32C99.8858 40.904 100.969 40.696 102.2 40.696C103.95 40.696 105.38 41.138 106.49 42.022C107.616 42.8887 108.24 44.0847 108.362 45.61H105.086C105.034 44.9513 104.722 44.388 104.15 43.92C103.578 43.452 102.824 43.218 101.888 43.218C101.038 43.218 100.345 43.4347 99.8078 43.868C99.2704 44.3013 99.0018 44.9253 99.0018 45.74C99.0018 46.2947 99.1664 46.754 99.4958 47.118C99.8424 47.4647 100.276 47.742 100.796 47.95C101.316 48.158 102.026 48.3833 102.928 48.626C104.124 48.9553 105.094 49.2847 105.84 49.614C106.602 49.9433 107.244 50.4547 107.764 51.148C108.301 51.824 108.57 52.734 108.57 53.878C108.57 54.7967 108.318 55.6633 107.816 56.478C107.33 57.2927 106.611 57.9513 105.658 58.454C104.722 58.9393 103.612 59.182 102.33 59.182ZM111.079 49.926C111.079 48.158 111.487 46.572 112.301 45.168C113.133 43.764 114.251 42.672 115.655 41.892C117.077 41.0947 118.628 40.696 120.309 40.696C122.233 40.696 123.941 41.1727 125.431 42.126C126.939 43.062 128.031 44.3967 128.707 46.13H125.145C124.677 45.1767 124.027 44.466 123.195 43.998C122.363 43.53 121.401 43.296 120.309 43.296C119.113 43.296 118.047 43.5647 117.111 44.102C116.175 44.6393 115.439 45.4107 114.901 46.416C114.381 47.4213 114.121 48.5913 114.121 49.926C114.121 51.2607 114.381 52.4307 114.901 53.436C115.439 54.4413 116.175 55.2213 117.111 55.776C118.047 56.3133 119.113 56.582 120.309 56.582C121.401 56.582 122.363 56.348 123.195 55.88C124.027 55.412 124.677 54.7013 125.145 53.748H128.707C128.031 55.4813 126.939 56.816 125.431 57.752C123.941 58.688 122.233 59.156 120.309 59.156C118.611 59.156 117.059 58.766 115.655 57.986C114.251 57.1887 113.133 56.088 112.301 54.684C111.487 53.28 111.079 51.694 111.079 49.926ZM140.419 59.182C138.737 59.182 137.186 58.792 135.765 58.012C134.361 57.2147 133.243 56.114 132.411 54.71C131.596 53.2887 131.189 51.694 131.189 49.926C131.189 48.158 131.596 46.572 132.411 45.168C133.243 43.764 134.361 42.672 135.765 41.892C137.186 41.0947 138.737 40.696 140.419 40.696C142.117 40.696 143.669 41.0947 145.073 41.892C146.494 42.672 147.612 43.764 148.427 45.168C149.241 46.572 149.649 48.158 149.649 49.926C149.649 51.694 149.241 53.2887 148.427 54.71C147.612 56.114 146.494 57.2147 145.073 58.012C143.669 58.792 142.117 59.182 140.419 59.182ZM140.419 56.608C141.615 56.608 142.681 56.3393 143.617 55.802C144.553 55.2473 145.281 54.4673 145.801 53.462C146.338 52.4393 146.607 51.2607 146.607 49.926C146.607 48.5913 146.338 47.4213 145.801 46.416C145.281 45.4107 144.553 44.6393 143.617 44.102C142.681 43.5647 141.615 43.296 140.419 43.296C139.223 43.296 138.157 43.5647 137.221 44.102C136.285 44.6393 135.548 45.4107 135.011 46.416C134.491 47.4213 134.231 48.5913 134.231 49.926C134.231 51.2607 134.491 52.4393 135.011 53.462C135.548 54.4673 136.285 55.2473 137.221 55.802C138.157 56.3393 139.223 56.608 140.419 56.608ZM168.139 40.93L161.353 59H157.921L151.109 40.93H154.281L159.637 55.958L165.019 40.93H168.139ZM173.582 43.322V48.626H179.822V51.044H173.582V56.582H180.602V59H170.618V40.904H180.602V43.322H173.582ZM193.639 59L189.479 51.772H187.217V59H184.253V40.93H190.493C191.879 40.93 193.049 41.1727 194.003 41.658C194.973 42.1433 195.693 42.7933 196.161 43.608C196.646 44.4227 196.889 45.3327 196.889 46.338C196.889 47.5167 196.542 48.5913 195.849 49.562C195.173 50.5153 194.124 51.1653 192.703 51.512L197.175 59H193.639ZM187.217 49.406H190.493C191.602 49.406 192.434 49.1287 192.989 48.574C193.561 48.0193 193.847 47.274 193.847 46.338C193.847 45.402 193.569 44.674 193.015 44.154C192.46 43.6167 191.619 43.348 190.493 43.348H187.217V49.406ZM226.466 40.93V59H223.502V46.624L217.99 59H215.936L210.398 46.624V59H207.434V40.93H210.632L216.976 55.1L223.294 40.93H226.466ZM238.604 59.182C236.923 59.182 235.371 58.792 233.95 58.012C232.546 57.2147 231.428 56.114 230.596 54.71C229.781 53.2887 229.374 51.694 229.374 49.926C229.374 48.158 229.781 46.572 230.596 45.168C231.428 43.764 232.546 42.672 233.95 41.892C235.371 41.0947 236.923 40.696 238.604 40.696C240.303 40.696 241.854 41.0947 243.258 41.892C244.679 42.672 245.797 43.764 246.612 45.168C247.427 46.572 247.834 48.158 247.834 49.926C247.834 51.694 247.427 53.2887 246.612 54.71C245.797 56.114 244.679 57.2147 243.258 58.012C241.854 58.792 240.303 59.182 238.604 59.182ZM238.604 56.608C239.8 56.608 240.866 56.3393 241.802 55.802C242.738 55.2473 243.466 54.4673 243.986 53.462C244.523 52.4393 244.792 51.2607 244.792 49.926C244.792 48.5913 244.523 47.4213 243.986 46.416C243.466 45.4107 242.738 44.6393 241.802 44.102C240.866 43.5647 239.8 43.296 238.604 43.296C237.408 43.296 236.342 43.5647 235.406 44.102C234.47 44.6393 233.733 45.4107 233.196 46.416C232.676 47.4213 232.416 48.5913 232.416 49.926C232.416 51.2607 232.676 52.4393 233.196 53.462C233.733 54.4673 234.47 55.2473 235.406 55.802C236.342 56.3393 237.408 56.608 238.604 56.608ZM260.137 59L255.977 51.772H253.715V59H250.751V40.93H256.991C258.377 40.93 259.547 41.1727 260.501 41.658C261.471 42.1433 262.191 42.7933 262.659 43.608C263.144 44.4227 263.387 45.3327 263.387 46.338C263.387 47.5167 263.04 48.5913 262.347 49.562C261.671 50.5153 260.622 51.1653 259.201 51.512L263.673 59H260.137ZM253.715 49.406H256.991C258.1 49.406 258.932 49.1287 259.487 48.574C260.059 48.0193 260.345 47.274 260.345 46.338C260.345 45.402 260.067 44.674 259.513 44.154C258.958 43.6167 258.117 43.348 256.991 43.348H253.715V49.406ZM270.143 43.322V48.626H276.383V51.044H270.143V56.582H277.163V59H267.179V40.904H277.163V43.322H270.143Z"
							fill="#B57F29"
						/>
					</svg>
				</div>
			</motion.div>

			{/* Seperetor */}
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
					marginTop: "60px",
				}}
			></div>

			<motion.div
				className="flex flex-row justify-between items-center gap-10 mx-24 overflow-hidden"
				ref={ref3}
				initial={{ opacity: 0, y: 150 }} // Start off-screen
				animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }} // Animate based on inView1
				transition={{ duration: 0.6 }}
			>
				<div className="flex flex-col text-left justify-start align-baseline ml-20 my-20">
					<div className="flex flex-row items-center">
						<div className="w-4 h-4 bg-[#FCD495]">
							<div className="w-2 h-2 bg-[#E5B05D]"></div>
						</div>

						<h1 className="text-[#F5CE93] font-semibold ml-4 text-[20px] mb-1">
							Master Craftsmen in Woodwork
						</h1>
					</div>

					<h1 className="uppercase text-[#AF6E38] text-[40px] font-semibold mb-12">
						Melamine mastery
					</h1>

					<p className="text-[#2D2D2D] mb-5 w-[40vw] text-[16px]">
						"Melamine Mastery" focuses on mastering the use of melamine, a
						durable and versatile material popular in furniture, kitchenware,
						and decorative designs for its resilience and aesthetic appeal.
					</p>

					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="306"
						height="60"
						viewBox="0 0 306 100"
						fill="none"
						className="left-0 ml-[-70px] cursor-pointer hover:scale-105 duration-300 transition-all active:scale-150 mt-5 mr-14"
					>
						<path
							d="M28.507 41.0693C18.4053 31.8314 24.9409 15 38.6298 15H262.449C264.854 15 267.179 15.867 268.997 17.442L302.548 46.5093C304.74 48.4087 306 51.1666 306 54.0674V74C306 79.5228 301.523 84 296 84H83.2181C78.2224 84 73.4076 82.1304 69.7211 78.7591L28.507 41.0693Z"
							fill="#FFE9C8"
						/>
						<rect
							x="22"
							y="56.6259"
							width="12.1988"
							height="39.0323"
							rx="6.09938"
							transform="rotate(-45 22 56.6259)"
							fill="#FEEAC8"
						/>
						<path
							d="M76.9887 40.93C78.9127 40.93 80.5941 41.3027 82.0327 42.048C83.4887 42.776 84.6067 43.8333 85.3867 45.22C86.1841 46.5893 86.5827 48.1927 86.5827 50.03C86.5827 51.8673 86.1841 53.462 85.3867 54.814C84.6067 56.166 83.4887 57.206 82.0327 57.934C80.5941 58.6447 78.9127 59 76.9887 59H71.0867V40.93H76.9887ZM76.9887 56.582C79.1034 56.582 80.7241 56.01 81.8507 54.866C82.9774 53.722 83.5407 52.11 83.5407 50.03C83.5407 47.9327 82.9774 46.2947 81.8507 45.116C80.7241 43.9373 79.1034 43.348 76.9887 43.348H74.0507V56.582H76.9887ZM92.4843 40.93V59H89.5203V40.93H92.4843ZM102.33 59.182C101.116 59.182 100.024 58.974 99.0538 58.558C98.0831 58.1247 97.3204 57.518 96.7658 56.738C96.2111 55.958 95.9338 55.048 95.9338 54.008H99.1058C99.1751 54.788 99.4784 55.4293 100.016 55.932C100.57 56.4347 101.342 56.686 102.33 56.686C103.352 56.686 104.15 56.4433 104.722 55.958C105.294 55.4553 105.58 54.814 105.58 54.034C105.58 53.4273 105.398 52.9333 105.034 52.552C104.687 52.1707 104.245 51.876 103.708 51.668C103.188 51.46 102.46 51.2347 101.524 50.992C100.345 50.68 99.3831 50.368 98.6378 50.056C97.9098 49.7267 97.2858 49.224 96.7658 48.548C96.2458 47.872 95.9858 46.9707 95.9858 45.844C95.9858 44.804 96.2458 43.894 96.7658 43.114C97.2858 42.334 98.0138 41.736 98.9498 41.32C99.8858 40.904 100.969 40.696 102.2 40.696C103.95 40.696 105.38 41.138 106.49 42.022C107.616 42.8887 108.24 44.0847 108.362 45.61H105.086C105.034 44.9513 104.722 44.388 104.15 43.92C103.578 43.452 102.824 43.218 101.888 43.218C101.038 43.218 100.345 43.4347 99.8078 43.868C99.2704 44.3013 99.0018 44.9253 99.0018 45.74C99.0018 46.2947 99.1664 46.754 99.4958 47.118C99.8424 47.4647 100.276 47.742 100.796 47.95C101.316 48.158 102.026 48.3833 102.928 48.626C104.124 48.9553 105.094 49.2847 105.84 49.614C106.602 49.9433 107.244 50.4547 107.764 51.148C108.301 51.824 108.57 52.734 108.57 53.878C108.57 54.7967 108.318 55.6633 107.816 56.478C107.33 57.2927 106.611 57.9513 105.658 58.454C104.722 58.9393 103.612 59.182 102.33 59.182ZM111.079 49.926C111.079 48.158 111.487 46.572 112.301 45.168C113.133 43.764 114.251 42.672 115.655 41.892C117.077 41.0947 118.628 40.696 120.309 40.696C122.233 40.696 123.941 41.1727 125.431 42.126C126.939 43.062 128.031 44.3967 128.707 46.13H125.145C124.677 45.1767 124.027 44.466 123.195 43.998C122.363 43.53 121.401 43.296 120.309 43.296C119.113 43.296 118.047 43.5647 117.111 44.102C116.175 44.6393 115.439 45.4107 114.901 46.416C114.381 47.4213 114.121 48.5913 114.121 49.926C114.121 51.2607 114.381 52.4307 114.901 53.436C115.439 54.4413 116.175 55.2213 117.111 55.776C118.047 56.3133 119.113 56.582 120.309 56.582C121.401 56.582 122.363 56.348 123.195 55.88C124.027 55.412 124.677 54.7013 125.145 53.748H128.707C128.031 55.4813 126.939 56.816 125.431 57.752C123.941 58.688 122.233 59.156 120.309 59.156C118.611 59.156 117.059 58.766 115.655 57.986C114.251 57.1887 113.133 56.088 112.301 54.684C111.487 53.28 111.079 51.694 111.079 49.926ZM140.419 59.182C138.737 59.182 137.186 58.792 135.765 58.012C134.361 57.2147 133.243 56.114 132.411 54.71C131.596 53.2887 131.189 51.694 131.189 49.926C131.189 48.158 131.596 46.572 132.411 45.168C133.243 43.764 134.361 42.672 135.765 41.892C137.186 41.0947 138.737 40.696 140.419 40.696C142.117 40.696 143.669 41.0947 145.073 41.892C146.494 42.672 147.612 43.764 148.427 45.168C149.241 46.572 149.649 48.158 149.649 49.926C149.649 51.694 149.241 53.2887 148.427 54.71C147.612 56.114 146.494 57.2147 145.073 58.012C143.669 58.792 142.117 59.182 140.419 59.182ZM140.419 56.608C141.615 56.608 142.681 56.3393 143.617 55.802C144.553 55.2473 145.281 54.4673 145.801 53.462C146.338 52.4393 146.607 51.2607 146.607 49.926C146.607 48.5913 146.338 47.4213 145.801 46.416C145.281 45.4107 144.553 44.6393 143.617 44.102C142.681 43.5647 141.615 43.296 140.419 43.296C139.223 43.296 138.157 43.5647 137.221 44.102C136.285 44.6393 135.548 45.4107 135.011 46.416C134.491 47.4213 134.231 48.5913 134.231 49.926C134.231 51.2607 134.491 52.4393 135.011 53.462C135.548 54.4673 136.285 55.2473 137.221 55.802C138.157 56.3393 139.223 56.608 140.419 56.608ZM168.139 40.93L161.353 59H157.921L151.109 40.93H154.281L159.637 55.958L165.019 40.93H168.139ZM173.582 43.322V48.626H179.822V51.044H173.582V56.582H180.602V59H170.618V40.904H180.602V43.322H173.582ZM193.639 59L189.479 51.772H187.217V59H184.253V40.93H190.493C191.879 40.93 193.049 41.1727 194.003 41.658C194.973 42.1433 195.693 42.7933 196.161 43.608C196.646 44.4227 196.889 45.3327 196.889 46.338C196.889 47.5167 196.542 48.5913 195.849 49.562C195.173 50.5153 194.124 51.1653 192.703 51.512L197.175 59H193.639ZM187.217 49.406H190.493C191.602 49.406 192.434 49.1287 192.989 48.574C193.561 48.0193 193.847 47.274 193.847 46.338C193.847 45.402 193.569 44.674 193.015 44.154C192.46 43.6167 191.619 43.348 190.493 43.348H187.217V49.406ZM226.466 40.93V59H223.502V46.624L217.99 59H215.936L210.398 46.624V59H207.434V40.93H210.632L216.976 55.1L223.294 40.93H226.466ZM238.604 59.182C236.923 59.182 235.371 58.792 233.95 58.012C232.546 57.2147 231.428 56.114 230.596 54.71C229.781 53.2887 229.374 51.694 229.374 49.926C229.374 48.158 229.781 46.572 230.596 45.168C231.428 43.764 232.546 42.672 233.95 41.892C235.371 41.0947 236.923 40.696 238.604 40.696C240.303 40.696 241.854 41.0947 243.258 41.892C244.679 42.672 245.797 43.764 246.612 45.168C247.427 46.572 247.834 48.158 247.834 49.926C247.834 51.694 247.427 53.2887 246.612 54.71C245.797 56.114 244.679 57.2147 243.258 58.012C241.854 58.792 240.303 59.182 238.604 59.182ZM238.604 56.608C239.8 56.608 240.866 56.3393 241.802 55.802C242.738 55.2473 243.466 54.4673 243.986 53.462C244.523 52.4393 244.792 51.2607 244.792 49.926C244.792 48.5913 244.523 47.4213 243.986 46.416C243.466 45.4107 242.738 44.6393 241.802 44.102C240.866 43.5647 239.8 43.296 238.604 43.296C237.408 43.296 236.342 43.5647 235.406 44.102C234.47 44.6393 233.733 45.4107 233.196 46.416C232.676 47.4213 232.416 48.5913 232.416 49.926C232.416 51.2607 232.676 52.4393 233.196 53.462C233.733 54.4673 234.47 55.2473 235.406 55.802C236.342 56.3393 237.408 56.608 238.604 56.608ZM260.137 59L255.977 51.772H253.715V59H250.751V40.93H256.991C258.377 40.93 259.547 41.1727 260.501 41.658C261.471 42.1433 262.191 42.7933 262.659 43.608C263.144 44.4227 263.387 45.3327 263.387 46.338C263.387 47.5167 263.04 48.5913 262.347 49.562C261.671 50.5153 260.622 51.1653 259.201 51.512L263.673 59H260.137ZM253.715 49.406H256.991C258.1 49.406 258.932 49.1287 259.487 48.574C260.059 48.0193 260.345 47.274 260.345 46.338C260.345 45.402 260.067 44.674 259.513 44.154C258.958 43.6167 258.117 43.348 256.991 43.348H253.715V49.406ZM270.143 43.322V48.626H276.383V51.044H270.143V56.582H277.163V59H267.179V40.904H277.163V43.322H270.143Z"
							fill="#B57F29"
						/>
					</svg>
				</div>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="572"
					height="536"
					viewBox="0 0 572 536"
					fill="none"
					className="mr-14"
				>
					<defs>
						<pattern
							id="imgPattern3"
							patternUnits="userSpaceOnUse"
							width="572"
							height="536"
						>
							<image
								href={imgitem2} // Replace with the actual path to your image
								x="0"
								y="0"
								width="572"
								height="536"
								preserveAspectRatio="xMidYMid slice" // Ensures the image covers the area
							/>
						</pattern>
					</defs>
					<path
						d="M557 532.5H335.675C327.015 532.5 322.87 521.86 329.249 516.003L553.927 309.683C558.736 305.267 566.5 308.679 566.5 315.208V523C566.5 528.247 562.247 532.5 557 532.5Z"
						stroke="black"
					/>
					<path
						d="M0 133.463C0 130.632 1.19962 127.934 3.30128 126.038L140.146 2.57524C141.983 0.917559 144.37 0 146.844 0H286H562C567.523 0 572 4.47715 572 10V254.132C572 262.98 568.337 271.433 561.881 277.482L294.654 527.891C289.094 533.101 281.76 536 274.141 536H10C4.47715 536 0 531.523 0 526L0 133.463Z"
						fill="url(#imgPattern3)" // Apply the image pattern here
					/>
				</svg>
			</motion.div>

			{/* Seperetor */}
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
					marginTop: "60px",
				}}
			></div>
		</>
	);
};

export default Explore;