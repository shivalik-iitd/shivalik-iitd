const anim = {
	sidebar: {
		initial: {
			x: -300,
			opacity: 0,
		},
		animate: {
			x: 0,
			opacity: 1,
			transition: {
				type: "linear",
			},
		},
		exit: {
			x: -300,
			opacity: 0,
		},
	},
};

export default anim;
