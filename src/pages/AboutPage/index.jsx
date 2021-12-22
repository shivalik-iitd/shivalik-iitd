import React from "react";
import { Page, PageHeading } from "../../components/CoreUI";

import "./about-page.css";

const AboutPage = () => {
	return (
		<Page path="/about" className="about-page">
			<PageHeading>About Us</PageHeading>
			<div className="about-page-content">
			The legendary Shivalik has one of the richest cultures in drama, fine arts, literature, and other non-academic pursuits, among all other hostels, corroborated by the fact that we were the winners of the BSP trophy and BRCA runner-up this year. 
				<br />
				<br />
				Since its inception in 1961, Shivalik House has excelled in almost every sphere of hostel culture. It has a proven culture of strong academic excellence, establishing itself as one of the finest in the entire institute. The alumni of our hostel are famous for scaling great heights in life and bringing laurels to the institute. Shivalik provides the best environment for the holistic development of a student. Thus, a Shivalik resident will always learn, deliver, and excel in life because of his morals while living at Shiva. No one is prouder than a Shivalik resident.
			</div>
		</Page>
	);
};
export default AboutPage;
