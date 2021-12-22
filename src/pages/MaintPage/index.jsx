import React from "react";
import { GoogleFormEmbed, Page, PageHeading } from "../../components/CoreUI";
import { MAINTENANCE_FORM_LINK } from "../../conf";

const MaintPage = () => {
	return (
		<Page path="/maint">
			<PageHeading>Maintenance Query</PageHeading>
			<GoogleFormEmbed link={MAINTENANCE_FORM_LINK} title="Maintenance" />
		</Page>
	);
};

export default MaintPage;
