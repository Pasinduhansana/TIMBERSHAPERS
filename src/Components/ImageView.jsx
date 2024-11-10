import React from "react";
import imageview from "../assets/Profile_pic/Wooditems/imageview.jpg";

const ImageView = () => {
	return (
		<>
			<div className="flex flex-row justify-evenly">
				<div className="border-2  border-gray-200 h-[92vh]  rounded-[10px] w-10 mt-8"></div>
				<div className="relative w-[80vw] h-screen">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1440 951"
						fill="none"
						className="w-full h-full"
					>
						<defs>
							<pattern
								id="imagePattern"
								patternUnits="objectBoundingBox"
								width="100%"
								height="100%"
								preserveAspectRatio="xMidYMid slice"
							>
								<image
									href={imageview}
									width="1440"
									height="951"
									preserveAspectRatio="xMidYMid slice"
								/>
							</pattern>
						</defs>

						<path
							d="M1406 686.194C1406 687.929 1405.1 689.54 1403.62 690.451L1063.2 900.257C1062.42 900.743 1061.51 901 1060.58 901L717.997 901H34.9936C32.2322 901 29.9936 898.761 29.9936 896L29.9936 241.392C29.9936 239.737 30.8124 238.189 32.1805 237.258L349.869 21.0527C350.698 20.4882 351.679 20.1862 352.682 20.1862L1062 20.1862H1401C1403.76 20.1862 1406 22.4248 1406 25.1862V686.194Z"
							fill="url(#imagePattern)"
						/>
						<path
							d="M1401.02 720.239C1402.42 719.389 1404.08 720.041 1404.08 721.439L1404.08 894.172C1404.08 897.062 1401.16 899.698 1397.96 899.698L1112.22 899.698C1110.23 899.698 1109.81 897.38 1111.61 896.288L1401.02 720.239Z"
							fill="url(#imagePattern)"
						/>
						<path
							d="M253.679 22.7291C254.562 22.123 255.765 21.7817 257.019 21.7818L313.659 21.7822C315.746 21.7822 316.783 23.4932 315.302 24.4927L34.625 213.933C33.1478 214.93 30.6346 214.225 30.6346 212.814L30.6346 176.541C30.6346 176.123 30.878 175.721 31.312 175.423L253.679 22.7291Z"
							fill="url(#imagePattern)"
						/>
					</svg>

					{/* Glass Effect Rectangle */}
					<div
						className="absolute top-24 right-32 w-[500px] h-[300px] bg-white bg-opacity-20 backdrop-blur-[20px] rounded-lg  p-2"
						style={{
							boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
						}}
					>
						<h1 className="text-[25px] font-semibold mt-5 mb-10 text-gray-800 text-center">
							The Craft of Carpentry
						</h1>
						<p className="text-sm text-gray-800 text-center px-5">
							The art of carpentry is a harmonious blend of precision, patience,
							and passion. From handpicking the finest timber to expertly
							shaping each piece, every project is a testament to the
							craftsmanship, dedication, and timeless beauty that goes into
							creating something truly unique.
						</p>

						<h1 className="text-[20 px] text-gray-800 font-semibold mt-10 mb-10 text-center">
							Contact Us : +117 123 456 78
						</h1>
					</div>
				</div>
				<div className="border-2  border-gray-200 h-[92vh]  rounded-[10px] w-10 mt-8"></div>
			</div>
		</>
	);
};

export default ImageView;
