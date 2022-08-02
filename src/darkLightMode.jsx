import React, { Component } from "react";
import Moon from "./moon.png";
import Sun from "./sun-icon-8582 (1).png";
import Display from "./display";

class DarkLightMode extends Component {
	state = {
		backgroundColor: "white",
		sunDisplay: "none",
		moonDisplay: "block",
		resultBg: "rgb(235, 235, 235)",
	};

	changeBackgroundColor = (event) => {
		this.props.toggleMode("black");
		if (event === "white") {
			this.setState({
				backgroundColor: "black",
				sunDisplay: "block",
				moonDisplay: "none",
				resultBg: "rgb(41,41,41)",
			});
			console.log(this.state);
		} else {
			this.setState({
				backgroundColor: "white",
				sunDisplay: "none",
				moonDisplay: "block",
				resultBg: "rgb(235, 235, 235)",
			});
			console.log(this.state);
		}
	};
	render() {
		return (
			<div
				style={{
					backgroundColor: `${this.state.backgroundColor}`,
					height: "110%",
					width: "100%",
					position: "absolute",
				}}
			>
				<Display resultBg={this.state.resultBg} />
				<img
					className="sun-icon"
					src={Sun}
					alt="Moon"
					onClick={() => this.changeBackgroundColor("black")}
					// onClick={() => this.props.someFunction()}
					style={{ display: `${this.state.sunDisplay}` }}
				/>
				<img
					className="moon-icon"
					src={Moon}
					alt="Moon"
					onClick={() => this.changeBackgroundColor("white")}
					style={{ display: `${this.state.moonOpacity}` }}
					// onClick={() => this.props.someFunction()}
				/>
			</div>
		);
	}
}

export default DarkLightMode;
