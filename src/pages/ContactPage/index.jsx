import React from "react";
import { GoogleFormEmbed, Page, PageHeading } from "../../components/CoreUI";
import { CONTACT_FORM_LINK } from "../../conf";

const ContactPage = () => {
	return (
		<Page path="/contact">
			<PageHeading>Reach out to us</PageHeading>
			<GoogleFormEmbed link={CONTACT_FORM_LINK} title="Contact" />
		</Page>
	);
};

export default ContactPage;
