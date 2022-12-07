import React from "react";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import "./person-card.css";

const PersonCard = ({
	name,
	role,
	imgUrl,
	contact,
	instiEmail,
}) => {
	return (
		<section className="person-card">
			<img src={imgUrl} alt="" />
			<div className="person-card-details">
				<div>
					{name}
				</div>
				<div>{role}</div>
			</div>
			<div className="person-card-contact">
				{contact && (
					<a href={`tel:${contact}`}>
						<AiFillPhone />
					</a>
				)}
				{instiEmail && (
					<a href={`mailto:${instiEmail}`}>
						<MdEmail />
					</a>
				)}
			</div>
		</section>
	);
};
export default PersonCard;
