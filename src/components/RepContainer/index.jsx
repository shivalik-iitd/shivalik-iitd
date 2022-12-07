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
				name: "Prashanth",
				role: "Cricket VC",
				imgUrl: "https://www.facebook.com/prashanthnayak.virat",
				contact: "9346785798",
				instiEmail: "bb1190015@iitd.ac.in",
			},
			{
				name: "Kamal",
				role: "Basketball VC",
				imgUrl: "https://drive.google.com/uc?export=view&id=1BOn-Sufvqmy8dXOPwGMIZdvSNmMJ4aJq",
				contact: "7231885889",
				instiEmail: "kamalmuhal3@gmail.com",
			},

			{
				name: "Mayank",
				role: "Volleyball VC",
				imgUrl: "https://drive.google.com/uc?export=view&id=18iE35dt6nENZB6fzrri24XpK4jj4mo2Y",
				contact: "7838914124",
				instiEmail: "me1190038@iitd.ac.in",
			},
			{
				name: "Sri Ram",
				role: "Table Tennis VC",
				imgUrl: "https://drive.google.com/uc?export=view&id=1AXWuC86YV63jU-SGJq3lOykJRWzO5bme",
				contact: "8374656746",
				instiEmail: "ch1190085@iitd.ac.in",
			},
			{
				name: "Harshit",
				role: "Cricket Captain",
				imgUrl: "https://drive.google.com/uc?export=view&id=1oS9zMXJ2EVex5IJ6rtyLnlD1UPibxtWO",
				contact: "9910156661",
				instiEmail: "ch1190086@iitd.ac.in",
			},
			{
				name: "Harshit",
				role: "Badminton VC",
				imgUrl: "https://drive.google.com/uc?export=view&id=1-C2bUarwrcFVX7FiGGW8BCg6fXubFL6F",
				contact: "9654994478",
				instiEmail: "am1201021@iitd.ac.in",
			},
			{
				name: "Bhargav Sidram",
				role: "Football Captain",
				imgUrl: "https://drive.google.com/uc?export=view&id=1QTPkibmjjxrUwO5bNDi-UnEEFtY-e1W7",
				contact: "9379201441",
				instiEmail: "ee3190562@iitd.ac.in",
			},
			{
				name: "Mayank",
				role: "Weight Lifting VC",
				imgUrl: "https://drive.google.com/uc?export=view&id=1P9t4P0lcwd999xubm7Y2H1VzxzT53EmO",
				contact: "8448340551",
				instiEmail: "bb1190037@iitd.ac.in",
			},
			{
				name: "Puru",
				role: "Squash VC",
				imgUrl: "https://drive.google.com/uc?export=view&id=1IivXG6mBW0S8MeT8vvtBbEigdHLa2dBb",
				contact: "9501465496",
				instiEmail: "ch1190117@iitd.ac.in",
			},
			{
				name: "Girish",
				role: "Table Tennis Captain",
				imgUrl: "https://drive.google.com/uc?export=view&id=1N9g6obm3CMvPU-wXxt1Xi0zRSVs9pmQC",
				contact: "9672253700",
				instiEmail: "ee3190568@iitd.ac.in",
			},
			{
				name: "Divyam",
				role: "Football VC",
				imgUrl: "https://drive.google.com/uc?export=view&id=1Wp6XSgYLmAtPIAdusFh4miWEVgCVaYOU",
				contact: "9953898603",
				instiEmail: "me2190881@iitd.ac.in",
			},
			{
				name: "Aman",
				role: "Athletics Captain",
				imgUrl: "https://drive.google.com/uc?export=view&id=1eLmb3jvsdl-CRI-e1D9FBrClVgP_aqx4",
				contact: "9012137413",
				instiEmail: "ch1190074@iitd.ac.in",
			},
			{
				name: "Alwin",
				role: "Hockey VC",
				imgUrl: "https://drive.google.com/uc?export=view&id=1Jz0KK5SCstbm08o-dUepLNESCLWL_NRw",
				contact: "8146655712",
				instiEmail: "me2190863@iitd.ac.in",
			},
			{
				name: "Ritik",
				role: "Squash Captain",
				imgUrl: "https://drive.google.com/uc?export=view&id=1QnNhwO0pt7Ag01nTg5Xriz8sXnK18TQu",
				contact: "7987007338",
				instiEmail: "ee3190596@iitd.ac.in",
			},
			{
				name: "Bhushan",
				role: "Athletics VC",
				imgUrl: "https://drive.google.com/uc?export=view&id=1WfA5Qr-OuyAJcy3NR5OnFzLcVF69nSDm",
				contact: "7060446787",
				instiEmail: "me2190875@mech.iitd.ac.in",
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
