import React from "react";
import {
	Navbar,
	Collapse,
	Typography,
	Button,
	IconButton,
	List,
	Avatar,
	Input,
	ListItem,
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
} from "@material-tailwind/react";
import {
	ChevronDownIcon,
	Bars3Icon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import {
	Bars4Icon,
	GlobeAmericasIcon,
	NewspaperIcon,
	PhoneIcon,
	RectangleGroupIcon,
	SquaresPlusIcon,
	SunIcon,
	TagIcon,
	UserGroupIcon,
	UserCircleIcon,
	Cog6ToothIcon,
	InboxArrowDownIcon,
	LifebuoyIcon,
	PowerIcon,
	ShoppingCartIcon,
} from "@heroicons/react/24/solid";
import hor_logo from "../assets/Profile_pic/logoHorizontal.png";
import profile_img from "../assets/wallpaper.jpg";
import { useNavigate } from "react-router-dom";

const navListMenuItems1 = [
	{
		title: "Wood Types",
		description: "Explore various types of wood for your projects.",
		icon: "https://img.icons8.com/?size=100&id=12345&format=png&color=000000", // Placeholder icon for Wood Types
	},
	{
		title: "Tools",
		description: "Essential tools for every carpenter.",
		icon: "https://img.icons8.com/?size=100&id=67890&format=png&color=000000", // Placeholder icon for Tools
	},
	{
		title: "Joinery Techniques",
		description: "Learn about different joinery methods.",
		icon: "https://img.icons8.com/?size=100&id=13579&format=png&color=000000", // Placeholder icon for Joinery Techniques
	},
	{
		title: "Furniture Plans",
		description: "Find plans to build your own furniture.",
		icon: "https://img.icons8.com/?size=100&id=24680&format=png&color=000000", // Placeholder icon for Furniture Plans
	},
	{
		title: "Carpentry Tips",
		description: "Pro tips to enhance your woodworking skills.",
		icon: "https://img.icons8.com/?size=100&id=11223&format=png&color=000000", // Placeholder icon for Carpentry Tips
	},
	{
		title: "Safety Guidelines",
		description: "Stay safe while working with tools.",
		icon: "https://img.icons8.com/?size=100&id=33445&format=png&color=000000", // Placeholder icon for Safety Guidelines
	},
	{
		title: "Wood Finishes",
		description: "Discover different finishes for your projects.",
		icon: "https://img.icons8.com/?size=100&id=55667&format=png&color=000000", // Placeholder icon for Wood Finishes
	},
	{
		title: "Restoration Projects",
		description: "Learn how to restore old furniture.",
		icon: "https://img.icons8.com/?size=100&id=77889&format=png&color=000000", // Placeholder icon for Restoration Projects
	},
	{
		title: "DIY Kits",
		description: "Get kits for your next woodworking project.",
		icon: "https://img.icons8.com/?size=100&id=99000&format=png&color=000000", // Placeholder icon for DIY Kits
	},
];

const navListMenuItems2 = [
	{
		title: "Products",
		description: "Explore our range of woodworking tools and materials.",
		icon: SquaresPlusIcon, // Replace with relevant icon
	},
	{
		title: "About Us",
		description: "Learn about our passion for woodworking and craftsmanship.",
		icon: UserGroupIcon, // Replace with relevant icon
	},
	{
		title: "Blog",
		description: "Read articles on woodworking tips, techniques, and projects.",
		icon: Bars4Icon, // Replace with relevant icon
	},
	{
		title: "Services",
		description: "Discover our custom woodworking services.",
		icon: SunIcon, // Replace with relevant icon
	},
	{
		title: "Support",
		description: "Get help with your woodworking projects and inquiries.",
		icon: GlobeAmericasIcon, // Replace with relevant icon
	},
	{
		title: "Special Offers",
		description: "Check out our latest deals on tools and materials.",
		icon: TagIcon, // Replace with relevant icon
	},
];

const navListMenuItems3 = [
	{
		title: "Products",
		description: "Find the perfect solution for your needs.",
		icon: SquaresPlusIcon,
	},
	{
		title: "About Us",
		description: "Meet and learn about our dedication",
		icon: UserGroupIcon,
	},
	{
		title: "Blog",
		description: "Find the perfect solution for your needs.",
		icon: Bars4Icon,
	},
	{
		title: "Services",
		description: "Learn how we can help you achieve your goals.",
		icon: SunIcon,
	},
	{
		title: "Support",
		description: "Reach out to us for assistance or inquiries",
		icon: GlobeAmericasIcon,
	},
	{
		title: "Contact",
		description: "Find the perfect solution for your needs.",
		icon: PhoneIcon,
	},
	{
		title: "News",
		description: "Read insightful articles, tips, and expert opinions.",
		icon: NewspaperIcon,
	},
	{
		title: "Products",
		description: "Find the perfect solution for your needs.",
		icon: RectangleGroupIcon,
	},
	{
		title: "Special Offers",
		description: "Explore limited-time deals and bundles",
		icon: TagIcon,
	},
];

function NavListMenu1() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

	const renderItems = navListMenuItems1.map(
		({ icon, title, description }, key) => (
			<a href="#" key={key}>
				<MenuItem className="flex items-center gap-3 rounded-lg">
					<div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
						<img src={icon} alt="icon" className="h-6 text-gray-900 w-6" />
					</div>
					<div>
						<Typography
							variant="h6"
							color="blue-gray"
							className="flex items-center text-sm font-semibold text-gray-800"
						>
							{title}
						</Typography>
						<Typography
							variant="paragraph"
							className="text-xs !font-medium text-blue-gray-400 text-[12px]"
						>
							{description}
						</Typography>
					</div>
				</MenuItem>
			</a>
		)
	);

	return (
		<React.Fragment>
			<Menu
				open={isMenuOpen}
				handler={setIsMenuOpen}
				offset={{ mainAxis: 20 }}
				placement="bottom"
				allowHover={true}
			>
				<MenuHandler>
					<Typography
						as="div"
						variant="small"
						className="font-medium self-center"
					>
						<ListItem
							className="flex items-center gap-2 py-2 pr-4 font-semibold text-gray-600 text-[11px] uppercase text-center "
							selected={isMenuOpen || isMobileMenuOpen}
							onClick={() => setIsMobileMenuOpen((cur) => !cur)}
						>
							Shop
							<ChevronDownIcon
								strokeWidth={2.5}
								className={`hidden h-3 w-3 transition-transform lg:block ${
									isMenuOpen ? "rotate-180" : ""
								}`}
							/>
							<ChevronDownIcon
								strokeWidth={2.5}
								className={`block h-3 w-3 transition-transform lg:hidden ${
									isMobileMenuOpen ? "rotate-180" : ""
								}`}
							/>
						</ListItem>
					</Typography>
				</MenuHandler>
				<MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
					<ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
						{renderItems}
					</ul>
				</MenuList>
			</Menu>
			<div className="block lg:hidden">
				<Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
			</div>
		</React.Fragment>
	);
}

function NavListMenu2() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

	const renderItems = navListMenuItems2.map(
		({ icon, title, description }, key) => (
			<a href="#" key={key}>
				<MenuItem className="flex items-center gap-3 rounded-lg">
					<div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
						{" "}
						{React.createElement(icon, {
							strokeWidth: 2,
							className: "h-6 text-gray-900 w-6",
						})}
					</div>
					<div>
						<Typography
							variant="h6"
							color="blue-gray"
							className="flex items-center text-sm font-bold text-black"
						>
							{title}
						</Typography>
						<Typography
							variant="paragraph"
							className="text-xs !font-medium text-blue-gray-500"
						>
							{description}
						</Typography>
					</div>
				</MenuItem>
			</a>
		)
	);

	return (
		<React.Fragment>
			<Menu
				open={isMenuOpen}
				handler={setIsMenuOpen}
				offset={{ mainAxis: 20 }}
				placement="bottom"
				allowHover={true}
			>
				<MenuHandler>
					<Typography
						as="div"
						variant="small"
						className="font-medium self-center"
					>
						<ListItem
							className="flex items-center gap-2 py-2 pr-4 font-semibold text-gray-600 text-[11px] uppercase text-center"
							selected={isMenuOpen || isMobileMenuOpen}
							onClick={() => setIsMobileMenuOpen((cur) => !cur)}
						>
							Our Services
							<ChevronDownIcon
								strokeWidth={2.5}
								className={`hidden h-3 w-3 transition-transform lg:block ${
									isMenuOpen ? "rotate-180" : ""
								}`}
							/>
							<ChevronDownIcon
								strokeWidth={2.5}
								className={`block h-3 w-3 transition-transform lg:hidden ${
									isMobileMenuOpen ? "rotate-180" : ""
								}`}
							/>
						</ListItem>
					</Typography>
				</MenuHandler>
				<MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
					<ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
						{renderItems}
					</ul>
				</MenuList>
			</Menu>
			<div className="block lg:hidden">
				<Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
			</div>
		</React.Fragment>
	);
}

function NavListMenu3() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

	const renderItems = navListMenuItems2.map(
		({ icon, title, description }, key) => (
			<a href="#" key={key}>
				<MenuItem className="flex items-center gap-3 rounded-lg">
					<div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
						{" "}
						{React.createElement(icon, {
							strokeWidth: 2,
							className: "h-6 text-gray-900 w-6",
						})}
					</div>
					<div>
						<Typography
							variant="h6"
							color="blue-gray"
							className="flex items-center text-sm font-bold text-black"
						>
							{title}
						</Typography>
						<Typography
							variant="paragraph"
							className="text-xs !font-medium text-blue-gray-500"
						>
							{description}
						</Typography>
					</div>
				</MenuItem>
			</a>
		)
	);

	return (
		<React.Fragment>
			<Menu
				open={isMenuOpen}
				handler={setIsMenuOpen}
				offset={{ mainAxis: 20 }}
				placement="bottom"
				allowHover={true}
			>
				<MenuHandler>
					<Typography
						as="div"
						variant="small"
						className="font-medium self-center"
					>
						<ListItem
							className="flex items-center gap-2 py-2 pr-4 font-semibold text-gray-600 text-[11px] uppercase text-center"
							selected={isMenuOpen || isMobileMenuOpen}
							onClick={() => setIsMobileMenuOpen((cur) => !cur)}
						>
							Gallery
							<ChevronDownIcon
								strokeWidth={2.5}
								className={`hidden h-3 w-3 transition-transform lg:block ${
									isMenuOpen ? "rotate-180" : ""
								}`}
							/>
							<ChevronDownIcon
								strokeWidth={2.5}
								className={`block h-3 w-3 transition-transform lg:hidden ${
									isMobileMenuOpen ? "rotate-180" : ""
								}`}
							/>
						</ListItem>
					</Typography>
				</MenuHandler>
				<MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
					<ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
						{renderItems}
					</ul>
				</MenuList>
			</Menu>
			<div className="block lg:hidden">
				<Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
			</div>
		</React.Fragment>
	);
}

function NavListMenu4() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

	const renderItems = navListMenuItems2.map(
		({ icon, title, description }, key) => (
			<a href="#" key={key}>
				<MenuItem className="flex items-center gap-3 rounded-lg">
					<div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
						{" "}
						{React.createElement(icon, {
							strokeWidth: 2,
							className: "h-6 text-gray-900 w-6",
						})}
					</div>
					<div>
						<Typography
							variant="h6"
							color="blue-gray"
							className="flex items-center text-sm font-bold text-black"
						>
							{title}
						</Typography>
						<Typography
							variant="paragraph"
							className="text-xs !font-medium text-blue-gray-500"
						>
							{description}
						</Typography>
					</div>
				</MenuItem>
			</a>
		)
	);

	return (
		<React.Fragment>
			<Menu
				open={isMenuOpen}
				handler={setIsMenuOpen}
				offset={{ mainAxis: 20 }}
				placement="bottom"
				allowHover={true}
			>
				<MenuHandler>
					<Typography
						as="div"
						variant="small"
						className="font-medium self-center"
					>
						<ListItem
							className="flex items-center gap-2 py-2 pr-4 font-semibold text-gray-600 text-[11px] uppercase text-center"
							selected={isMenuOpen || isMobileMenuOpen}
							onClick={() => setIsMobileMenuOpen((cur) => !cur)}
						>
							Furniture
							<ChevronDownIcon
								strokeWidth={2.5}
								className={`hidden h-3 w-3 transition-transform lg:block ${
									isMenuOpen ? "rotate-180" : ""
								}`}
							/>
							<ChevronDownIcon
								strokeWidth={2.5}
								className={`block h-3 w-3 transition-transform lg:hidden ${
									isMobileMenuOpen ? "rotate-180" : ""
								}`}
							/>
						</ListItem>
					</Typography>
				</MenuHandler>
				<MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
					<ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
						{renderItems}
					</ul>
				</MenuList>
			</Menu>
			<div className="block lg:hidden">
				<Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
			</div>
		</React.Fragment>
	);
}

function NavList() {
	return (
		<List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
			<NavListMenu1 />
			<NavListMenu2 />
			<span className="cursor-pointer self-center mx-2 font-semibold text-[11px] uppercase text-gray-600 font-roboto active:scale-110 transition-all duration-200">
				Gallery
			</span>
			<span className="cursor-pointer self-center mx-2 font-semibold text-[11px] uppercase text-gray-600 font-roboto active:scale-110 transition-all duration-200">
				Furniture
			</span>
		</List>
	);
}

const Header = () => {
	const navigate = useNavigate();

	const handleButtonClick = () => {
		navigate("/");
	};
	const [openNav, setOpenNav] = React.useState(false);

	React.useEffect(() => {
		window.addEventListener(
			"resize",
			() => window.innerWidth >= 960 && setOpenNav(false)
		);
	}, []);

	return (
		<Navbar className="relative mx-auto px-4 py-2 !w-screen !max-w-screen l-0 r-o top-0">
			<div className="flex items-center justify-between text-blue-gray-900">
				<div
					className="img h-12 flex items-center mr-0 cursor-pointer"
					onClick={handleButtonClick}
				>
					<img src={hor_logo} alt="logo" className="w-[10rem]" />
				</div>

				<div className="hidden lg:block">
					<NavList />
				</div>

				<div className="hidden gap-2 lg:flex">
					<Searchbar />
					<IconButton variant="text" color="black" className="p-5">
						<ShoppingCartIcon className="h-5 w-5" />
					</IconButton>

					<Button
						variant="gradient"
						size="sm"
						className="text-[10px] w-[80px] h-[34px] self-center p-[-10px]"
					>
						Sign In
					</Button>
				</div>

				<IconButton
					variant="text"
					color="blue-gray"
					className="lg:hidden"
					onClick={() => setOpenNav(!openNav)}
				>
					{openNav ? (
						<XMarkIcon className="h-6 w-6" strokeWidth={2} />
					) : (
						<Bars3Icon className="h-6 w-6" strokeWidth={2} />
					)}
				</IconButton>
			</div>
			<Collapse open={openNav}>
				<NavList />
				<div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
					<Button variant="outlined" size="sm" color="blue-gray" fullWidth>
						Log In
					</Button>
					<Button variant="gradient" size="sm" fullWidth>
						Sign In
					</Button>
				</div>
			</Collapse>
		</Navbar>
	);
};

function Searchbar() {
	return (
		<div className="relative flex w-full gap-2 md:w-max ml-14">
			<Input
				type="search"
				color="dark-gray"
				label="Type here..."
				className="pr-20"
				containerProps={{
					className: "min-w-[288px]",
				}}
			/>
			<Button
				size="sm"
				color="black"
				className="!absolute right-1 top-1 rounded"
			>
				Search
			</Button>
		</div>
	);
}
//search Bar

export default Header;
