import React from "react";
import PersonCard from "../PersonCard";
import "./rep-container.css";

const REP_INFORMATION = [
	{
		sectionHeading: "House Secretary",
		people: [
			{
				firstName: "Ritvik",
				lastName: "Ajaria",
				role: "House Secretary",
				imgUrl: "https://drive.google.com/uc?export=view&id=1DqmXx4EMOFFYgmuwRH7PIflP9KE5zasV",
				contact: "9001379992",
				instiEmail: "mt1180766@iitd.ac.in",
			},
		],
	},
	{
		sectionHeading: "Secretaries",
		people: [
			{
				firstName: "Narendra",
				lastName: "Kumar",
				role: "Sports Secretary",
				imgUrl: "https://drive.google.com/uc?export=view&id=1i-m-3jnxcVZLnLdMwQjR_rDSlEEDXy_s",
				contact: "9024835007",
				instiEmail: "ee1190105@iitd.ac.in",
			},
			{
				firstName: "Ishaan",
				lastName: "Singhal",
				role: "Technical Secretary",
				imgUrl: "https://drive.google.com/uc?export=view&id=1lQrFCspV_DGX-Q-TG4loMwlzpS_cVTUe",
				contact: "9649641142",
				instiEmail: "ee3190574@iitd.ac.in",
			},
			{
				firstName: "Keshav",
				lastName: "Gupta",
				role: "Cultural Secretary",
				imgUrl: "https://drive.google.com/uc?export=view&id=1-NNVXrMY5fFHL4mXLOQLgadnjZtJLhe3",
				contact: "9541583322",
				instiEmail: "ch1190099@iitd.ac.in",
			},
			{
				firstName: "Kartik",
				lastName: "Khandelwal",
				role: "SAC Secretary",
				imgUrl: "https://drive.google.com/uc?export=view&id=189aPreGfhsq29txbKGJTCw3eCLYfAsEK",
				contact: "7409901202",
				instiEmail: "ch1190097@iitd.ac.in",
			},
			{
				firstName: "Hari",
				lastName: "Shankar",
				role: "Mess Secretary",
				imgUrl: "https://drive.google.com/uc?export=view&id=1YV3bE6N2FugzGGO2VVaYhKU-Yqdm1yx0",
				contact: "9024835007",
				instiEmail: "cs1190386@cse.iitd.ac.in",
			},
			{
				firstName: "Nischay",
				lastName: "Singh",
				role: "Maintenance Secretary",
				imgUrl: "https://drive.google.com/uc?export=view&id=1zL9F3mOUgYIzenZtNVMGdZq6qZ-7ogo9",
				contact: "8290309237",
				instiEmail: "ch1190109@iitd.ac.in",
			},
			{
				firstName: "Devang",
				lastName: "Singh",
				role: "Library Secretary",
				imgUrl: "https://drive.google.com/uc?export=view&id=13QSuzatUhZzU7ti64-s0Qe_9o8Uita9s",
				contact: "8114430657",
				instiEmail: "me2190879@iitd.ac.in",
			},
		],
	},
	{
		sectionHeading: "Representatives",
		people: [
			{
				firstName: "Chaxu",
				lastName: "Garg",
				role: "BSW",
				imgUrl: "https://drive.google.com/uc?export=view&id=1DbXrjnxeBB-mexYv875RYr7aOLy9Wiji",
				contact: "9560350509",
				instiEmail: "mt1200795@iitd.ac.in",
			},
			{
				firstName: "Harshit",
				lastName: "Kumar",
				role: "BSW",
				imgUrl: "https://drive.google.com/uc?export=view&id=1THNestHiw9TVYeyvSSR-D0tJmJoYAnWQ",
				contact: "9711733868",
				instiEmail: "cs1200347@cse.iitd.ac.in",
			},
			{
				firstName: "Vaibhav",
				lastName: "Saha",
				role: "Design",
				imgUrl: "https://drive.google.com/uc?export=view&id=1cfrjkiNmAta_SlNBPFOpizGTJFPW6sWf",
				contact: "9430050427",
				instiEmail: "cs1200403@cse.iitd.ac.in",
			},
			{
				firstName: "Jatin",
				lastName: "Jangpangi",
				role: "Spic Macay",
				imgUrl: "https://drive.google.com/uc?export=view&id=10PIU-_rKx3fe48UDtwjzGvN-lPTtaRO4",
				contact: "6398860754",
				instiEmail: "mt1200811@iitd.ac.in",
			},
			{
				firstName: "Sibasish",
				lastName: "Rout",
				role: "Music",
				imgUrl: "https://drive.google.com/uc?export=view&id=19ZwS8eIFod_6zDQhEDGlvq5WVhSIqJ02",
				contact: "7205096336",
				instiEmail: "cs1200386@iitd.ac.in",
			},
			{
				firstName: "Anurag",
				lastName: "Yadav",
				role: "Debating",
				imgUrl: "https://drive.google.com/uc?export=view&id=1fGQe-HMGhDQPnGTFJyGVdJl4Zelvzf96",
				contact: "7976118384",
				instiEmail: "me2201000@iitd.ac.in",
			},
			{
				firstName: "Nayan",
				lastName: "Asati",
				role: "Indoor Sports",
				imgUrl: "https://drive.google.com/uc?export=view&id=1OIWujKq_All75AeJTR5IbZXPWTklJhdh",
				contact: "8349377561",
				instiEmail: "me2201035@iitd.ac.in",
			},
			{
				firstName: "Nikhil",
				lastName: "Verma",
				role: "Fine Arts and Crafts",
				imgUrl: "https://drive.google.com/uc?export=view&id=1u-ZBuVeb6WydHr0EfuOQo73XRwg1R7nR",
				contact: "8235432911",
				instiEmail: "mt1200827@maths.iitd.ac.in",
			},
			{
				firstName: "Divyansh",
				lastName: "Mittal",
				role: "Literature",
				imgUrl: "https://drive.google.com/uc?export=view&id=1yK5HJB5abfkzwQ7ohLtdCBYF3o2R7z7G",
				contact: "8920424919",
				instiEmail: "cs1200342@iitd.ac.in",
			},
			{
				firstName: "Umang",
				lastName: "Kumar",
				role: "BHM",
				imgUrl: "https://drive.google.com/uc?export=view&id=1hOQeakPrcAzsvfvy-tpTB4-p93pWMBF1",
				contact: "7631027165",
				instiEmail: "ce1200258@civil.iitd.ac.in",
			},
			{
				firstName: "Navneet",
				lastName: "Singh",
				role: "Drama",
				imgUrl: "https://drive.google.com/uc?export=view&id=1gtq4JGsS-P7VNx4CYZjfg-AgtDkDxzeK",
				contact: "9416579331",
				instiEmail: "mt1200824@iitd.ac.in",
			},
			{
				firstName: "Soumil",
				lastName: "Aggarwal",
				role: "Quizzing",
				imgUrl: "https://drive.google.com/uc?export=view&id=178XvMTUjM4ZD_TGzvRRKvYqfS7IFll6y",
				contact: "9910994282",
				instiEmail: "cs1200392@iitd.ac.in",
			},
			{
				firstName: "Daksh",
				lastName: "Khandelwal",
				role: "Hindi Samiti",
				imgUrl: "https://drive.google.com/uc?export=view&id=1gXw3rDysItga8nPBZF5N6_SnZLlhyBZ2",
				contact: "8003188291",
				instiEmail: "cs1200338@cse.iitd.ac.in",
			},
		],
	},
	{
		sectionHeading: "Captains and Vice Captains",
		people: [
			{
				firstName: "Prashanth",
				lastName: "Badavath",
				role: "Cricket VC",
				imgUrl: "https://www.facebook.com/prashanthnayak.virat",
				contact: "9346785798",
				instiEmail: "bb1190015@iitd.ac.in",
			},
			{
				firstName: "Kamal",
				lastName: "Muhal",
				role: "Basketball VC",
				imgUrl: "https://drive.google.com/uc?export=view&id=1BOn-Sufvqmy8dXOPwGMIZdvSNmMJ4aJq",
				contact: "7231885889",
				instiEmail: "kamalmuhal3@gmail.com",
			},

			{
				firstName: "Mayank",
				lastName: "Singh",
				role: "Volleyball VC",
				imgUrl: "https://drive.google.com/uc?export=view&id=18iE35dt6nENZB6fzrri24XpK4jj4mo2Y",
				contact: "7838914124",
				instiEmail: "me1190038@iitd.ac.in",
			},
			{
				firstName: "Sri Ram",
				lastName: "Harsha",
				role: "Table Tennis VC",
				imgUrl: "https://drive.google.com/uc?export=view&id=1AXWuC86YV63jU-SGJq3lOykJRWzO5bme",
				contact: "8374656746",
				instiEmail: "ch1190085@iitd.ac.in",
			},
			{
				firstName: "Harshit",
				lastName: "Gupta",
				role: "Cricket Captain",
				imgUrl: "https://drive.google.com/uc?export=view&id=1oS9zMXJ2EVex5IJ6rtyLnlD1UPibxtWO",
				contact: "9910156661",
				instiEmail: "ch1190086@iitd.ac.in",
			},
			{
				firstName: "Harshit",
				lastName: "Rastogi",
				role: "Badminton VC",
				imgUrl: "https://drive.google.com/uc?export=view&id=1-C2bUarwrcFVX7FiGGW8BCg6fXubFL6F",
				contact: "9654994478",
				instiEmail: "am1201021@iitd.ac.in",
			},
			{
				firstName: "Bhargav Sidram",
				lastName: "Halipeth",
				role: "Football Captain",
				imgUrl: "https://drive.google.com/uc?export=view&id=1QTPkibmjjxrUwO5bNDi-UnEEFtY-e1W7",
				contact: "9379201441",
				instiEmail: "ee3190562@iitd.ac.in",
			},
			{
				firstName: "Mayank",
				lastName: "Dhaka",
				role: "Weight Lifting VC",
				imgUrl: "https://drive.google.com/uc?export=view&id=1P9t4P0lcwd999xubm7Y2H1VzxzT53EmO",
				contact: "8448340551",
				instiEmail: "bb1190037@iitd.ac.in",
			},
			{
				firstName: "Puru",
				lastName: "Goel",
				role: "Squash VC",
				imgUrl: "https://drive.google.com/uc?export=view&id=1IivXG6mBW0S8MeT8vvtBbEigdHLa2dBb",
				contact: "9501465496",
				instiEmail: "ch1190117@iitd.ac.in",
			},
			{
				firstName: "Girish",
				lastName: "Katewa",
				role: "Table Tennis Captain",
				imgUrl: "https://drive.google.com/uc?export=view&id=1N9g6obm3CMvPU-wXxt1Xi0zRSVs9pmQC",
				contact: "9672253700",
				instiEmail: "ee3190568@iitd.ac.in",
			},
			{
				firstName: "Divyam",
				lastName: "Kaushik",
				role: "Football VC",
				imgUrl: "https://drive.google.com/uc?export=view&id=1Wp6XSgYLmAtPIAdusFh4miWEVgCVaYOU",
				contact: "9953898603",
				instiEmail: "me2190881@iitd.ac.in",
			},
			{
				firstName: "Aman",
				lastName: "Yadav",
				role: "Athletics Captain",
				imgUrl: "https://drive.google.com/uc?export=view&id=1eLmb3jvsdl-CRI-e1D9FBrClVgP_aqx4",
				contact: "9012137413",
				instiEmail: "ch1190074@iitd.ac.in",
			},
			{
				firstName: "Alwin",
				lastName: ".",
				role: "Hockey VC",
				imgUrl: "https://drive.google.com/uc?export=view&id=1Jz0KK5SCstbm08o-dUepLNESCLWL_NRw",
				contact: "8146655712",
				instiEmail: "me2190863@iitd.ac.in",
			},
			{
				firstName: "Ritik",
				lastName: "Rangari",
				role: "Squash Captain",
				imgUrl: "https://drive.google.com/uc?export=view&id=1QnNhwO0pt7Ag01nTg5Xriz8sXnK18TQu",
				contact: "7987007338",
				instiEmail: "ee3190596@iitd.ac.in",
			},
			{
				firstName: "Bhushan",
				lastName: "Singh",
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
