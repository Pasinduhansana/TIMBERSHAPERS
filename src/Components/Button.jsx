import React from "react";

const button = () => {
	return (
		<>
			<div className="button">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="292"
					height="50"
					viewBox="0 0 292 70"
					fill="none"
					className="flex flex-col cursor-pointer hover:scale-105 duration-300 transition-all active:scale-150 text-left justify-start ml-[-3rem] mt-5"
				>
					<path
						d="M26.9529 25.8298C17.193 16.4767 23.8135 0 37.3314 0H250.138C252.623 0 255.019 0.925537 256.86 2.59619L288.722 31.5238C290.81 33.4192 292 36.1079 292 38.9276V59C292 64.5229 287.523 69 282 69H80.0361C74.8791 69 69.9213 67.008 66.198 63.4398L26.9529 25.8298Z"
						fill="#F8EBDD"
					/>
					<rect
						x="22"
						y="41.6259"
						width="12.1988"
						height="39.0323"
						rx="6.09938"
						transform="rotate(-45 22 41.6259)"
						fill="#F8EBDD"
					/>
				</svg>
				<h1 className=" top-[-30] ml-[45px] mt-[-40px] z-50 text-[20px] font-medium text-[#B57F2A]">
					GET STATRED
				</h1>
			</div>
		</>
	);
};

export default button;
