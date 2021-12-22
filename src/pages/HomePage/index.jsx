import React from "react";
import { Page } from "../../components/CoreUI";
import HomeLanding from "../../components/HomeLanding";

const HomePage = () => {
	return (
		<Page path="/home" navBarProps={{ light: true }}>
			<HomeLanding />
		</Page>
	);
};

export default HomePage;
