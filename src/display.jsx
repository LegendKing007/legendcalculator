import React from "react";

const Display = ({ display, resultBg, answer }) => {
	return (
		<div>
			<div className="result" style={{ backgroundColor: `${resultBg}` }}>
				{display}
			</div>
			<div
				className="result-2"
				style={{ backgroundColor: `${resultBg}` }}
			>
				{answer}
			</div>
		</div>
	);
};

export default Display;
