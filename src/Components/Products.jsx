import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Carousel } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

import img1 from "../assets/Profile_pic/Wooditems/item1.jpg";
import img2 from "../assets/Profile_pic/Wooditems/item2.jpg";
import img3 from "../assets/Profile_pic/Wooditems/item3.jpg";
import img4 from "../assets/Profile_pic/Wooditems/item4.jpg";
import img5 from "../assets/Profile_pic/Wooditems/item5.jpg";
import img6 from "../assets/Profile_pic/Wooditems/item6.jpg";
import img7 from "../assets/Profile_pic/Wooditems/item7.jpg";
import img8 from "../assets/Profile_pic/Wooditems/item8.jpg";
import img9 from "../assets/Profile_pic/Wooditems/item9.jpg";
import img10 from "../assets/Profile_pic/Wooditems/item10.jpg";
import img11 from "../assets/Profile_pic/Wooditems/item11.jpg";
import img12 from "../assets/Profile_pic/Wooditems/item12.jpg";
import img13 from "../assets/Profile_pic/Wooditems/item13.jpg";
import img14 from "../assets/Profile_pic/Wooditems/item14.jpg";
import img15 from "../assets/Profile_pic/Wooditems/item15.jpg";

const cardData = [
	{
		text1: "Craftsmanship in Wood",
		imageUrl1: img1,
		description1:
			"Each piece is a testament to precision, blending durability with natural beauty.",
		text2: "Timeless Artistry",
		imageUrl2: img2,
		description2:
			"Crafted with care, bringing the essence of nature into every home.",
		text3: "Handcrafted Elegance",
		imageUrl3: img3,
		description3:
			"Designed to endure, each item showcases a commitment to quality and style.",
		text4: "Natural Mastery",
		imageUrl4: img4,
		description4:
			"Sustainably crafted, embodying the warmth and character of fine wood.",
		text5: "Refined Woodwork",
		imageUrl5: img5,
		description5:
			"A celebration of fine wood, offering style and function for any space.",
	},
	{
		text1: "Inspired by Nature",
		imageUrl1: img6,
		description1:
			"Bringing the beauty of the outdoors inside, with unmatched quality and design.",
		text2: "Elegance in Every Grain",
		imageUrl2: img7,
		description2:
			"Distinctive wood grains and expert craftsmanship make each piece unique.",
		text3: "Crafted for Comfort",
		imageUrl3: img8,
		description3:
			"A perfect blend of form and function, designed for lasting beauty.",
		text4: "Woodwork Heritage",
		imageUrl4: img9,
		description4:
			"Built with respect for the craft, honoring timeless woodworking techniques.",
		text5: "The Art of Wood",
		imageUrl5: img10,
		description5:
			"Capturing the spirit of traditional carpentry with a contemporary touch.",
	},
	{
		text1: "Enduring Beauty",
		imageUrl1: img11,
		description1:
			"Wood pieces made to last, with a focus on sustainable, quality materials.",
		text2: "Refined Simplicity",
		imageUrl2: img12,
		description2:
			"Elegant and understated, bringing warmth and charm to any setting.",
		text3: "The Artisan's Touch",
		imageUrl3: img13,
		description3:
			"Expertly crafted, each piece highlights the skill and dedication of the artisan.",
		text4: "Harmony in Design",
		imageUrl4: img14,
		description4:
			"Creating balance and beauty with natural wood and meticulous craftsmanship.",
		text5: "Legacy in Wood",
		imageUrl5: img15,
		description5:
			"A timeless addition to any space, made with care and tradition in mind.",
	},
];

const Products = () => {
	const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.1 });
	const black_card_colour = "#9a9a9a46";
	const navigate = useNavigate();
	const handleButtonClick = () => {
		navigate("/gallery");
	};

	return (
		<>
			<div className="flex flex-col justify-center">
				<h1 className="uppercase text-[#AF6E38] text-[40px] font-semibold mb-2 mt-24">
					Latest Products in Gallery
				</h1>
				<p className=" text-[#5d5d5d] text-[15px] font-normal mb-10">
					Explore our newest additions and discover the latest products in our
					gallery.
				</p>

				<motion.div
					className="flex p-10 gap-3 items-center "
					ref={ref1}
					initial={{ opacity: 0, y: -150 }} // Start off-screen
					animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }} // Animate based on inView1
					transition={{ duration: 0.6 }}
				>
					<Carousel
						className="rounded-xl bg-gray-100 w-min pt-10 pb-5 "
						autoplay="True"
						autoplayDelay="9000"
						loop="True"
						navigation={({ setActiveIndex, activeIndex, length }) => (
							<div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2 ">
								{new Array(length).fill("").map((_, i) => (
									<span
										key={i}
										className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
											activeIndex === i ? "w-8 bg-gray-700" : "w-4 bg-gray-400"
										}`}
										onClick={() => setActiveIndex(i)}
									/>
								))}
							</div>
						)}
					>
						{cardData.map((card, index) => (
							<div
								key={index}
								className="relative h-[400px] w-full flex flex-row gap-2 bottom-10 mt-10"
							>
								<div className="flex flex-col w-[20vw] h-full justify-center bg-white text-center m-2 rounded-[5px] overflow-hidden ">
									<div className="rounded-[5px] overflow-hidden ">
										<img
											src={card.imageUrl1}
											alt={`image ${index + 1}`}
											className="h-full w-full object-cover"
										/>
									</div>

									<p className="text-[16px] font-semibold mt-5 text-gray-900 px-2 transition-all font-poppins group-hover:text-white text-wrap">
										{card.text1}
									</p>
									<p className="text-[13px] font-[200] mt-2 text-gray-900 px-2 transition-all font-poppins group-hover:text-white text-wrap">
										{card.description1}
									</p>

									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="306"
										height="60"
										viewBox="0 0 306 100"
										fill="none"
										className="cursor-pointer hover:scale-105 duration-300 transition-all active:scale-150 my-3"
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
											d="M119.699 40.93L112.913 59H109.481L102.669 40.93H105.841L111.197 55.958L116.579 40.93H119.699ZM125.142 40.93V59H122.178V40.93H125.142ZM131.997 43.322V48.626H138.237V51.044H131.997V56.582H139.017V59H129.033V40.904H139.017V43.322H131.997ZM166.198 40.93L160.842 59H157.488L153.692 45.324L149.662 59L146.334 59.026L141.212 40.93H144.358L148.102 55.646L152.158 40.93H155.486L159.256 55.568L163.026 40.93H166.198ZM194.428 40.93V59H191.464V46.624L185.952 59H183.898L178.36 46.624V59H175.396V40.93H178.594L184.938 55.1L191.256 40.93H194.428ZM206.566 59.182C204.885 59.182 203.333 58.792 201.912 58.012C200.508 57.2147 199.39 56.114 198.558 54.71C197.743 53.2887 197.336 51.694 197.336 49.926C197.336 48.158 197.743 46.572 198.558 45.168C199.39 43.764 200.508 42.672 201.912 41.892C203.333 41.0947 204.885 40.696 206.566 40.696C208.265 40.696 209.816 41.0947 211.22 41.892C212.641 42.672 213.759 43.764 214.574 45.168C215.389 46.572 215.796 48.158 215.796 49.926C215.796 51.694 215.389 53.2887 214.574 54.71C213.759 56.114 212.641 57.2147 211.22 58.012C209.816 58.792 208.265 59.182 206.566 59.182ZM206.566 56.608C207.762 56.608 208.828 56.3393 209.764 55.802C210.7 55.2473 211.428 54.4673 211.948 53.462C212.485 52.4393 212.754 51.2607 212.754 49.926C212.754 48.5913 212.485 47.4213 211.948 46.416C211.428 45.4107 210.7 44.6393 209.764 44.102C208.828 43.5647 207.762 43.296 206.566 43.296C205.37 43.296 204.304 43.5647 203.368 44.102C202.432 44.6393 201.695 45.4107 201.158 46.416C200.638 47.4213 200.378 48.5913 200.378 49.926C200.378 51.2607 200.638 52.4393 201.158 53.462C201.695 54.4673 202.432 55.2473 203.368 55.802C204.304 56.3393 205.37 56.608 206.566 56.608ZM228.099 59L223.939 51.772H221.677V59H218.713V40.93H224.953C226.339 40.93 227.509 41.1727 228.463 41.658C229.433 42.1433 230.153 42.7933 230.621 43.608C231.106 44.4227 231.349 45.3327 231.349 46.338C231.349 47.5167 231.002 48.5913 230.309 49.562C229.633 50.5153 228.584 51.1653 227.163 51.512L231.635 59H228.099ZM221.677 49.406H224.953C226.062 49.406 226.894 49.1287 227.449 48.574C228.021 48.0193 228.307 47.274 228.307 46.338C228.307 45.402 228.029 44.674 227.475 44.154C226.92 43.6167 226.079 43.348 224.953 43.348H221.677V49.406ZM238.104 43.322V48.626H244.344V51.044H238.104V56.582H245.124V59H235.14V40.904H245.124V43.322H238.104Z"
											fill="#B57F29"
										/>
									</svg>
								</div>

								<div className="flex flex-col w-[20vw] h-full justify-center bg-white text-center m-2 rounded-[5px] overflow-hidden ">
									<div className="rounded-[5px] overflow-hidden ">
										<img
											src={card.imageUrl2}
											alt={`image ${index + 1}`}
											className="h-full w-full object-cover"
										/>
									</div>

									<p className="text-[16px] font-semibold mt-5 text-gray-900 px-2 transition-all font-poppins group-hover:text-white text-wrap">
										{card.text2}
									</p>
									<p className="text-[13px] font-[200] mt-2 text-gray-900 px-2 transition-all font-poppins group-hover:text-white text-wrap">
										{card.description2}
									</p>

									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="306"
										height="60"
										viewBox="0 0 306 100"
										fill="none"
										className="cursor-pointer hover:scale-105 duration-300 transition-all active:scale-150 my-3"
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
											d="M119.699 40.93L112.913 59H109.481L102.669 40.93H105.841L111.197 55.958L116.579 40.93H119.699ZM125.142 40.93V59H122.178V40.93H125.142ZM131.997 43.322V48.626H138.237V51.044H131.997V56.582H139.017V59H129.033V40.904H139.017V43.322H131.997ZM166.198 40.93L160.842 59H157.488L153.692 45.324L149.662 59L146.334 59.026L141.212 40.93H144.358L148.102 55.646L152.158 40.93H155.486L159.256 55.568L163.026 40.93H166.198ZM194.428 40.93V59H191.464V46.624L185.952 59H183.898L178.36 46.624V59H175.396V40.93H178.594L184.938 55.1L191.256 40.93H194.428ZM206.566 59.182C204.885 59.182 203.333 58.792 201.912 58.012C200.508 57.2147 199.39 56.114 198.558 54.71C197.743 53.2887 197.336 51.694 197.336 49.926C197.336 48.158 197.743 46.572 198.558 45.168C199.39 43.764 200.508 42.672 201.912 41.892C203.333 41.0947 204.885 40.696 206.566 40.696C208.265 40.696 209.816 41.0947 211.22 41.892C212.641 42.672 213.759 43.764 214.574 45.168C215.389 46.572 215.796 48.158 215.796 49.926C215.796 51.694 215.389 53.2887 214.574 54.71C213.759 56.114 212.641 57.2147 211.22 58.012C209.816 58.792 208.265 59.182 206.566 59.182ZM206.566 56.608C207.762 56.608 208.828 56.3393 209.764 55.802C210.7 55.2473 211.428 54.4673 211.948 53.462C212.485 52.4393 212.754 51.2607 212.754 49.926C212.754 48.5913 212.485 47.4213 211.948 46.416C211.428 45.4107 210.7 44.6393 209.764 44.102C208.828 43.5647 207.762 43.296 206.566 43.296C205.37 43.296 204.304 43.5647 203.368 44.102C202.432 44.6393 201.695 45.4107 201.158 46.416C200.638 47.4213 200.378 48.5913 200.378 49.926C200.378 51.2607 200.638 52.4393 201.158 53.462C201.695 54.4673 202.432 55.2473 203.368 55.802C204.304 56.3393 205.37 56.608 206.566 56.608ZM228.099 59L223.939 51.772H221.677V59H218.713V40.93H224.953C226.339 40.93 227.509 41.1727 228.463 41.658C229.433 42.1433 230.153 42.7933 230.621 43.608C231.106 44.4227 231.349 45.3327 231.349 46.338C231.349 47.5167 231.002 48.5913 230.309 49.562C229.633 50.5153 228.584 51.1653 227.163 51.512L231.635 59H228.099ZM221.677 49.406H224.953C226.062 49.406 226.894 49.1287 227.449 48.574C228.021 48.0193 228.307 47.274 228.307 46.338C228.307 45.402 228.029 44.674 227.475 44.154C226.92 43.6167 226.079 43.348 224.953 43.348H221.677V49.406ZM238.104 43.322V48.626H244.344V51.044H238.104V56.582H245.124V59H235.14V40.904H245.124V43.322H238.104Z"
											fill="#B57F29"
										/>
									</svg>
								</div>

								<div className="flex flex-col w-[20vw] h-full justify-center bg-white text-center m-2 rounded-[5px] overflow-hidden ">
									<div className="rounded-[5px] overflow-hidden ">
										<img
											src={card.imageUrl3}
											alt={`image ${index + 1}`}
											className="h-full w-full object-cover"
										/>
									</div>

									<p className="text-[16px] font-semibold mt-5 text-gray-900 px-2 transition-all font-poppins group-hover:text-white text-wrap">
										{card.text3}
									</p>
									<p className="text-[13px] font-[200] mt-2 text-gray-900 px-2 transition-all font-poppins group-hover:text-white text-wrap">
										{card.description3}
									</p>

									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="306"
										height="60"
										viewBox="0 0 306 100"
										fill="none"
										className="cursor-pointer hover:scale-105 duration-300 transition-all active:scale-150 my-3"
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
											d="M119.699 40.93L112.913 59H109.481L102.669 40.93H105.841L111.197 55.958L116.579 40.93H119.699ZM125.142 40.93V59H122.178V40.93H125.142ZM131.997 43.322V48.626H138.237V51.044H131.997V56.582H139.017V59H129.033V40.904H139.017V43.322H131.997ZM166.198 40.93L160.842 59H157.488L153.692 45.324L149.662 59L146.334 59.026L141.212 40.93H144.358L148.102 55.646L152.158 40.93H155.486L159.256 55.568L163.026 40.93H166.198ZM194.428 40.93V59H191.464V46.624L185.952 59H183.898L178.36 46.624V59H175.396V40.93H178.594L184.938 55.1L191.256 40.93H194.428ZM206.566 59.182C204.885 59.182 203.333 58.792 201.912 58.012C200.508 57.2147 199.39 56.114 198.558 54.71C197.743 53.2887 197.336 51.694 197.336 49.926C197.336 48.158 197.743 46.572 198.558 45.168C199.39 43.764 200.508 42.672 201.912 41.892C203.333 41.0947 204.885 40.696 206.566 40.696C208.265 40.696 209.816 41.0947 211.22 41.892C212.641 42.672 213.759 43.764 214.574 45.168C215.389 46.572 215.796 48.158 215.796 49.926C215.796 51.694 215.389 53.2887 214.574 54.71C213.759 56.114 212.641 57.2147 211.22 58.012C209.816 58.792 208.265 59.182 206.566 59.182ZM206.566 56.608C207.762 56.608 208.828 56.3393 209.764 55.802C210.7 55.2473 211.428 54.4673 211.948 53.462C212.485 52.4393 212.754 51.2607 212.754 49.926C212.754 48.5913 212.485 47.4213 211.948 46.416C211.428 45.4107 210.7 44.6393 209.764 44.102C208.828 43.5647 207.762 43.296 206.566 43.296C205.37 43.296 204.304 43.5647 203.368 44.102C202.432 44.6393 201.695 45.4107 201.158 46.416C200.638 47.4213 200.378 48.5913 200.378 49.926C200.378 51.2607 200.638 52.4393 201.158 53.462C201.695 54.4673 202.432 55.2473 203.368 55.802C204.304 56.3393 205.37 56.608 206.566 56.608ZM228.099 59L223.939 51.772H221.677V59H218.713V40.93H224.953C226.339 40.93 227.509 41.1727 228.463 41.658C229.433 42.1433 230.153 42.7933 230.621 43.608C231.106 44.4227 231.349 45.3327 231.349 46.338C231.349 47.5167 231.002 48.5913 230.309 49.562C229.633 50.5153 228.584 51.1653 227.163 51.512L231.635 59H228.099ZM221.677 49.406H224.953C226.062 49.406 226.894 49.1287 227.449 48.574C228.021 48.0193 228.307 47.274 228.307 46.338C228.307 45.402 228.029 44.674 227.475 44.154C226.92 43.6167 226.079 43.348 224.953 43.348H221.677V49.406ZM238.104 43.322V48.626H244.344V51.044H238.104V56.582H245.124V59H235.14V40.904H245.124V43.322H238.104Z"
											fill="#B57F29"
										/>
									</svg>
								</div>

								<div className="flex flex-col w-[20vw] h-full justify-center bg-white text-center m-2 rounded-[5px] overflow-hidden ">
									<div className="rounded-[5px] overflow-hidden ">
										<img
											src={card.imageUrl4}
											alt={`image ${index + 1}`}
											className="h-full w-full object-cover"
										/>
									</div>

									<p className="text-[16px] font-semibold mt-5 text-gray-900 px-2 transition-all font-poppins group-hover:text-white text-wrap">
										{card.text4}
									</p>
									<p className="text-[13px] font-[200] mt-2 text-gray-900 px-2 transition-all font-poppins group-hover:text-white text-wrap">
										{card.description4}
									</p>

									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="306"
										height="60"
										viewBox="0 0 306 100"
										fill="none"
										className="cursor-pointer hover:scale-105 duration-300 transition-all active:scale-150 my-3"
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
											d="M119.699 40.93L112.913 59H109.481L102.669 40.93H105.841L111.197 55.958L116.579 40.93H119.699ZM125.142 40.93V59H122.178V40.93H125.142ZM131.997 43.322V48.626H138.237V51.044H131.997V56.582H139.017V59H129.033V40.904H139.017V43.322H131.997ZM166.198 40.93L160.842 59H157.488L153.692 45.324L149.662 59L146.334 59.026L141.212 40.93H144.358L148.102 55.646L152.158 40.93H155.486L159.256 55.568L163.026 40.93H166.198ZM194.428 40.93V59H191.464V46.624L185.952 59H183.898L178.36 46.624V59H175.396V40.93H178.594L184.938 55.1L191.256 40.93H194.428ZM206.566 59.182C204.885 59.182 203.333 58.792 201.912 58.012C200.508 57.2147 199.39 56.114 198.558 54.71C197.743 53.2887 197.336 51.694 197.336 49.926C197.336 48.158 197.743 46.572 198.558 45.168C199.39 43.764 200.508 42.672 201.912 41.892C203.333 41.0947 204.885 40.696 206.566 40.696C208.265 40.696 209.816 41.0947 211.22 41.892C212.641 42.672 213.759 43.764 214.574 45.168C215.389 46.572 215.796 48.158 215.796 49.926C215.796 51.694 215.389 53.2887 214.574 54.71C213.759 56.114 212.641 57.2147 211.22 58.012C209.816 58.792 208.265 59.182 206.566 59.182ZM206.566 56.608C207.762 56.608 208.828 56.3393 209.764 55.802C210.7 55.2473 211.428 54.4673 211.948 53.462C212.485 52.4393 212.754 51.2607 212.754 49.926C212.754 48.5913 212.485 47.4213 211.948 46.416C211.428 45.4107 210.7 44.6393 209.764 44.102C208.828 43.5647 207.762 43.296 206.566 43.296C205.37 43.296 204.304 43.5647 203.368 44.102C202.432 44.6393 201.695 45.4107 201.158 46.416C200.638 47.4213 200.378 48.5913 200.378 49.926C200.378 51.2607 200.638 52.4393 201.158 53.462C201.695 54.4673 202.432 55.2473 203.368 55.802C204.304 56.3393 205.37 56.608 206.566 56.608ZM228.099 59L223.939 51.772H221.677V59H218.713V40.93H224.953C226.339 40.93 227.509 41.1727 228.463 41.658C229.433 42.1433 230.153 42.7933 230.621 43.608C231.106 44.4227 231.349 45.3327 231.349 46.338C231.349 47.5167 231.002 48.5913 230.309 49.562C229.633 50.5153 228.584 51.1653 227.163 51.512L231.635 59H228.099ZM221.677 49.406H224.953C226.062 49.406 226.894 49.1287 227.449 48.574C228.021 48.0193 228.307 47.274 228.307 46.338C228.307 45.402 228.029 44.674 227.475 44.154C226.92 43.6167 226.079 43.348 224.953 43.348H221.677V49.406ZM238.104 43.322V48.626H244.344V51.044H238.104V56.582H245.124V59H235.14V40.904H245.124V43.322H238.104Z"
											fill="#B57F29"
										/>
									</svg>
								</div>

								<div className="flex flex-col w-[20vw] h-full justify-center bg-white text-center m-2 rounded-[5px] overflow-hidden ">
									<div className="rounded-[5px] overflow-hidden ">
										<img
											src={card.imageUrl5}
											alt={`image ${index + 1}`}
											className="h-full w-full object-cover"
										/>
									</div>

									<p className="text-[16px] font-semibold mt-5 text-gray-900 px-2 transition-all font-poppins group-hover:text-white text-wrap">
										{card.text5}
									</p>
									<p className="text-[13px] font-[200] mt-2 text-gray-900 px-2 transition-all font-poppins group-hover:text-white text-wrap">
										{card.description5}
									</p>

									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="306"
										height="60"
										viewBox="0 0 306 100"
										fill="none"
										className="cursor-pointer hover:scale-105 duration-300 transition-all active:scale-150 my-3"
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
											d="M119.699 40.93L112.913 59H109.481L102.669 40.93H105.841L111.197 55.958L116.579 40.93H119.699ZM125.142 40.93V59H122.178V40.93H125.142ZM131.997 43.322V48.626H138.237V51.044H131.997V56.582H139.017V59H129.033V40.904H139.017V43.322H131.997ZM166.198 40.93L160.842 59H157.488L153.692 45.324L149.662 59L146.334 59.026L141.212 40.93H144.358L148.102 55.646L152.158 40.93H155.486L159.256 55.568L163.026 40.93H166.198ZM194.428 40.93V59H191.464V46.624L185.952 59H183.898L178.36 46.624V59H175.396V40.93H178.594L184.938 55.1L191.256 40.93H194.428ZM206.566 59.182C204.885 59.182 203.333 58.792 201.912 58.012C200.508 57.2147 199.39 56.114 198.558 54.71C197.743 53.2887 197.336 51.694 197.336 49.926C197.336 48.158 197.743 46.572 198.558 45.168C199.39 43.764 200.508 42.672 201.912 41.892C203.333 41.0947 204.885 40.696 206.566 40.696C208.265 40.696 209.816 41.0947 211.22 41.892C212.641 42.672 213.759 43.764 214.574 45.168C215.389 46.572 215.796 48.158 215.796 49.926C215.796 51.694 215.389 53.2887 214.574 54.71C213.759 56.114 212.641 57.2147 211.22 58.012C209.816 58.792 208.265 59.182 206.566 59.182ZM206.566 56.608C207.762 56.608 208.828 56.3393 209.764 55.802C210.7 55.2473 211.428 54.4673 211.948 53.462C212.485 52.4393 212.754 51.2607 212.754 49.926C212.754 48.5913 212.485 47.4213 211.948 46.416C211.428 45.4107 210.7 44.6393 209.764 44.102C208.828 43.5647 207.762 43.296 206.566 43.296C205.37 43.296 204.304 43.5647 203.368 44.102C202.432 44.6393 201.695 45.4107 201.158 46.416C200.638 47.4213 200.378 48.5913 200.378 49.926C200.378 51.2607 200.638 52.4393 201.158 53.462C201.695 54.4673 202.432 55.2473 203.368 55.802C204.304 56.3393 205.37 56.608 206.566 56.608ZM228.099 59L223.939 51.772H221.677V59H218.713V40.93H224.953C226.339 40.93 227.509 41.1727 228.463 41.658C229.433 42.1433 230.153 42.7933 230.621 43.608C231.106 44.4227 231.349 45.3327 231.349 46.338C231.349 47.5167 231.002 48.5913 230.309 49.562C229.633 50.5153 228.584 51.1653 227.163 51.512L231.635 59H228.099ZM221.677 49.406H224.953C226.062 49.406 226.894 49.1287 227.449 48.574C228.021 48.0193 228.307 47.274 228.307 46.338C228.307 45.402 228.029 44.674 227.475 44.154C226.92 43.6167 226.079 43.348 224.953 43.348H221.677V49.406ZM238.104 43.322V48.626H244.344V51.044H238.104V56.582H245.124V59H235.14V40.904H245.124V43.322H238.104Z"
											fill="#B57F29"
										/>
									</svg>
								</div>
							</div>
						))}
					</Carousel>
				</motion.div>
			</div>
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
		</>
	);
};
export default Products;
