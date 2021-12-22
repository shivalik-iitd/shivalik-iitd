import React from "react";
import { Page, PageHeading } from "../../components/CoreUI";
import RepContainer from "../../components/RepContainer";

const RepPage = () => {
	return (
		<Page path="/reps">
			<PageHeading>Our Representatives</PageHeading>
			<RepContainer />
		</Page>
	);
};

export default RepPage;
