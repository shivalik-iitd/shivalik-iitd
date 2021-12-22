import React from "react";
import { Redirect } from "react-router-dom";
import { Page } from "../../components/CoreUI";

const RootPage = ({ matchStar = false }) => (
	<Page path={matchStar ? "*" : "/"}>
		<Redirect to="/home" />
	</Page>
);

export default RootPage;
