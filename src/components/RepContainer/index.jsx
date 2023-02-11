//cricket cap aquatics cap
import React from "react";
import PersonCard from "../PersonCard";
import "./rep-container.css";

const REP_INFORMATION = [
	{
		sectionHeading: "House Secretary",
		people: [
			{
				name: "Kumar Yashasvi",
				role: "House Secretary",
				imgUrl: "https://drive.google.com/uc?export=view&id=1tnvoD5f0f0G9-xWlMNQBo_JbSIMmyRRv",
				contact: "8890613511",
				instiEmail: "ee1190892@iitd.ac.in",
			},
		],
	},
	{
		sectionHeading: "Secretaries",
		people: [
			{
				name: "Navneet Singh",
				role: "Sports Secretary",
				imgUrl: "https://drive.google.com/uc?export=view&id=1iSR2vSMl47j4oXyzEpkeEuFbOIOfK84u",
				contact: "9416579331",
				instiEmail: "mt1200824@iitd.ac.in",
			},
			{
				name: "Nikhil Raj Verma",
				role: "Technical Secretary",
				imgUrl: "https://drive.google.com/uc?export=view&id=1u-ZBuVeb6WydHr0EfuOQo73XRwg1R7nR",
				contact: "8235432911",
				instiEmail: "mt1200827@iitd.ac.in",
			},
			{
				name: "Anurag Yadav",
				role: "Cultural Secretary",
				imgUrl: "https://drive.google.com/uc?export=view&id=1fGQe-HMGhDQPnGTFJyGVdJl4Zelvzf96",
				contact: "7976118384",
				instiEmail: "me2201000@iitd.ac.in",
			},
			{
				name: "Harsh Meena",
				role: "SAC Secretary",
				imgUrl: "https://drive.google.com/uc?export=view&id=1XW7y3xbw8GiA85hBWUUNzQp7ozUc1gTu",
				contact: "9306035644",
				instiEmail: "me2201018@iitd.ac.in",
			},
			{
				name: "Ankit Raushan",
				role: "Mess Secretary",
				imgUrl: "https://drive.google.com/uc?export=view&id=1qy8U08s98l3Et41sCPTQ_oy1Eq9Ewswp",
				contact: "7091508793",
				instiEmail: "cs1200324@iitd.ac.in",
			},
			{
				name: "Vaibhav Saha",
				role: "Maintenance Secretary",
				imgUrl: "https://drive.google.com/uc?export=view&id=1cfrjkiNmAta_SlNBPFOpizGTJFPW6sWf",
				contact: "9430050427",
				instiEmail: "cs1200403@iitd.ac.in",
			},
			{
				name: "Sibasish Rout",
				role: "Library Secretary",
				imgUrl: "https://drive.google.com/uc?export=view&id=1p38CJQjEvvBFz_oCP2YE1yE58Vv2vxzy",
				contact: "7205096336",
				instiEmail: "cs1200386@iitd.ac.in",
			},
		],
	},
	{
		sectionHeading: "Representatives",
		people: [
			{
				name: "Dhruv Jindal",
				role: "BSW",
				imgUrl: "https://drive.google.com/uc?export=view&id=1xzpBO1D6VkiVeBKUsaFjkTsCP9FZwwFo",
				contact: "8307882831",
				instiEmail: "me2211059@iitd.ac.in",
			},
			{
				name: "Shubham Dahiya",
				role: "BSW",
				imgUrl: "https://drive.google.com/uc?export=view&id=1Yc7eGteWidlRgVK0yg9TnaoDEehy8H1b",
				contact: "9817519879",
				instiEmail: "tt1180956@iitd.ac.in",
			},
			{
				name: "Tejas Kumar",
				role: "Design",
				imgUrl: "https://drive.google.com/uc?export=view&id=1DzVnh8DcmhbFRm6xyRcjk6JEfLH2OvXY",
				contact: "9116636233",
				instiEmail: "cs1210079@iitd.ac.in",
			},
			{
				name: "Dhruv Bansal",
				role: "Spic Macay",
				imgUrl: "https://drive.google.com/uc?export=view&id=1QbSG4y5Vo12qjQQXsjkyeaaPSNnrwL1r",
				contact: "7527937121",
				instiEmail: "me2211048@iitd.ac.in",
			},
			{
				name: "Satwik Kumar",
				role: "Music",
				imgUrl: "https://drive.google.com/uc?export=view&id=1tRqBgfh9c8xzzEHqyeGVLkNjlC2eOFoA",
				contact: "8447788437",
				instiEmail: "mt1210740@iitd.ac.in",
			},
			{
				name: "Sarwagya Prasad",
				role: "Debating",
				imgUrl: "https://drive.google.com/uc?export=view&id=10yPvlEU61CxrAjdtn4W-_ZiNraUaDrXt",
				contact: "7011649064",
				instiEmail: "cs1210639@iitd.ac.in",
			},
			{
				name: "Shoaib Mobassir ",
				role: "Indoor Sports",
				imgUrl: "https://drive.google.com/uc?export=view&id=1DcIv1xBlNJtFESzkJQqkZ8DGN5j9yIa_",
				contact: "8651414896",
				instiEmail: "ch1210409@iitd.ac.in",
			},
			{
				name: "Harshit Garg",
				role: "Fine Arts and Crafts",
				imgUrl: "https://drive.google.com/uc?export=view&id=1Hv4is7pFhJKNtntGiY9m0MIzJRCqPueI	",
				contact: "9650366628",
				instiEmail: "bb1210319@iitd.ac.in",
			},
			{
				name: "Saptarshi Banarjee",
				role: "Literature",
				imgUrl: "https://drive.google.com/uc?export=view&id=1DwOokfl4dPnY8tAwt82MwCmZrDIGJvy2",
				contact: "8882662289",
				instiEmail: "ch1211045@iitd.ac.in",
			},
			{
				name: "Rishi Chandra",
				role: "BHM",
				imgUrl: "https://drive.google.com/uc?export=view&id=1POtG9g7_BESuYnD0XuJhI1FepK1PHqn8",
				contact: "9122287305",
				instiEmail: "cs1210584@iitd.ac.in",
			},
			{
				name: "Yashas Chandra Vatsyayan",
				role: "Drama",
				imgUrl: "https://drive.google.com/uc?export=view&id=1sa6xn8T8izMiGpjV5dXM79XjMMOEmGLw",
				contact: "7760533450",
				instiEmail: "bb1210312@iitd.ac.in",
			},
			{
				name: "Harsh Swaika",
				role: "Quizzing",
				imgUrl: "https://drive.google.com/uc?export=view&id=1i09Xl3KHxm-e_kwRvCehg8cOhtILOzzl",
				contact: "8217666810",
				instiEmail: "ee1211052@iitd.ac.in",
			},
			{
				name: "Naman Agarwal",
				role: "Hindi Samiti",
				imgUrl: "https://drive.google.com/uc?export=view&id=1gx0pZaGymOQWiir69mgWdp-aS2__THyM",
				contact: "8888099389",
				instiEmail: "cs1210555@iitd.ac.in",
			},
			{
				name: "Medhansh Goyal",
				role: "Dance",
				imgUrl: "https://drive.google.com/uc?export=view&id=1bNCDNubhYs2vEbkZNrOoO_ks21U_jYwv",
				contact: "9821019624",
				instiEmail: "ch1210372@iitd.ac.in",
			},
			{
				name: "Adil Imran",
				role: "PFC",
				imgUrl: "https://drive.google.com/uc?export=view&id=1rYpymKuwMuaXAdzgIFUEhD2RQRMDnHWM",
				contact: "6005650762",
				instiEmail: "bb1211203@iitd.ac.in",
			},
		],
	},
	{
		sectionHeading: "Captains and Vice Captains",
		people: [
			{
				name: "Randeep Sangwan",
				role: "Weight Lifting Captain",
				imgUrl: "https://drive.google.com/uc?export=view&id=1pANS_l3phkgfCWkQ3521FHGNUAGqrGIN",
				contact: "7015161980",
				instiEmail: "ce1200279@iitd.ac.in",
			},
			{
				name: "Modit Agrawal",
				role: "Weight Lifting VC",
				imgUrl: "https://drive.google.com/uc?export=view&id=1paoVTRjKmc5yjeKwpZ3rCAkZE2bhQNxz",
				contact: "8171268543",
				instiEmail: "me2211075@iitd.ac.in",
			},
			{
				name: "Harshit Rastogi",
				role: "Volleyball Captain",
				imgUrl: "https://drive.google.com/uc?export=view&id=1pJmLMM7HOF5hpIuaCBqJUbPxIktT0cSV",
				contact: "9654994478",
				instiEmail: "am1201021@iitd.ac.in",
			},
			{
				name: "Vivek Mori",
				role: "Volleyball VC",
				imgUrl: "https://drive.google.com/uc?export=view&id=1omAknM7MPLTfCJooDCz_bBvJKL6ckr6x",
				contact: "7225080430",
				instiEmail: "ch1210427@iitd.ac.in",
			},
			{
				name: "Rahul Siddarth",
				role: "Cricket Captain",
				imgUrl: "https://drive.google.com/uc?export=view&id=1pk4RaRaKo5L52GOuUWerWAlRpBfYD1k_",
				contact: "7995683296",
				instiEmail: "me2190912@iitd.ac.in",
			},
			{
				name: "Aditya Jain",
				role: "Cricket VC",
				imgUrl: "https://drive.google.com/uc?export=view&id=1pgMfaR-6z_myqNGB8s0MmaYaqliuWWwR",
				contact: "9424506759",
				instiEmail: "ee1210633@iitd.ac.in",
			},
			{
				name: "Aniket Meena",
				role: "Aquatics Captain",
				imgUrl: "https://drive.google.com/uc?export=view&id=1pi2fZVM3Q7StTwBXHzUJkw4BQ9qbv_rL",
				contact: "7021170434",
				instiEmail: "bb1211206@iitd.ac.in",
			},
			{
				name: "Mahesh Pargewar",
				role: "Aquatics VC",
				imgUrl: "https://drive.google.com/uc?export=view&id=1p797xl8qxPIKjsc8HPwrC9cfJRA5Cale",
				contact: "9823560639",
				instiEmail: "ee3210733@iitd.ac.in",
			},
			{
				name: "Ayush Kumar Singh",
				role: "Football Captain",
				imgUrl: "https://drive.google.com/uc?export=view&id=1p6RHKkhYlCLOi2gQ4pRdhoU1Gwa7t5Sg",
				contact: "8534873095",
				instiEmail: "me2210298@iitd.ac.in",
			},
			{
				name: "Dhruv Mittal",
				role: "Football VC",
				imgUrl: "https://drive.google.com/uc?export=view&id=1p6d_i1_Hb6vwX8hfK7be06rrAVmwQ2zf",
				contact: "6239497610",
				instiEmail: "ee1210626@iitd.ac.in",
			},
			{
				name: "Mridul Jagrat",
				role: "Table Tennis Captain",
				imgUrl: "https://drive.google.com/uc?export=view&id=1pmEea8M227wjRqbNCdsdQLnbMePx8iPC",
				contact: "8890734658",
				instiEmail: "ee3210182@iitd.ac.in",
			},
			{
				name: "Ayush Dudawat",
				role: "Table Tennis VC",
				imgUrl: "https://drive.google.com/uc?export=view&id=1p3fNYp-_tbntucRNfOwGcv3HJqkJYtqA",
				contact: "9458439422",
				instiEmail: "ee1210694@iitd.ac.in",
			},
			{
				name: "Ishaan Singhal",
				role: "Basketball Captain",
				imgUrl: "https://drive.google.com/uc?export=view&id=1pg8VhE9AEYWA0PIRFSSUnhfG5KzfTgF_",
				contact: "9649641142",
				instiEmail: "ee3190574@iitd.ac.in",
			},
			{
				name: "Kartik Arora",
				role: "Basketball VC",
				imgUrl: "https://drive.google.com/uc?export=view&id=1pHVM9p8pDsxPK7oy73kDDH8AbfgrxH69",
				contact: "9999203452",
				instiEmail: "cs5210124@iitd.ac.in",
			},
			{
				name: "Aman Saich",
				role: "Hockey Captain",
				imgUrl: "https://drive.google.com/uc?export=view&id=1pKrlAfKo1jx6MFVOEp_1XE9S7GIjBFHE",
				contact: "7413060501",
				instiEmail: "bb1210343@iitd.ac.in",
			},
			{
				name: "Ujjwal Mathur",
				role: "Hockey VC",
				imgUrl: "https://drive.google.com/uc?export=view&id=1ptHz6yRXs1j0oADXTgl3wjPboPiqfTmH",
				contact: "8423642510",
				instiEmail: "cs1210115@iitd.ac.in",
			},
			{
				name: "Harshit Kumar",
				role: "Badminton Captain",
				imgUrl: "https://drive.google.com/uc?export=view&id=1pgcyIJ1Il0DPSDPKQbcl2HA1zpgvR_Nn",
				contact: "9711733868",
				instiEmail: "cs1200347@iitd.ac.in",
			},
			{
				name: "Yash Saini",
				role: "Badminton VC",
				imgUrl: "https://drive.google.com/uc?export=view&id=1pj4VaRGFgPrq2XUl2INyh8bhuPprQaOW",
				contact: "7456994484",
				instiEmail: "me2211096@iitd.ac.in",
			},
			{
				name: "Shubham Trehan",
				role: "Tennis Captain",
				imgUrl: "https://drive.google.com/uc?export=view&id=1pfnVCSQxdGR0yiP2V5W1qbVzC5oELNZv",
				contact: "7065516903",
				instiEmail: "ch1210379@iitd.ac.in",
			},
			{
				name: "Shlok Pande",
				role: "Tennis VC",
				imgUrl: "https://drive.google.com/uc?export=view&id=1pjh09aAsSNnEehNnkiZtfcBn63qFIWk0",
				contact: "7888038253",
				instiEmail: "cs1210563@iitd.ac.in",
			},
			{
				name: "Ayush Singh",
				role: "Athletics Captain",
				imgUrl: "https://drive.google.com/uc?export=view&id=1q6x2Z50NJO3d2NadnOTuBLnRZEoc0Vgb",
				contact: "7042273061",
				instiEmail: "ee3210180@iitd.ac.in",
			},
			{
				name: "Tharun B",
				role: "Athletics VC",
				imgUrl: "https://drive.google.com/uc?export=view&id=1q3aIk6sLmvDPo4lm1n3X_odLp6Qh6TIk",
				contact: "6304695318",
				instiEmail: "bb1210370@iitd.ac.in",
			},
			{
				name: "Swakshand",
				role: "Squash Captain",
				imgUrl: "https://drive.google.com/uc?export=view&id=1q0V3WTlhj7UCABa9akddwdWpthsX90L9",
				contact: "7903612778",
				instiEmail: "me2211090@iitd.ac.in",
			},
			{
				name: "Nidhish Garg",
				role: "Squash VC",
				imgUrl: "https://drive.google.com/uc?export=view&id=1pzg_Z2F2wk0tUuPp8lBZlUERcFXvXgtf",
				contact: "9817496020",
				instiEmail: "ee3210176@iitd.ac.in",
			},
		]
	}
];
const RepContainer = () => {
	return (
		<section className="rep-container">
			{REP_INFORMATION.map(({ sectionHeading, people }) => (
				<section className="rep-container-category">
					<h2 className="rep-container-heading">{sectionHeading}</h2>
					<section className="rep-container-category-people">
						{people.map((person) => (
							<PersonCard {...person} />
						))}
					</section>
				</section>
			))}
		</section>
	);
};

export default RepContainer;
