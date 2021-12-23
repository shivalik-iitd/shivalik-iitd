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
				imgUrl: "https://drive.google.com/file/d/1THNestHiw9TVYeyvSSR-D0tJmJoYAnWQ/view?usp=drivesdk",
				contact: "9711733868",
				instiEmail: "cs1200347@cse.iitd.ac.in",
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
				imgUrl: "https://drive.google.com/file/d/1THNestHiw9TVYeyvSSR-D0tJmJoYAnWQ/view?usp=drivesdk",
				contact: "9711733868",
				instiEmail: "cs1200347@cse.iitd.ac.in",
			},
			{
				firstName: "Ishaan",
				lastName: "Singhal",
				role: "Technical Secretary",
				imgUrl: "https://drive.google.com/file/d/1THNestHiw9TVYeyvSSR-D0tJmJoYAnWQ/view?usp=drivesdk",
				contact: "9711733868",
				instiEmail: "cs1200347@cse.iitd.ac.in",
			},
			{
				firstName: "Keshav",
				lastName: "Gupta",
				role: "Cultural Secretary",
				imgUrl: "https://drive.google.com/file/d/1THNestHiw9TVYeyvSSR-D0tJmJoYAnWQ/view?usp=drivesdk",
				contact: "9711733868",
				instiEmail: "cs1200347@cse.iitd.ac.in",
			},
			{
				firstName: "Kartik",
				lastName: "Khandelwal",
				role: "SAC Secretary",
				imgUrl: "https://drive.google.com/file/d/1THNestHiw9TVYeyvSSR-D0tJmJoYAnWQ/view?usp=drivesdk",
				contact: "9711733868",
				instiEmail: "cs1200347@cse.iitd.ac.in",
			},
			{
				firstName: "Hari",
				lastName: "Shankar",
				role: "Mess Secretary",
				imgUrl: "https://drive.google.com/file/d/1THNestHiw9TVYeyvSSR-D0tJmJoYAnWQ/view?usp=drivesdk",
				contact: "9711733868",
				instiEmail: "cs1200347@cse.iitd.ac.in",
			},
			{
				firstName: "Nischay",
				lastName: "Singh",
				role: "Maintainence Secretary",
				imgUrl: "https://drive.google.com/file/d/1THNestHiw9TVYeyvSSR-D0tJmJoYAnWQ/view?usp=drivesdk",
				contact: "9711733868",
				instiEmail: "cs1200347@cse.iitd.ac.in",
			},
			{
				firstName: "Devang",
				lastName: "Singh",
				role: "Library Secretary",
				imgUrl: "https://drive.google.com/file/d/1THNestHiw9TVYeyvSSR-D0tJmJoYAnWQ/view?usp=drivesdk",
				contact: "9711733868",
				instiEmail: "cs1200347@cse.iitd.ac.in",
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
				imgUrl: "https://csciitd-my.sharepoint.com/:i:/g/personal/mt1200795_iitd_ac_in/ESLUAsRjvR5Mjazk12ZeD7QBrwQrAJANhNHtVidUGoLnjg?e=Y1HeFv",
				contact: "9560350509",
				instiEmail: "mt1200795@iitd.ac.in",
			},
			{
				firstName: "Harshit",
				lastName: "Kumar",
				role: "BSW",
				imgUrl: "https://drive.google.com/file/d/1THNestHiw9TVYeyvSSR-D0tJmJoYAnWQ/view?usp=drivesdk",
				contact: "9711733868",
				instiEmail: "cs1200347@cse.iitd.ac.in",
			},
			{
				firstName: "Vaibhav",
				lastName: "Saha",
				role: "Design",
				imgUrl: "https://drive.google.com/file/d/1cfrjkiNmAta_SlNBPFOpizGTJFPW6sWf/view?usp=drivesdk",
				contact: "9430050427",
				instiEmail: "cs1200403@cse.iitd.ac.in",
			},
			{
				firstName: "Jatin",
				lastName: "Jangpangi",
				role: "Spic Macay",
				imgUrl: "https://drive.google.com/folderview?id=10PIU-_rKx3fe48UDtwjzGvN-lPTtaRO4",
				contact: "6398860754",
				instiEmail: "mt1200811@iitd.ac.in",
			},
			{
				firstName: "Sibasish",
				lastName: "Rout",
				role: "Music",
				imgUrl: "https://drive.google.com/file/d/19ZwS8eIFod_6zDQhEDGlvq5WVhSIqJ02/view?usp=drivesdk",
				contact: "7205096336",
				instiEmail: "cs1200386@iitd.ac.in",
			},
			{
				firstName: "Anurag",
				lastName: "Yadav",
				role: "Debating",
				imgUrl: "https://drive.google.com/file/d/1fGQe-HMGhDQPnGTFJyGVdJl4Zelvzf96/view?usp=drivesdk",
				contact: "7976118384",
				instiEmail: "me2201000@iitd.ac.in",
			},
			{
				firstName: "Nayan",
				lastName: "Asati",
				role: "Indoor Sports",
				imgUrl: "https://drive.google.com/file/d/1OIWujKq_All75AeJTR5IbZXPWTklJhdh/view?usp=drivesdk	",
				contact: "8349377561",
				instiEmail: "me2201035@iitd.ac.in",
			},
			{
				firstName: "Nikhil",
				lastName: "Verma",
				role: "Fine Arts and Crafts",
				imgUrl: "https://drive.google.com/file/d/1u-ZBuVeb6WydHr0EfuOQo73XRwg1R7nR/view?usp=drivesdk",
				contact: "8235432911",
				instiEmail: "mt1200827@maths.iitd.ac.in",
			},
			{
				firstName: "Divyansh",
				lastName: "Mittal",
				role: "Literature",
				imgUrl: "https://drive.google.com/file/d/1yK5HJB5abfkzwQ7ohLtdCBYF3o2R7z7G/view?usp=sharing",
				contact: "8920424919",
				instiEmail: "cs1200342@iitd.ac.in",
			},
			{
				firstName: "Umang",
				lastName: "Kumar",
				role: "BHM",
				imgUrl: "https://drive.google.com/file/d/1hOQeakPrcAzsvfvy-tpTB4-p93pWMBF1/view?usp=drivesdk",
				contact: "7631027165",
				instiEmail: "ce1200258@civil.iitd.ac.in",
			},
			{
				firstName: "Navneet",
				lastName: "Singh",
				role: "Drama",
				imgUrl: "https://drive.google.com/file/d/1gtq4JGsS-P7VNx4CYZjfg-AgtDkDxzeK/view?usp=drivesdk",
				contact: "9416579331",
				instiEmail: "mt1200824@iitd.ac.in",
			},
			{
				firstName: "Soumil",
				lastName: "Aggarwal",
				role: "Quizzing",
				imgUrl: "https://drive.google.com/file/d/178XvMTUjM4ZD_TGzvRRKvYqfS7IFll6y/view?usp=sharing",
				contact: "9910994282",
				instiEmail: "cs1200392@iitd.ac.in",
			},
			{
				firstName: "Daksh",
				lastName: "Khandelwal",
				role: "Hindi Samiti",
				imgUrl: "https://drive.google.com/file/d/1gXw3rDysItga8nPBZF5N6_SnZLlhyBZ2/view?usp=drivesdk",
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
				imgUrl: "https://drive.google.com/file/d/1BOn-Sufvqmy8dXOPwGMIZdvSNmMJ4aJq/view?usp=drivesdk",
				contact: "7231885889",
				instiEmail: "kamalmuhal3@gmail.com",
			},

			{
				firstName: "Mayank",
				lastName: "Singh",
				role: "Volleyball VC",
				imgUrl: "https://drive.google.com/file/d/18iE35dt6nENZB6fzrri24XpK4jj4mo2Y/view?usp=drivesdk",
				contact: "7838914124",
				instiEmail: "me1190038@iitd.ac.in",
			},
			{
				firstName: "Sri Ram",
				lastName: "Harsha",
				role: "Table Tennis VC",
				imgUrl: "https://drive.google.com/file/d/1AXWuC86YV63jU-SGJq3lOykJRWzO5bme/view?usp=drivesdk",
				contact: "8374656746",
				instiEmail: "ch1190085@iitd.ac.in",
			},
			{
				firstName: "Harshit",
				lastName: "Gupta",
				role: "Cricket Captain",
				imgUrl: "https://drive.google.com/file/d/1oS9zMXJ2EVex5IJ6rtyLnlD1UPibxtWO/view?usp=sharing",
				contact: "9910156661",
				instiEmail: "ch1190086@iitd.ac.in",
			},
			{
				firstName: "Harshit",
				lastName: "Rastogi",
				role: "Badminton VC",
				imgUrl: "https://drive.google.com/file/d/1-C2bUarwrcFVX7FiGGW8BCg6fXubFL6F/view?usp=drivesdk",
				contact: "9654994478",
				instiEmail: "am1201021@iitd.ac.in",
			},
			{
				firstName: "Bhargav Sidram",
				lastName: "Halipeth",
				role: "Football Captain",
				imgUrl: "https://drive.google.com/file/d/1QTPkibmjjxrUwO5bNDi-UnEEFtY-e1W7/view?usp=drivesdk",
				contact: "9379201441",
				instiEmail: "ee3190562@iitd.ac.in",
			},
			{
				firstName: "Mayank",
				lastName: "Dhaka",
				role: "Weight Lifting VC",
				imgUrl: "https://drive.google.com/file/d/1P9t4P0lcwd999xubm7Y2H1VzxzT53EmO/view?usp=drivesdk",
				contact: "8448340551",
				instiEmail: "bb1190037@iitd.ac.in",
			},
			{
				firstName: "Puru",
				lastName: "Goel",
				role: "Squash VC",
				imgUrl: "https://drive.google.com/file/d/1IivXG6mBW0S8MeT8vvtBbEigdHLa2dBb/view?usp=drivesdk",
				contact: "9501465496",
				instiEmail: "ch1190117@iitd.ac.in",
			},
			{
				firstName: "Girish",
				lastName: "Katewa",
				role: "Table Tennis Captain",
				imgUrl: "https://drive.google.com/file/d/1N9g6obm3CMvPU-wXxt1Xi0zRSVs9pmQC/view?usp=drivesdk",
				contact: "9672253700",
				instiEmail: "ee3190568@iitd.ac.in",
			},
			{
				firstName: "Divyam",
				lastName: "Kaushik",
				role: "Football VC",
				imgUrl: "https://drive.google.com/file/d/1Wp6XSgYLmAtPIAdusFh4miWEVgCVaYOU/view?usp=sharing",
				contact: "9953898603",
				instiEmail: "me2190881@iitd.ac.in",
			},
			{
				firstName: "Aman",
				lastName: "Yadav",
				role: "Athletics Captain",
				imgUrl: "https://drive.google.com/folderview?id=1GtdqIuVPGj8507x0eXTVHq_f7ow5tmWl",
				contact: "9012137413",
				instiEmail: "ch1190074@iitd.ac.in",
			},
			{
				firstName: "Alwin",
				lastName: "Alwin",
				role: "Hockey VC",
				imgUrl: "https://drive.google.com/file/d/1Jz0KK5SCstbm08o-dUepLNESCLWL_NRw/view?usp=drivesdk",
				contact: "8146655712",
				instiEmail: "me2190863@iitd.ac.in",
			},
			{
				firstName: "Ritik",
				lastName: "Rangari",
				role: "Squash Captain",
				imgUrl: "https://drive.google.com/file/d/1QnNhwO0pt7Ag01nTg5Xriz8sXnK18TQu/view?usp=drivesdk",
				contact: "7987007338",
				instiEmail: "ee3190596@iitd.ac.in",
			},
			{
				firstName: "Bhushan",
				lastName: "Singh",
				role: "Athletics VC",
				imgUrl: "https://drive.google.com/file/d/1WfA5Qr-OuyAJcy3NR5OnFzLcVF69nSDm/view?usp=drivesdk",
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
