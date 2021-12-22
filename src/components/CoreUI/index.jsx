import React, { forwardRef } from "react";
import { Switch, Route } from "react-router-dom";
import { motion } from "framer-motion";

import "./core-ui.css";
import NavBar from "../NavBar";

export const Page = forwardRef(
	(
		{
			path = "",
			className = "",
			children,
			exact = true,
			navBarProps,
			...props
		},
		ref
	) => {
		return (
			<Switch>
				<Route path={path} exact={exact}>
					<motion.section
						className={`page ${className}`}
						ref={ref}
						{...props}
					>
						{children}
					</motion.section>
					<NavBar {...navBarProps} />
				</Route>
			</Switch>
		);
	}
);

export const PageSection = forwardRef(
	({ className = "", children, ...props }, ref) => {
		return (
			<motion.section
				className={`page-section ${className}`}
				ref={ref}
				{...props}
			>
				{children}
			</motion.section>
		);
	}
);

export const Button = ({
	type = "button",
	children,
	className = "",
	...props
}) => {
	return (
		<button type={type} className={`btn ${className}`} {...props}>
			{children}
		</button>
	);
};

export const PageHeading = ({ className = "", children, ...rest }) => (
	<h1 className={`page-heading ${className}`} {...rest}>
		{children}
	</h1>
);

export const GoogleFormEmbed = ({ link = "", title = "" }) => {
	return (
		<iframe
			src={link}
			title={title}
			className="google-form-embed"
			frameborder="0"
			marginheight="0"
			marginwidth="0"
		>
			Loading…
		</iframe>
	);
};
