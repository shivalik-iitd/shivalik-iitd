import React from "react";
import { Link } from "react-router-dom";
import TRISHUL_IMG from "../../img/trishul.png";
import { Button } from "../CoreUI";

import "./home-landing.css";

const HomeLanding = () => {
	return (
		<section className="home-landing">
			<h2>Jai Shiva</h2>
			<img src={TRISHUL_IMG} alt="" />
			<h1>
				Shivalik House
				<br />
				<span>IIT Delhi</span>
			</h1>
			<h2>Jai Shiva</h2>
			<Link to="/about">
				<Button>Learn More</Button>
			</Link>
		</section>
	);
};

export default HomeLanding;
