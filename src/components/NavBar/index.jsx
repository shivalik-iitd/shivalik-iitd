import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import anim from "../../anim";
import "./nav-bar.css";
import { Link } from "react-router-dom";

const NAVBAR_OPTIONS = [
	{
		name: "Home",
		link: "/home",
	},
	{
		name: "About Us",
		link: "/about",
	},
	{
		name: "Student Body",
		link: "/reps",
	},
	{
		name: "Maintenance Query",
		link: "/maint",
	},
	{
		name: "Contact Us",
		link: "/contact",
	},
];

const NavBar = ({ light = false }) => {
	const [open, setOpen] = useState(false);
	return (
		<section
			className={`nav-bar ${open ? "nav-bar-open" : ""} ${
				light ? "nav-bar-light" : ""
			}`}
		>
			{!open && (
				<section className="nav-bar-section-closed">
					<span
						className="nav-bar-icon"
						onClick={() => setOpen(true)}
					>
						<FiMenu />
					</span>
				</section>
			)}
			<AnimatePresence>
				{open && (
					<motion.section
						className="nav-bar-section-open"
						variants={anim.sidebar}
						initial="initial"
						animate="animate"
						exit="exit"
					>
						<span
							className="nav-bar-icon"
							onClick={() => setOpen(false)}
						>
							<RiCloseFill />
						</span>
						<section className="nav-bar-options">
							{NAVBAR_OPTIONS.map(({ name, link }) => (
								<Link to={link}>
									<div className="nav-bar-option">{name}</div>
								</Link>
							))}
						</section>
					</motion.section>
				)}
			</AnimatePresence>
		</section>
	);
};

export default NavBar;
